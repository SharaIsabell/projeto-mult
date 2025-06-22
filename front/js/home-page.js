const caixaDialogo = document.getElementById("caixa-dialogo");
const textoDialogo = document.getElementById("texto-dialogo");
const caixaOpcoes = document.getElementById("caixa-opcoes");
const opcoesDialogo = document.getElementById("opcoes-dialogo");
const mascoteImg = document.querySelector(".comp");

let intervalo;
let timeoutSumir;
let jaInteragiu = false;

function digitarTexto(texto, callback) {
    textoDialogo.textContent = "";
    textoDialogo.classList.add("digitando");
    let index = 0;
    clearInterval(intervalo);
    opcoesDialogo.innerHTML = "";
    caixaOpcoes.classList.remove("mostrar");

    intervalo = setInterval(() => {
    if (index < texto.length) {
        textoDialogo.textContent += texto.charAt(index);
        index++;
    } else {
        clearInterval(intervalo);
        if (callback) callback();
    }
    }, 40);
}

function mostrarOpcoes(opcoes) {
    opcoesDialogo.innerHTML = "";
    opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.className = "botao-opcao";
    botao.textContent = opcao.texto;
    botao.onclick = () => {
        jaInteragiu = true;
        caixaOpcoes.classList.remove("mostrar");
        digitarTexto(opcao.resposta);
    };
    opcoesDialogo.appendChild(botao);
    });
    caixaOpcoes.classList.add("mostrar");
}

mascoteImg.addEventListener("mouseenter", () => {
    if (jaInteragiu) return;
    clearTimeout(timeoutSumir);
    caixaDialogo.classList.add("mostrar");
    digitarTexto("Olá! Eu sou Piuter, o mascote do site de Computação. Como posso te ajudar?", () => {
    mostrarOpcoes([
        { texto: "Quero ajuda com matrícula", resposta: "Você pode encontrar informações no site da UEPB ou com a coordenação!" },
        { texto: "Onde vejo os professores?", resposta: "Clique na aba 'Professores' no menu acima para ver a lista completa." },
        { texto: "Preciso do calendário", resposta: "Você pode acessar o calendário clicando em 'Calendário Acadêmico' no topo." }
    ]);
    });
});

mascoteImg.addEventListener("mouseleave", () => {
    clearTimeout(timeoutSumir);
    timeoutSumir = setTimeout(() => {
    caixaDialogo.classList.remove("mostrar");
    caixaOpcoes.classList.remove("mostrar");
    jaInteragiu = false;
    }, 5500);
});

window.addEventListener("DOMContentLoaded", () => {
const botaoEmail = document.getElementById("copiar-email");
const notificacao = document.getElementById("notificacao-copiado");

botaoEmail.addEventListener("click", () => {
const email = "coord.computacao.cct@setor.uepb.edu.br";

navigator.clipboard.writeText(email).then(() => {
    // Mostra a notificação
    notificacao.classList.add("mostrar");

    // Esconde após 2 segundos
    setTimeout(() => {
    notificacao.classList.remove("mostrar");
    }, 2000);
}).catch(err => {
    console.error("Erro ao copiar:", err);
});
});
});