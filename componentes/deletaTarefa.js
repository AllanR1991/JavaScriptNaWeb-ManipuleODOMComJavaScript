const BotaoDeletar = () => {
    const botaoExcluir = document.createElement('button');

    botaoExcluir.innerText = "Deletar";
    botaoExcluir.addEventListener("click", excluirTarefa);
    
    return botaoExcluir;
}

const excluirTarefa = (evento) => {
    const botaoExcluir = evento.target; 
    const excluirTarefa = botaoExcluir.parentElement
    
    excluirTarefa.remove();
}

export default BotaoDeletar;