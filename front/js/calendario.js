const text = "NOW LOADING...";
    const typingEl = document.getElementById("typing");
    const spinner = document.getElementById("spinner");
    const frames = ['|', '/', '-', '\\'];

    let i = 0;
    let isDeleting = false;
    let frameIndex = 0;

    function typeWriter() {
      if (!isDeleting && i <= text.length) {
        typingEl.textContent = text.substring(0, i);
        i++;
      } else if (isDeleting && i >= 0) {
        typingEl.textContent = text.substring(0, i);
        i--;
      }

      if (i === text.length + 1) {
        isDeleting = true;
        setTimeout(typeWriter, 1000);
      } else if (i === 0 && isDeleting) {
        isDeleting = false;
        setTimeout(typeWriter, 500);
      } else {
        setTimeout(typeWriter, 100);
      }
    }

    setInterval(() => {
      spinner.textContent = frames[frameIndex];
      frameIndex = (frameIndex + 1) % frames.length;
    }, 200);

    typeWriter();