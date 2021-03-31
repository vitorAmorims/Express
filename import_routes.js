const express = require('express');
const server = express();
const router = require('./routes_login');

//importar as minhas rotas
server.use('/login', router);

server.listen(3000, () => console.log('Running on port 3000'));