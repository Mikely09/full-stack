/*Declarar numero como número
funcao mostrarDobro(valor)
escreva ("o dobro de ",valor,é,valor*2)
fim funcao
escreva (Digite  um numero:)
leia o numero
chame MostrarDobro(numero)

fim
*/
function mostrarDobro(valor)

{
    document.write("O dobro de ", valor ,"é", valor *2)
}
let numero = Number(prompt("Digite um numero:"));
mostrarDobro(numero);
