function setCookies(cName, cValue){
    document.cookie = cName + "=" + cValue + "; expires= Thu, 20 Oct 2022 20:32:00 UTC";
}

function obtenerUsuario(){
    let usuario = regUsuario.nombre + " " + regUsuario.apellidos;
    
    setCookies(usuario, regUsuario.email);
}
