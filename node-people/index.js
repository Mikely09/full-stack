const express =require("express");
const app = express();
const PORT =3000;//executar na porta 3000

//Indicar para express ler body com json
app.use(express.json());

app.listen (PORT,() =>{
    console.log(`servidor rodando no endereço https://localhost:${PORT}`);
});
// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];

const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];

//Criando Funçoes Auxiliares
//Retornando o objeto por id
function buscarNomePorId(id) {
    return nomes.filter((nome) => nome.id == id)
}

//Pegar a posição ou index do elemento do array por id
function buscarIdNomes (id){
    return nomes.findIndex((nome)=> nome.id == id);
}

//Criando Funçoes Auxiliares
//Retornando o objeto por id
function buscarTimesporId(id) {
    return times.filter((times) => times.id == id)
}

//Pegar a posição ou index do elemento do array por id
function buscarTimesporId (id){
    return times.findIndex((times)=> times.id == id);
}


//Rota teste
app.get("/teste", (req,res) => {
    res.send("API nodePeople está funcionando!");

});

//Buscando nomes (listaNomes)
app.get("/listaNomes",(req,res)=> {
    res.send(nomes);

})
//Buscando por ID
app.get("/listaNomes/:id",(req,res)=> {
let index = req.params.id;

res.json(buscarNomePorId(index))
});

//Criando Post para cadastrar
app.post("/listaNomes", (req,res)=>{
 nomes.push(req.body);
 res.status(201).send('Nomes cadastrado com sucesso!');
});

//Criando rota excluir
app.delete("/listaNomes/:id", (req,res) => {
    let id = req.params.id;
    let index = buscarIdNomes(req.params.id);
    
    //se não encontar,retorna erro
    if (index === -1){
        return res.status(404).send(`Nenhum nome com id ${id} foi encontrado`)
    }

    nomes.splice(index,1);
nomes.send(`Nomes com id ${req.params.id} excluida com sucesso!`)

});

//Rota principal
app.get("/principal", (req,res) => {
    res.send("Rota principal");

});

//Rota alterar
app.put("/listaNomes/:id",(req,res)=>{
    let index = buscarIdNomes(req.params.id);
    nomes[index].nome = req.body.nome;
    nomes[index].idade = req.body.idade;

res.json(nomes);
});

//Rota alterar
app.put("/listaTimes/:id",(req,res)=>{
    let index = buscarTimesporId (req.params.id);
    times [index].nome = req.body.time;
    times[index].estado = req.body.time;
    times[index].titulos = req.body.time;
})


// ROTAS de times
//Buscando times (listaTimes)
app.get("/listaTimes", (req, res) => {
   res.send(times);
})

//Buscando por ID
app.get("/listaTimes/:id",(req,res) => {
let index = req.params.id;

res.json(buscarTimesporId(index))
});


//Criando Post para cadastar
app.post("/listaTimes",(req,res) => {
    times.push(req.body);
    res.status(201).send('Times cadastrado com sucesso!');
});
 
//Criando Rota excluir
app.delete("/listaTimes/:id", (req, res) => {
  let index = buscarIdTimes(req.params.id);
  times.splice(index, 1);
  res.send(`Nomes com id ${req.params.id} excluida com sucesso!`);
});


