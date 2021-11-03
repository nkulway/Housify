const http = require('http');
const es6Renderer = require('express-es6-template-engine')

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/favicon.ico', (req, res) => {
    res.send('');
});

app.get('*', (req, res) => {
    res.send('This is not the home page')
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});