const BotaoFinalizar = () => {
    const botaoConclui = document.createElement("button");

    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = "Finalizar";
    botaoConclui.addEventListener("click", concluirTarefa);

    return botaoConclui;
};

const concluirTarefa = (evento) => {
    const botatoConclui = evento.target;
    const tarefaCompleta = botatoConclui.parentElement;
    /* 
Através da variável botaoConclui capturamos qual elemento foi clicado, depois utilizamos a propriedade parentElement para subir um nó na árvore, por fim colocamos o método toggle que vai adicionar a classe done quando clicarmos no botão
*/
    tarefaCompleta.classList.toggle("done");
};

export default BotaoFinalizar;

/* 
Para exportar mais de uma funçao

export {
    BotaoFinalizar,
    concluirTarefa
}

*/