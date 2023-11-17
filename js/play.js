// para poder utilizar un array de otra pagina, necesito hacer lo del getItem y igualrlo a lo que quiero que pinte
let seleccionColores = JSON.parse(sessionStorage.getItem("seleccionColores"));

let colorElegido1 = document.getElementById("color1");
colorElegido1.style.backgroundColor = seleccionColores[0];

let colorElegido2 = document.getElementById("color2");
colorElegido2.style.backgroundColor = seleccionColores[1];

let colorElegido3 = document.getElementById("color3");
colorElegido3.style.backgroundColor = seleccionColores[2];

let colorElegido4 = document.getElementById("color4");
colorElegido4.style.backgroundColor = seleccionColores[3];

colorElegido1.addEventListener("click", () => {
  let color1 = (colorElegido1.style.backgroundColor = seleccionColores[0]);
  sessionStorage.setItem("color", color1);
});

colorElegido2.addEventListener("click", () => {
  let color2 = (colorElegido2.style.backgroundColor = seleccionColores[1]);
  sessionStorage.setItem("color", color2);
});

colorElegido3.addEventListener("click", () => {
  let color3 = (colorElegido3.style.backgroundColor = seleccionColores[2]);
  sessionStorage.setItem("color", color3);
});

colorElegido4.addEventListener("click", () => {
  let color4 = (colorElegido4.style.backgroundColor = seleccionColores[3]);
  sessionStorage.setItem("color", color4);
});

let rellenar1 = document.getElementById("completa1");

rellenar1.onclick = function () {
  let color = sessionStorage.getItem("color");
  rellenar1.style.backgroundColor = color;
};

let rellenar2 = document.getElementById("completa2");

rellenar2.onclick = function () {
  let color = sessionStorage.getItem("color");
  rellenar2.style.backgroundColor = color;
};

let rellenar3 = document.getElementById("completa3");

rellenar3.onclick = function () {
  let color = sessionStorage.getItem("color");
  rellenar3.style.backgroundColor = color;
};

let rellenar4 = document.getElementById("completa4");

rellenar4.onclick = function () {
  let color = sessionStorage.getItem("color");
  rellenar4.style.backgroundColor = color;
};
