const { response } = require('express');
const express = require('express');
const server = express();

server.route('/clientes')
  .get((req, res) => res.send('Lista de clientes'))
  .post((req, res) => res.send('Novo cliente'))
  .put((req, res) => res.send('Alterar cliente'))
  .delete((req, res) => res.send('Excluir cliente'))

server.listen(3000, () => console.log('Running on port 3000'))

/*
forma interessante para mapear vários metodos para uma mesma url
*/
