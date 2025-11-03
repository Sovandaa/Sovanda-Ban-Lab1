const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, GitHub Actions!');
});

module.exports = app;

// "test": "echo \"Error: no test specified\" && exit 1"