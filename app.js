const express = require('express');
const multer = require('multer');
const upload = multer();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile('public/index.html');
});

app.post('/get-file-size', upload.single('file'), (req, res) => {
	const size = req.file.size;
	res.send({ size });
});

app.listen(port, () => {
	console.log('Server started');
});