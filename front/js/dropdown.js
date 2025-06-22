const dropdown = document.getElementById("dropdown-others");
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    let hideTimeout;

    dropdown.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
      dropdownContent.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", () => {
      hideTimeout = setTimeout(() => {
        dropdownContent.style.display = "none";
      }, 200);
    });

    dropdownContent.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
    });

    dropdownContent.addEventListener("mouseleave", () => {
      hideTimeout = setTimeout(() => {
        dropdownContent.style.display = "none";
      }, 2000);
    });