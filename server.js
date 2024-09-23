const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Endpoint for Base64 encoding
app.post('/encode', (req, res) => {
    const { text } = req.body;
    const base64Encoded = Buffer.from(text).toString('base64');
    res.json({ encoded: base64Encoded });
});

// Endpoint for Base64 decoding
app.post('/decode', (req, res) => {
    const { text } = req.body;
    const decodedString = Buffer.from(text, 'base64').toString('utf-8');
    res.json({ decoded: decodedString });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
