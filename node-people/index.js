const express =require("express");
const app = express();
const PORT =3000;//executar na porta 3000

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

//Criando Funçoes Auxiliares
//Retornando o objeto por id
function buscarNomePorId(id) {
    return nomes.filter((nome) => nome.id == id)
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

//Rota principal
app.get("/principal",)