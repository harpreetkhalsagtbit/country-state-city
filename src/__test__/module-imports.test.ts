/* eslint-disable import/no-extraneous-dependencies */
// Checks the built package in lib/, so `npm run build` must run first (CI does this).
// Locks the documented per-module import paths: country and state must load on their own,
// without pulling in the 8 MB city list.
import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const lib = path.resolve(__dirname, '../../lib');

// Follows relative `import ... from './x'` statements in the ES module build.
const esmDependencies = (entry: string): string[] => {
	const seen = new Set<string>();
	const visit = (file: string) => {
		if (seen.has(file)) return;
		seen.add(file);
		if (!file.endsWith('.js')) return;
		const source = fs.readFileSync(file, 'utf-8');
		const specifiers = Array.from(source.matchAll(/from\s+['"](\.[^'"]+)['"]/g)).map((m) => {
			return m[1];
		});
		specifiers.forEach((spec) => {
			const base = path.resolve(path.dirname(file), spec);
			const candidates = [base, `${base}.js`, path.join(base, 'index.js')];
			const found = candidates.find((c) => {
				return fs.existsSync(c) && fs.statSync(c).isFile();
			});
			if (found) visit(found);
		});
	};
	visit(entry);
	return Array.from(seen).map((f) => {
		return path.relative(lib, f);
	});
};

// Loads the CommonJS build in a separate Node process and lists the package files it read.
const cjsLoadedFiles = (modules: string[]): string[] => {
	const script = `
		${modules
			.map((m) => {
				return `require(${JSON.stringify(path.join(lib, 'cjs', m))});`;
			})
			.join('\n')}
		console.log(JSON.stringify(Object.keys(require.cache)));
	`;
	const loaded: string[] = JSON.parse(execFileSync(process.execPath, ['-e', script], { encoding: 'utf-8' }));
	return loaded.map((f) => {
		return path.relative(lib, f);
	});
};

beforeAll(() => {
	if (!fs.existsSync(path.join(lib, 'index.js'))) {
		throw new Error('lib/ not found: run `npm run build` before these tests');
	}
});

describe('documented per-module import paths', () => {
	test.each(['index', 'country', 'state', 'city'])('lib/%s and lib/cjs/%s exist', (name) => {
		expect(fs.existsSync(path.join(lib, `${name}.js`))).toBe(true);
		expect(fs.existsSync(path.join(lib, `${name}.d.ts`))).toBe(true);
		expect(fs.existsSync(path.join(lib, 'cjs', `${name}.js`))).toBe(true);
	});

	test('ES modules: country and state do not import the city list', () => {
		const deps = [...esmDependencies(path.join(lib, 'country.js')), ...esmDependencies(path.join(lib, 'state.js'))];
		expect(deps).toContain('assets/country.json');
		expect(deps).toContain('assets/state.json');
		expect(deps).not.toContain('assets/city.json');
	});

	test('CommonJS: country and state load without the city list', () => {
		const loaded = cjsLoadedFiles(['country', 'state']);
		expect(loaded).toContain('cjs/assets/country.json');
		expect(loaded).not.toContain('cjs/assets/city.json');
	});

	test('CommonJS: the default exports work when required directly', () => {
		const script = `
			const Country = require(${JSON.stringify(path.join(lib, 'cjs', 'country'))}).default;
			const State = require(${JSON.stringify(path.join(lib, 'cjs', 'state'))}).default;
			console.log(JSON.stringify([Country.getCountryByCode('IN').name, State.getStatesOfCountry('IN').length > 0]));
		`;
		expect(JSON.parse(execFileSync(process.execPath, ['-e', script], { encoding: 'utf-8' }))).toEqual([
			'India',
			true,
		]);
	});

	test('the main entry still loads the city list (documented behaviour)', () => {
		expect(cjsLoadedFiles(['index'])).toContain('cjs/assets/city.json');
		expect(esmDependencies(path.join(lib, 'index.js'))).toContain('assets/city.json');
	});
});
