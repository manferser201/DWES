//Comprobación del uso de Cookies del navegador
if(navigator.cookieEnabled == true){
    alert("El navegador tiene las cookies activadas");
} else {
    alert("El navegador tienes las cookies desactivadas")
}


//Creación genérica de una cookie
function setCookies(cName, cValue){
    document.cookie = cName + "=" + cValue + "; ";
}

//Obtención del valor de una cookie
function getCookie(cName){
    let nombre = cName + "=";
    let ca = document.cookie.split(';');

    for (let index = 0; index < ca.length; index++) {
        let c = ca[i];

        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if(c.indexOf(nombre) == 0)
            return c.substring(nombre.length, c.length);
    }

    return "";
}

//Validación de una cookie
function validrCookie(){
    let nombre = getCookie("nombre");
    let usuario = getCookie("usuario");

    if(nombre != "" && usuario != ""){
        alert("Hola " + nombre + ", le recuerdo que su usuario es: " + usuario);
    } else {
        nombre
    }
}

//Eliminar una Cookie
function eliminarCookie(){
    document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

//Actualización de una Cookie
function actualizarCookie(cName, nuevoValor){
    
    if(getCookie(cName) != "" && getCookie(cName) != null){
        document.cookie = cName + "=" + nuevoValor + "; ";
    } else {
        alert("LA COOKIE QUE QUIERE ACTUALIZAR NO EXISTE, SI QUIERE CREARLA PULSE EN CREAR");
    }
    
}