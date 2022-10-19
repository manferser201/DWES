//Comprobar si el navegador es compatible:
if (typeof Storage !== "undefined") {
    alert("Session Storage compatible");
} else {
    alert("Session Storage no es soportado por este navegador");
}

function guardarDatosObtenidos(usuario){
    for(let clave of Object.keys(usuario)) {
        sessionStorage.getItem(clave, usuario[clave]);      
    };
}

function recargarDatos(){
    let dni = sessionStorage.getItem("dni");
    let nombreCompleto = sessionStorage.getItem("nombreCompleto");
    let fNacimiento = sessionStorage.getItem("fNacimiento");
    let email = sessionStorage.getItem("email");
    let web = sessionStorage.getItem("web");
    let contrasena = sessionStorage.getItem("contrasena");

    document.getElementById("dni").innerHTML = dni;
    document.getElementById("nombreCompleto").innerHTML = nombreCompleto;
    document.getElementById("fNacimiento").innerHTML = fNacimiento;
    document.getElementById("email").innerHTML = email;
    document.getElementById("web").innerHTML = web;
    document.getElementById("contrasena").innerHTML = contrasena;
}