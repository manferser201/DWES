//Creación genérica de una cookie
function setCookies(cName, cValue){
    document.cookie = cName + "=" + cValue + "; ";
}

//Obtención del valor de una cookie
function getCookie(cName){
    let nombre = cName + "=";
    let ca = document.cookie.split(';');

    for (let index = 0; index < ca.length; index++) {
        let c = ca[index];

        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if(c.indexOf(nombre) == 0)
            return c.substring(nombre.length, c.length)
    }

    return "";
}

function validarCookie(){
    let contadorError = getCookie("contError");

    (contadorError != "" && contadorError != null) ? setCookies("contError", ++contadorError) : setCookies("contError", 1);
    
    document.getElementById("contador").innerHTML = "Número de errores: " + getCookie("contError");
}