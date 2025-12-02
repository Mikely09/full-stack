import express from "express";
const app =express ();

app.get ("/",(req,res)=> {
res.send ("Olá Node.js");
});

app.use(express.json());
export default app;

const cadastros = [
{
id: 1,
nome: "Fernanda Silva",
telefone: "11987654321",
cpf: "123.456.789-00",
email: "fernanda@gmail.com",
idade: 28,
endereco: "Rua das Flores, 123"
},
{
id: 2,
nome: "Caio Oliveira",
telefone: "11922223333",
cpf: "987.654.321-11",
email: "caio@gmail.com",
idade: 32,
endereco: "Avenida Brasil, 450"
},
{
id: 3,
nome: "Pedro Almeida",
telefone: "21999998888",
cpf: "321.654.987-55",
email: "pedro@hotmail.com",
idade: 45,
endereco: "Rua Central, 999"
}
];

//Criando Funçoes Auxiliares
//Retornar objeto por id
function buscarCadastroporid (id){
    return cadastros.findIndex((cadastros) => cadastros.id==id)

};
function buscaridCadastro (id){
    return cadastros.filter((cadastro)=> cadastro.id == id);
}

//Buscando cadastro (listaCadastros)
app.get("/listaCadastros",(req,res)=> {
    res.send(cadastros);

})

//Buscando por id
app.get("/listaCadastros/:id",(req,res)=> {
let app = req.params.id;

res.json(buscaridCadastro(app))
});

//Criando post para cadastrar pessoas
app.post("/listaCadastros", (req,res)=>{
 cadastros.push(req.body);
 res.status(201).send('Pessoas cadastradas com sucesso!');
});

//Criando Rota alterar cadastros
app.put("/listaCadastros/:id",(req,res)=> {
    let index = buscarCadastroporid(req.params.id);
    cadastros[index].nome = req.body.nome;
    cadastros[index].telefone = req.body.telefone;
    cadastros[index].email = req.body.email;
    cadastros[index].idade = req.body.idade;
    cadastros[index].idade = req.body.idade;
    cadastros[index].endereco = req.body.endereco;

res.json(cadastros);
});

//Criando Rota excluir
//Rota delete
app.delete("/listaCadastros/:id", (req, res) => {
  let app = buscarCadastroporid(req.params.id);
  cadastros.splice(app, 1);
  res.send(`Cadastros com id ${req.params.id} excluido com sucesso!`);
});
