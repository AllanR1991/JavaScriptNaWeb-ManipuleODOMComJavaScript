/* 
Para Adicionar um escultador precisamos 

            1)Evento
            2)Onde colocar esse evento
            3)o que vai acontecer apos ativar o Evento.
            
            Maneita de execultar

            Onde colocar o evento.MetodoQueEsculta('Evento', acao que vai fazer dentro de uma funcao.);
            EX:
            novaTarefa.addEventListener('click', ()=>{
              console.log('Fui Clicado.')
            })


*/
import BotaoFinalizar from "./componentes/concluiTarefa";
import BotaoDeletar from "./componentes/deletaTarefa";
(() => {
	//foi criado essa função anonima para que nossa regra de negocio não seja vizualiada no navegador, deixando de fazer parte da variavel global.
	const novaTarefa = document.querySelector("[data-form-button]");

	const criarTarefa = (evento) => {
		evento.preventDefault();
		const lista = document.querySelector("[data-list]");
		const input = document.querySelector("[data-form-input]");
		const valor = input.value;

		/* Abaixo segue o codigo para criar elemento na DOM */
		const tarefa = document.createElement("li");
		const conteudo = `<p class="content">${valor}</p>`;

		tarefa.classList.add("task"); //adicionar uma classe ao li.
		tarefa.innerHTML = conteudo;

		/* Inserindo elemento dentro do outro, sendo que esse elemento criado sempre aparecera por ultimo seguindo estrutura da arvore do DOM */
		tarefa.appendChild(BotaoFinalizar());
        tarefa.appendChild(BotaoDeletar());
		lista.appendChild(tarefa);

		input.value = "";
	};

	novaTarefa.addEventListener("click", criarTarefa);

	

    
})(); //() apos a funcao executa a mesma de forma automatica.
