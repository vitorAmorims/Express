const express = require('express');
const server = express();


server.get('/', function (req, res, next) {
    console.log('início...');
    next();
    console.log('FIM');
})

server.get('/', function (req, res, next) {
    console.log('Resposta!!')
})


// output 
// running on port 3000
// início...
// Resposta!!
// FIM

server.listen(3000, () => console.log('running on port 3000'))