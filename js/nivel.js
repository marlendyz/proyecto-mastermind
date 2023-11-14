let btnNivel1 = document.getElementById('principiante');

btnNivel1.addEventListener('click', () => {
    let nombreJugador = document.getElementById('nombre').value;
    sessionStorage.setItem('nombreJugador', nombreJugador)
    sessionStorage.setItem('nivel', 'principiante'); 
    location.href="./seleccion.html"
  
});



