function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});


lightbox.option({
  fadeDuration: 300,
  imageFadeDuration: 300,
  resizeDuration: 200,
  wrapAround: true
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const observer = new MutationObserver(() => {
      const container = document.querySelector(".lb-dataContainer");
      if (container && !document.querySelector(".back-to-gallery")) {
        const backLink = document.createElement("a");
        backLink.textContent = "← Back to Gallery";
        backLink.href = "#";
        backLink.className = "back-to-gallery";
        backLink.style.cssText = "margin-left: 15px; font-size: 14px;";
        container.appendChild(backLink);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }, 500);
});

