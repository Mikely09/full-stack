const express = require("express");
const app = express();
const port = 3000;

//Variável com os dados produtos
const produtos =[
    {id:1, nome: 'Produto A', preco: 100},
    {id:2, nome: 'Produto B', preco: 150},
    {id:2, nome: 'Produto B', preco: 200},
];

//Criar funçao
//Rota principal
app.get('/', (req, res) => {
 res.send('Bem vindo ao sevidor Node.js');
});

//Rota produtos
app.get ('/produtos', (req,res) => {
    res.send (produtos);
});

//Rota home
app.get('/home', (req,res)=>{
    console.log("olá:",__dirname);
    res.sendFile(__dirname +'/public/home.html');
});

//Executando o servidor
app.listen(port,() => {
    console.log(`Servindo rodando em http://localhost:${port}`);
});
