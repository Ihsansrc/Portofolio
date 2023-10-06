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
  } // kurawal di 17
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

const close = document.querySelectorAll("#close");
close.forEach(function (e) {
  e.addEventListener("click", function (close) {
    close.target.parentElement.style.display = "none";
    console.log(e);
    console.log(close.target);
  });
});

const hati = document.querySelectorAll("#hati");
hati.forEach(function (e) {
  let sudahPencet = false;
  e.addEventListener("click", function () {
    if (sudahPencet) {
      // awalnya false tapi ketika di klik menjadi true
      e.setAttribute("src", "gambar/heart.svg");
    } else {
      e.setAttribute("src", "gambar/twitter.svg");
    }

    sudahPencet = !sudahPencet; // jimat isClicked = !isClicked digunakan untuk mengubah nilai isClicked dari false menjadi true atau dari true menjadi false, tergantung pada nilai sebelumnya.
    console.log(e.target);
  });
});

// kalkulator

const screen = document.getElementById("screen");

function appendToScreen(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = "";
}

function del() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
  }
}

const coba = document.querySelector(".coba");
function tombol() {
  for (var i = 9; i >= 1; i--) {
    const tombol = document.createElement("button");
    tombol.textContent = i;
    tombol.setAttribute(
      "class",
      "w-10 h-10 text-center flex justify-center items-center rounded-md bg-white"
    );
    tombol.setAttribute("onclick", `appendToScreen('${i}')`);
    coba.appendChild(tombol);
  }
}

tombol();

const kosong = document.querySelector(".coba");
function nol() {
  for (var i = 3; i >= 1; i--) {
    const nol = document.createElement("button");
    nol.textContent = i;
    nol.setAttribute(
      "class",
      "w-10 h-10 text-center flex justify-center items-center rounded-md bg-white"
    );

    if (i == 2) {
      nol.textContent = "0";
      nol.setAttribute("onclick", "appendToScreen('0')");
    } else {
      nol.textContent = "";

      nol.setAttribute("onclick", "appendToScreen('')");
    }

    kosong.appendChild(nol);
  }
}

nol();
