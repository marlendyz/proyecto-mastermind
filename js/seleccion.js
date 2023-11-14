let nombreJUgador = document.getElementById('jugador');

const jugador = sessionStorage.getItem('nombreJugador');

nombreJUgador.innerHTML = `${jugador} selciona el color`;



