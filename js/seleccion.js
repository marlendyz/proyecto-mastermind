let nombreJUgador = document.getElementById("jugador");

const jugador = sessionStorage.getItem("nombreJugador");

nombreJUgador.innerHTML = `${jugador} selciona el color`;
// esto es para pintar el nombre del jugador el la pagina web

let color1 = document.getElementById("color1");
color1.onclick = function () {
  sessionStorage.setItem("color", "aqua");
};
let color2 = document.getElementById("color2");
color2.onclick = function () {
  sessionStorage.setItem("color", "blue");
};
let color3 = document.getElementById("color3");
color3.onclick = function () {
  sessionStorage.setItem("color", "hotpink");
};
let color4 = document.getElementById("color4");
color4.onclick = function () {
  sessionStorage.setItem("color", "brown");
};

let color5 = document.getElementById("color5");
color5.onclick = function () {
  sessionStorage.setItem("color", "yellow");
};

let color6 = document.getElementById("color6");
color6.onclick = function () {
  sessionStorage.setItem("color", "indianred");
};
let color7 = document.getElementById("color7");
color7.onclick = function () {
  sessionStorage.setItem("color", "yellow");
};
let color8 = document.getElementById("color8");
color8.onclick = function () {
  sessionStorage.setItem("color", "cornflowerblue");
};
let color9 = document.getElementById("color9");
color9.onclick = function () {
  sessionStorage.setItem("color", "coral");
};
let color10 = document.getElementById("color10");
color10.onclick = function () {
  sessionStorage.setItem("color", "blueviolet");
};




let rellenar1 = document.getElementById("completarcolores1");
let seleccionColores = [];

rellenar1.onclick = function () {
  let color = sessionStorage.getItem("color");
  rellenar1.style.backgroundColor = color;
  seleccionColores.splice(0, 1, color);
  sessionStorage.removeItem(color)
};

let rellenar2 = document.getElementById("completarcolores2");

rellenar2.onclick = function () {
  let color = sessionStorage.getItem("color");
  rellenar2.style.backgroundColor = color;
  seleccionColores.splice(1, 1, color);
  sessionStorage.removeItem(color)
};

let rellenar3 = document.getElementById("completarcolores3");

rellenar3.onclick = function () {
  let color = sessionStorage.getItem("color");
  rellenar3.style.backgroundColor = color;
  seleccionColores.splice(2, 1, color);
  sessionStorage.removeItem(color)
};

let rellenar4 = document.getElementById("completarcolores4");

rellenar4.onclick = function () {
  let color = sessionStorage.getItem("color");
  rellenar4.style.backgroundColor = color;
  seleccionColores.splice(3, 1, color);
  sessionStorage.removeItem(color)
};

console.log(seleccionColores);



let btnConfirmar = document.getElementById("Confirmar");

btnConfirmar.addEventListener("click", () => {
  sessionStorage.setItem("seleccionColores", JSON.stringify(seleccionColores));
  location.href="./play.html"
});
