// Início
// 1 - criar um arquivo para declarar as nossas rotas
// 2 - importar as rotas e anexar o resultados dentro de uma url

// criar o arquivo
// ex05_routes.js

const express = require('express');
const router = express.Router(); //recebe uma instância Router

// pode definir um conj de rotas
// há partir desta instância, podemos colocar vários serviços dentro.

// pode colocar router.get e mapear uma fn para ele
// pode colocar os middleware dentro deste router
// e no final, pode colocar router dentro do express há partir de uma url.

// use, vai mapear para qualquer método http: get,post,put,delete...

// pode-se criar um router, para url baseada API clientes
// outro router, para url baseada API produtos

// exemplo mid global
//obj: calcular o tempo, da duração da requisição
router.use((req, res, next) => {
  const init  = Date.now(); // hora atual em milissegundos
  next();
  console.log(`Tempo = ${Date.now() - init} ms.`)
})
