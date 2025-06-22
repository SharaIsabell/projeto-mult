const prereqMap = {
    'discreta1': ['discreta2'],
    'algoritmos': ['linguagem1', 'labprog1'],
    'geometria':  ['algebra-linear1', 'labprog1'],
    'calculo1':  ['calculo2-novo', 'calculo-numerico'],
    'introducao':  ['lab-org-arq', 'orga-arquitetura'],
    'geometria':  ['algebra-linear1'],
    'algebra-linear1' : ['computacao-grafica'],
    'linguagem1':  ['linguagem2'],
    'labprog1':   ['labprog2'],
    'linguagem2':  ['analise-sistemas', 'estrutura-dados','interfaces-graficas','paradigmas-prog'],
    'calculo2-novo':  ['calculo3', 'prob-estatistica'],
    'labprog2':  ['lab-estrutura-dados'],
    'logica':  ['linguagens-formais'],
    'discreta2':  ['linguagens-formais'],
    'estrutura-dados':  ['banco-dados','metodos-avancados'],
    'lab-estrutura-dados':  ['metodos-avancados'],
    'analise-sistemas':  ['engenharia-software1'],
    'linguagens-formais':  ['paradigmas-prog'],
    'prob-estatistica':  ['prob-estatistica2'],
    'orga-arquitetura':  ['redes-computadores'],
    'calculo-numerico':  ['analise-algoritmos'],
    'calculo3':  ['computacao-grafica'],
    'analise-algoritmos':  ['computacao-grafica'],
    'engenharia-software1':  ['engenharia-software2','gerencia-projetos','educacao-distancia'],
    'paradigmas-prog':  ['inteligencia-artificial','compiladores'],
    'redes-computadores':  ['seguranca-redes','sistemas-operacionais'],
    'sistemas-operacionais':  ['compiladores','alto-desempenho'],
    'metodos-avancados':  ['programacao-web'],
    'engenharia-software2':  ['ihc'],
    'computacao-grafica':  ['sistemas-multimidia'],
    'seguranca-redes':  ['alto-desempenho'],
    'compiladores':  ['metodos-formais'],
};

Object.keys(prereqMap).forEach(prereqId => {
    const prereqElem = document.getElementById(prereqId);

    prereqElem.addEventListener('mouseenter', () => {
    prereqMap[prereqId].forEach(targetId => {
        const targetElem = document.getElementById(targetId);
        if (targetElem) targetElem.classList.add('highlight');
    });
    });

    prereqElem.addEventListener('mouseleave', () => {
    prereqMap[prereqId].forEach(targetId => {
        const targetElem = document.getElementById(targetId);
        if (targetElem) targetElem.classList.remove('highlight');
    });
    });
});

const caixaDialogo = document.getElementById("caixa-dialogo");
const textoDialogo = document.getElementById("texto-dialogo");
const caixaOpcoes = document.getElementById("caixa-opcoes");
const opcoesDialogo = document.getElementById("opcoes-dialogo");

let intervalo;

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
    caixaOpcoes.classList.remove("mostrar");

    digitarTexto(opcao.resposta, () => {
        // Após exibir a resposta, espera 4 segundos e reinicia o diálogo
        setTimeout(() => {
        iniciarDialogoMascote();
        }, 4000);
    });
    };
    opcoesDialogo.appendChild(botao);
});
caixaOpcoes.classList.add("mostrar");
}


function iniciarDialogoMascote() {
caixaDialogo.classList.add("mostrar");
digitarTexto("Olá! Eu sou Piuter, o mascote do site de Computação. Como posso te ajudar?", () => {
    mostrarOpcoes([
    { texto: "Sobre a página", resposta: "Esta é a página de fluxograma do curso de Computação. Aqui você encontra as disciplinas, suas ementas e os pré-requisitos de cada uma." },
    { texto: "Como vejo os pré-requisitos?", resposta: "Passe o cursor do mouse sobre uma disciplina para destacar as que dependem dela como pré-requisito." },
    { texto: "Como vejo a ementa?", resposta: "Clique sobre o nome de uma disciplina para acessar sua ementa. Se preferir, use o botão PPC para visualizar o Projeto Pedagógico do Curso completo." }
    ]);
});
}

window.addEventListener("DOMContentLoaded", iniciarDialogoMascote);