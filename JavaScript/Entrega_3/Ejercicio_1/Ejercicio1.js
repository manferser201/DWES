const $FORMULARIO = document.getElementById('Ej1');
const $DNI = document.getElementById('dni');
const $NOMBRE = document.getElementById('nombre');
const $APELLIDOS = document.getElementById('apellidos');
const $TELEFONO = document.getElementById('telefono');
const $COMENTARIO = document.getElementById('comentario');
const $HORA = document.getElementById('hora');

function handleSubmit(e) {
    e.preventDefault();
    
    const dni = $DNI.value;
    const nombre = $NOMBRE.value;
    const apellidos = $APELLIDOS.value;
    const telefono = $TELEFONO.value;
    const comentario = $COMENTARIO.value;
    const hora = $HORA.value;
    
    if(dni == false || !validarDNI(dni)){
        alert("EL DNI ES INCORRECTO. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -EL FORMATO DEBE SER 12.345.678-A")
    } else if(nombre == false || !validarNombre(nombre)) {
        alert("EL NOMBRE ES INCORRECTO. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -SOLO PUEDE HABER DOS NOMBRES")
    } else if(apellidos == false || !validarApellidos(apellidos)){
        alert("LOS APELLIDOS SON INCORRECTOS. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -SOLO PUEDE HABER DOS APELLIDOS")
    } else if(telefono == false || !validarTelefono(telefono)){
        alert("EL TELEFONO ES INCORRECTO. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -EL FORMATO DEBE SER +34 123456789")
    } else if(comentario == false || !validarComentario(comentario)){
        alert("EL COMENTARIO ES INCORRECTO. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -EL COMENTARIO DEBE TENER MENOS DE 250 CARACTERES")
    } else if(hora == false || !validarHora(hora)){
        alert("LA HORA ES INCORRECTA. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -EL FORMATO DEBE SER HH:MM -EL FORMATO DEBE SER DE 12 HORAS")
    } else {
        regUsuario = {DNI:dni, nombre:nombre, apellidos:apellidos, telefono:telefono, comentario:comentario, hora:hora};
        console.log(regUsuario);

        let newUser = JSON.stringify(regUsuario);
        console.log(newUser);  
    }

    validarCookie();    
}

function validarDNI(dni){

    //COMPRPBAMOS SI EL DNI TIENE EL FORMATO ADECUADO (8 NÚMEROS Y UNA LETRA)
    const validacion = /^\d{2}.\d{3}.\d{3}-[A-Z]$/;

    return validacion.test(dni);
}

function validarNombre(nombre){
    const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    
    return validacion.test(nombre);
}

function validarApellidos(apellidos){
    const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    
    return validacion.test(apellidos);
}

function validarTelefono(telefono){
    const validacion = /^\+\d{2,3}\s\d{9}$/;
    
    return validacion.test(telefono);
}

function validarComentario(comentario){
    const validacion = /^[\s\S]{1,250}$/;

    return validacion.test(comentario);
}

function validarHora(hora){
    const validacion = /^(?:1[012]|0[0-9]):[0-5][0-9]$/;

    return validacion.test(hora);
}

$FORMULARIO.addEventListener('submit', handleSubmit);