//Comprobar si el navegador es compatible:
if (typeof Storage !== "undefined") {
    alert("Local Storage compatible");
} else {
    alert("Local Storage no es soportado por este navegador");
}

function guardarDatosObtenidos(usuario){
    for(let clave of Object.keys(usuario)) {
        localStorage.getItem(clave, usuario[clave]);      
    };
}

function recargarDatos(){
    let fechaCreacion = localStorage.getItem("fechaCreacion");
    let cocinero = localStorage.getItem("cocinero");
    let destinatario = localStorage.getItem("destinatario");
    let gramos = localStorage.getItem("gramos");
    let composicion = localStorage.getItem("composicion");
    let cuenta = localStorage.getItem("cuenta");

    document.getElementById("fechaCreacion").innerHTML = fechaCreacion;
    document.getElementById("cocinero").innerHTML = cocinero;
    document.getElementById("destinatario").innerHTML = destinatario;
    document.getElementById("gramos").innerHTML = gramos;
    document.getElementById("composicion").innerHTML = composicion;
    document.getElementById("cuenta").innerHTML = cuenta;
}