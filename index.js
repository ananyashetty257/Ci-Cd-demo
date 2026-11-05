const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to DevOps Assignment!');
});

app.get('/about', (req, res) => {
    res.send('This is an Express application.');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;