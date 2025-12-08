import express from "express";
import conexao from "../infra/conexao.js"
const app = express();

app.get("/", (req, res) => {
    res.send("Olá Copa do mundo!");
});

//Buscar todas as seleções
app.get('/selecoes', (req, res) => {
    const sql = "select * from selecoes";

    conexao.query(sql, (erro, result) => {
        res.json(result);
    });

});

//Buscando por ID
app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "select * from selecoes where id=?;";

    conexao.query(sql, id, (erro, result) => {
        res.json(result[0]);
    });

});

//Deletando registro
app.delete ('/selecoes/:id', (req,res) => {
const id = req.params.id;
const sql = "delete from selecoes where id =?;";
    
conexao.query (sql,id,(erro,result) => {
    res.json({mensagem : "Deletando com sucesso"});

});

});

export default app;





