const express = require("express");
const app = express();
const port = 300;

//Criar funçao
//Rota principal
app.get ('/', (req, res) => {
 res.send('Bem vindo ao sevidor Node.js');
});

//Executando o servidor
app.listen(port,() => {
    console.log('Servindo rodando em http://localhost:${port}');
});