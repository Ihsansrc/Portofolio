// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const toTop = document.querySelector("#top");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");

    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");

    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klick di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != navMenu && e.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode dark .. jd misal local na pilih dark dan sama dark maka dhecked nya akan dark terus karena true

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
