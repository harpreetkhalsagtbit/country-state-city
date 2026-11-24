/* eslint-disable no-console */
/**
 * Runs after both tsc builds. tsc copies every imported JSON file into each output folder, so
 * the per-country files would be shipped twice (lib/assets and lib/cjs/assets). This removes
 * the CommonJS copies and points the CommonJS loaders at lib/assets instead.
 * The three original assets (country.json, state.json, city.json) are left as they are.
 */
import fs from 'fs';
import path from 'path';

const lib = path.join(process.cwd(), 'lib');
const SHARED_DIRS = ['states', 'cities', 'cities-geo'];

['loaders.js', 'geoLoaders.js'].forEach((file) => {
	const target = path.join(lib, 'cjs/generated', file);
	const source = fs.readFileSync(target, 'utf-8');
	let count = 0;
	const updated = source.replace(/require\((['"])\.\.\/assets\/([^'"]+)\1\)/g, (match, quote, rest) => {
		const dir = rest.split('/')[0];
		if (!SHARED_DIRS.includes(dir)) return match;
		count += 1;
		return `require(${quote}../../assets/${rest}${quote})`;
	});
	if (count === 0) {
		throw new Error(`shareLazyAssets: no asset paths found in ${target}; did the tsc output change?`);
	}
	fs.writeFileSync(target, updated);
	console.log(`shareLazyAssets: ${file}: ${count} paths now point at lib/assets`);
});

SHARED_DIRS.forEach((dir) => {
	fs.rmSync(path.join(lib, 'cjs/assets', dir), { recursive: true, force: true });
});
