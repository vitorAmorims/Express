const express = require('express');

const server = express();

server.get('/', function (req, res) {
    res.send('<h1>Welcome!</h1>');
})

server.get('/clientes', function (req, res) {
    res.send('<h1>Welcome clientes!</h1>');
})

server.all('/teste', function (req, res) {
    res.send('<h1>All services</h1>');
})

server.get(/api/, function (req, res) {
    res.send('<h3>API</h3>');
})

server.listen(3000, () => console.log('Running on port 3000'));