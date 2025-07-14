import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
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
		const outFile = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
		const webp = await imagemin.buffer(buffer, {
			plugins: [imageminWebp({ quality: 75 })],
		});
		fs.writeFileSync(outFile, webp);
		console.log(`Creato: ${outFile} (${(webp.length / 1024).toFixed(1)} KB)`);
	}
})();
