const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

if (menu) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    if (open) {
      nav.style.display = "flex";
      nav.style.position = "absolute";
      nav.style.top = "58px";
      nav.style.left = "0";
      nav.style.right = "0";
      nav.style.padding = "20px 24px";
      nav.style.background = "#08090c";
      nav.style.flexDirection = "column";
      nav.style.gap = "18px";
    } else {
      nav.removeAttribute("style");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      nav.removeAttribute("style");
    }
  });
});

