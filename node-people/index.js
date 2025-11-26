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


//Rota teste
app.get("/teste", (req,res) => {
    res.send("API nodePeople está funcionando!");

});

//Buscando nomes (listaNomes)
app.get("/nomes",(req,res)=> {
    res.send(nomes)
})

