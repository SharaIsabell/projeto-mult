let nota1 = null;
let nota2 = null;
let currentInput = "";
let step = 1;

function press(num) {
    currentInput += num;
    updateScreen(currentInput);
}

function updateScreen(text) {
    document.getElementById("screen").textContent = text;
}

function calculate() {
    if (step === 1) {
    nota1 = parseFloat(currentInput);
    if (isNaN(nota1)) {
        updateScreen("Nota inválida.");
        reset();
        return;
    }
    currentInput = "";
    step = 2;
    updateScreen("Insira a 2ª nota");
    } else if (step === 2) {
    nota2 = parseFloat(currentInput);
    if (isNaN(nota2)) {
        updateScreen("Nota inválida.");
        reset();
        return;
    }

    const mediaAtual = (nota1 + nota2) / 2;
    const notaNecessaria = 12.5 - (1.5 * mediaAtual);

    if (mediaAtual >= 7) {
        updateScreen("Você já passou! 🏆");
        showFinalMessage("LEVEL UP");
    } else {
        updateScreen(`Precisa de ${notaNecessaria.toFixed(1)} na final.`);
        showFinalMessage("GAME OVER");
    }
    reset();
    }
}

function reset() {
    currentInput = "";
    nota1 = null;
    nota2 = null;
    step = 1;
}

function insertCoin() {
    document.getElementById("coin-overlay").style.display = "none";
    updateScreen("Insira a 1ª nota");
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach(btn => btn.disabled = false);
}

function showFinalMessage(text) {
    const overlay = document.getElementById("messageOverlay");
    const span = document.getElementById("finalMessageText");

    overlay.classList.remove("level-up", "game-over");

    if (text === "LEVEL UP") {
    overlay.classList.add("level-up");
    } else if (text === "GAME OVER") {
    overlay.classList.add("game-over");
    }

    span.textContent = "";
    overlay.classList.add("visible");

    let i = 0;
    function typeLetter() {
    if (i < text.length) {
        span.textContent += text.charAt(i);
        i++;
        setTimeout(typeLetter, 100); // velocidade da digitação (ms)
    }
    }

    typeLetter();

    setTimeout(() => {
    overlay.classList.remove("visible");
    }, 4000); // tempo de exibição total
}