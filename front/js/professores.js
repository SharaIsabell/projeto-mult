const linhas = document.querySelectorAll('.scoreboard-row');
    const container = document.getElementById('vida-container');

    linhas.forEach(() => {
      const bloco = document.createElement('span');
      bloco.className = 'life-block';
      container.appendChild(bloco);
    });

    const score = document.createElement('span');
    score.className = 'score-label';
    score.textContent = `SCORE: ${linhas.length.toString().padStart(2, '0')}`;
    container.appendChild(score);