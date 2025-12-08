import express from "express";
import conexao from "../infra/conexao.js"
const app = express ();

app.get ("/",(req,res) => {
res.send ("Olá Copa do mundo!");
});

//Buscar todas as seleções
app.get('/selecoes',(req,res)=>{
    const sql = "select * from selecoes";
    
    conexao.query(sql, (erro,result)=>{
res.json(result);
    });

});



export default app;





