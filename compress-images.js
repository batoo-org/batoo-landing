import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import fs from 'fs';
import path from 'path';

const dir = 'packages/landing/static/assets';

(async () => {
	const files = fs
		.readdirSync(dir)
		.filter((f) => /\.(png|jpg|jpeg)$/i.test(f))
		.map((f) => path.join(dir, f));

	if (files.length === 0) {
		console.log('Nessuna immagine PNG/JPG trovata.');
		return;
	}

	for (const file of files) {
		const buffer = fs.readFileSync(file);
		const ext = path.extname(file).toLowerCase();
		let plugins = [];
		if (ext === '.png') plugins = [imageminPngquant({ quality: [0.6, 0.8] })];
		if (ext === '.jpg' || ext === '.jpeg') plugins = [imageminMozjpeg({ quality: 75 })];
		const [compressed] = await imagemin.buffer(buffer, { plugins });
		if (compressed && compressed.length < buffer.length) {
			fs.writeFileSync(file, compressed);
			console.log(
				`Compresso: ${file} (${(buffer.length / 1024).toFixed(1)} KB → ${(compressed.length / 1024).toFixed(1)} KB)`
			);
		} else {
			console.log(`Nessun guadagno: ${file}`);
		}
	}
})();
