document.addEventListener("DOMContentLoaded", function () {
  // Hamburger click toggle (adds/removes 'active' class)
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  // Lightbox options
  if (typeof lightbox !== "undefined") {
    lightbox.option({
      fadeDuration: 300,
      imageFadeDuration: 300,
      resizeDuration: 200,
      wrapAround: true
    });
  }

  // Add "← Back to Gallery" link inside lightbox
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

  // Swiper background slider (if present)
  if (document.querySelector('.background-slider')) {
    const swiper = new Swiper('.background-slider', {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      speed: 1000,
      fadeEffect: {
        crossFade: true
      },
    });
  }
});
