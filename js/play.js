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
let combinacionFinal = (seleccionColores) => {
  return seleccionColores.sort(() => Math.random() - 0.5);
};
console.log(combinacionFinal(seleccionColores)); //para invocar la funcion tengo que pasarle su parametro

let combinacionFinalGanadora = combinacionFinal(seleccionColores);

colorElegido1.addEventListener("click", () => {
  let color1 = colorElegido1.style.backgroundColor;
  sessionStorage.setItem("color", color1);
});

colorElegido2.addEventListener("click", () => {
  let color2 = colorElegido2.style.backgroundColor;
  sessionStorage.setItem("color", color2);
});

colorElegido3.addEventListener("click", () => {
  let color3 = colorElegido3.style.backgroundColor;
  sessionStorage.setItem("color", color3);
});

colorElegido4.addEventListener("click", () => {
  let color4 = colorElegido4.style.backgroundColor;
  sessionStorage.setItem("color", color4);
});

let combinacionJugador = [];

let rellenar1 = document.getElementById("completa1");

rellenar1.onclick = function () {
  let color = sessionStorage.getItem("color");
  rellenar1.style.backgroundColor = color;
  combinacionJugador[0] = color;
};

let rellenar2 = document.getElementById("completa2");

rellenar2.onclick = function () {
  let color = sessionStorage.getItem("color");
  rellenar2.style.backgroundColor = color;
  combinacionJugador[1] = color;
};

let rellenar3 = document.getElementById("completa3");

rellenar3.onclick = function () {
  let color = sessionStorage.getItem("color");
  rellenar3.style.backgroundColor = color;
  combinacionJugador[2] = color;
};

let rellenar4 = document.getElementById("completa4");

rellenar4.onclick = function () {
  let color = sessionStorage.getItem("color");
  rellenar4.style.backgroundColor = color;
  combinacionJugador[3] = color;
};

const existeGanador = (combinacionJugador, combinacionGanadora) => {
  for (let i = 0; i < combinacionGanadora.length; i++) {
    if (combinacionGanadora[i] !== combinacionJugador[i]) {
      return false;
    }
  }
  return true;
};

const pintarAciertos = (aciertoPosicion, aciertosFinal) => {
  for (let i = 0; i < aciertoPosicion.length; i++) {
    if (aciertosFinal[i] == 1) {
      aciertoPosicion[i].style.backgroundColor = "green";
    } else {
      aciertoPosicion[i].style.backgroundColor = "red";
    }
  }
};

let contdorIntentos = 0;
let btnValidar = document.getElementById("validar");
btnValidar.addEventListener("click", () => {
  contdorIntentos++;
  let acierto0 = document.getElementById("intentos1");
  let acierto1 = document.getElementById("intentos2");
  let acierto2 = document.getElementById("intentos3");
  let acierto3 = document.getElementById("intentos4");

  let aciertoPosicion = [acierto0, acierto1, acierto2, acierto3];

  const validarAciertos = (combinacionJugador, combinacionGanadora) => {
    let aciertos = [];
    console.log(contdorIntentos);
    console.log(combinacionGanadora);
    console.log(combinacionJugador);
    for (let i = 0; i < combinacionGanadora.length; i++) {
      if (combinacionGanadora[i] == combinacionJugador[i]) {
        aciertos.push(1);
      } else {
        aciertos.push(0);
      }
    }
    return aciertos;
  };
  let aciertosFinal = validarAciertos(
    combinacionJugador,
    combinacionFinalGanadora
  );
  pintarAciertos(aciertoPosicion, aciertosFinal);

  esJugadaGanadora = existeGanador(
    combinacionJugador,
    combinacionFinalGanadora
  );

  if (esJugadaGanadora) {
    location.href = "./win.html";
  } else if (contdorIntentos == 6) {
    location.href = "./lost.html";
  }
});
