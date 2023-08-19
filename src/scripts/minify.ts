import fs from 'fs';
import path from 'path';

const minifyFile = async (parentDir:string, file: string) => {
	try {
		const filePath = path.join(parentDir, file);
		const content:string = fs.readFileSync(filePath, 'utf-8');

		fs.writeFileSync(filePath, JSON.stringify(JSON.parse(content)));
		console.log(`Minified ${filePath}`);
	} catch (error) {
		console.error(`Error minifying ${file}:`, error);
	}
};

const minify = () => {
	const paths = [
		path.resolve(process.cwd(), 'lib/assets'),
		path.resolve(process.cwd(), 'lib/cjs/assets')
	]
	paths.forEach(parentDir => {
		fs.readdirSync(parentDir).forEach((file) => {
			if (file.endsWith('.json')) {
				minifyFile(parentDir, file);
			}
		});		
	})
}

minify();
