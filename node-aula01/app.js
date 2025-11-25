const express = require("express");
const app = express();
const port = 3000;

//Middleware para servir arquivos estáticos
app.use(express.static('public'));

//Variável com os dados produtos
const produtos =[
    {id:1, nome: 'Produto A', preco: 100},
    {id:2, nome: 'Produto B', preco: 150},
    {id:2, nome: 'Produto B', preco: 200},
];
//Variavel de times
const times = [
{id: 1, nome: 'Santos', ano:1912},
{id: 1, nome: 'Paulista', ano:1913},
{id: 1, nome: 'São paulo', ano:1914},
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

//Rota times
app.get('/times',(req,res) => {
res.send (times);
});


//Executando o servidor
app.listen(port,() => {
    console.log(`Servindo rodando em http://localhost:${port}`);
});
