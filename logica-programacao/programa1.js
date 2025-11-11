/*
Vamos criar um programa, que o usuário executa uma função
e dentro dessa função existe uma frase
pode pular linhas.
*/

function executarFrases(frase){
    document.write(frase);

}

function pularLinha(){
    document.write("<br>");

}

executarFrases("Javascript com logica");
pularLinha();
pularLinha();
executarFrases("Olá Mikely");


