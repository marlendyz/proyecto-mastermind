let btnTry = document.getElementById("intentar");


btnTry.addEventListener('click', () => {
    console.log('estoy aqui');
    location.href="page/seleccion.html"
    sessionStorage.setItem("nombreJUgador")
});