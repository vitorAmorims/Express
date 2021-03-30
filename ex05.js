const express = require('express');
const server = express();
const router = require('./ex05_routes');

// importadas as minhas rotas
server.use('/api', router) //aqui o router é um middleware

server.listen(3000, () => console.log('Running on port 3000'))