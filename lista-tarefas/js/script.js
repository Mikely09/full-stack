//Funçao em Javascript
function adicionar() {
    //Variáveis
    let tarefa = document.getElementById("tarefa");
    let lista = document.getElementById("lista");

    let item = document.createElement("li");
    item.textContent = tarefa.value;

    lista.appendChild(item);

}
