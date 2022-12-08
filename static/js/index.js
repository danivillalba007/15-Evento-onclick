// desaparecer boton

function desaparecerBoton() {
    button.remove()
}

let button = document.querySelector('.desaparecer');
button.addEventListener("click", desaparecerBoton)

// mensaje de alerta

function liked() {
    alert("Se ha presionado el botón")
}

let likebutton = document.querySelectorAll('.like');
for (let i = 0; i < likebutton.length; i++) {
    likebutton[i].addEventListener("click", liked)
}

// cambiar boton

function cambiarLogin() {
    if (botonLoguin.innerHTML == "Login") {
        botonLoguin.innerHTML = "Logo out";
    } else {
        botonLoguin.innerHTML = "Login";
    }
}

let botonLoguin = document.querySelector('.loginButton');
botonLoguin.addEventListener("click", cambiarLogin);