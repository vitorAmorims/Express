const express = require('express');
const server = express();

server.use('/api', function(req, res, next) {
    console.log('inicio...');
    next();
    console.log('Fim...')
})

server.use('/api', function(req, res, next) {
    console.log('resposta')
    res.send('<h1>API!!</h1>')
})

// podemos user use para toda nossa aplicação
function midGeral(req, res, next) {
    console.log('passando em todas as rotas')
    res.send('<h1>middleware geral!!</h1>')
}

server.use(midGeral)

// .use: ele aceita todos os verbos do app/server e todos os caminhos de rota. 
// exemplo: /api/teste

// nota: deve começar com /api

// vamos usar com bodyparser

server.listen(3000, () => console.log('Running on port 3000'))