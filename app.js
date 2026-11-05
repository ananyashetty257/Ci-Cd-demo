const express = require('express');

const app = express();

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Express Application!');
});

// Sample API route
app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'API is working successfully'
    });
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;