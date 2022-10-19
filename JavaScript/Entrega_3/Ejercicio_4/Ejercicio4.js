const $FORMULARIO = document.getElementById('Ej4');
const $FECHACREACION = document.getElementById('fechaCreacion');
const $COCINERO = document.getElementById('cocinero');
const $DESTINTARIO = document.getElementById('destinatario');
const $GRAMOS = document.getElementById('gramos');
const $COMPOSICION = document.getElementById('composicion');
const $CUENTA = document.getElementById('cuenta');

function handleSubmit(e) {
    e.preventDefault();
    
    const fechaCreacion = $FECHACREACION.value;
    const cocinero = $COCINERO.value;
    const destinatario = $DESTINTARIO.value;
    const gramos = $GRAMOS.value;
    const composicion = $COMPOSICION.value;
    const cuenta = $CUENTA.value;
    
    (fechaCreacion === false || !validarFechaCreacion(fechaCreacion)) ? alert("LA FECHA DE NACIMIENTO ES INCORRECTA. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO NO PUEDE ESTAR VACÍO \n -EL FORMATO DEBE SER dd/mm/yyyy") :
    (cocinero === false || !validarCocinero(cocinero)) ? alert("EL COCINERO ESTÁ MAL INTRODUCIDO. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO NO PUEDE ESTAR VACÍO. \n -EL FORMATO DEBE SER: 2 LETRAS MAYÚSCULAS, UN SÍMBOLO Y 4 NÚMEROS") :
    (destinatario === false || !validarDestinatario(destinatario)) ? alert("EL DESTINATARIO ESTÁ MAL INTRODUCIDO. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO NO PUEDE ESTAR VACÍO \n -EL FORMATO ES: 2 o 3 LETRAS MAYÚSCULAS + _ + CIUDAD EN MINISCULAS + : + 4 NÚMEROS") :
    (gramos === false || !validarGramos(gramos)) ? alert("LOS CANTIDAD DE GRAMOS ES INCORRECTA. REVISE LO SIGUIENTE: \n -LA CANTIDAD DEBE ESTAR ENTRE 100 Y 5000") :    
    (composicion === false || !validarComposicion(composicion, gramos)) ? alert("LA COMPOSICIÓN ES INCORRECTA. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO NO PUEDE ESTAR VACÍO \n -EL FORMATO DEBE SER: CANTIDAD DE GRAMOS + g + 1 o 2 LETRAS + 0 o 1 NÚMERO + 1 o 2 LETRAS + 0 o 1 NÚMERO \n -LA CANTIDAD DE GRAMOS DEBE SER LA INTRODUCIDA EN EL CAMPO ANTERIOR") :
    (cuenta === false || !validarCuenta(cuenta)) ? alert("LA CUENTA ES INCORRECTA. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO NO PUEDE ESTAR VACÍO") :
        regUsuario = {fechaCreacion:fechaCreacion, cocinero:cocinero, destinatario:destinatario, gramos:gramos, composicion:composicion, cuenta:cuenta};
        console.log(regUsuario);

        guardarDatosObtenidos(regUsuario);

        let newUser = JSON.stringify(regUsuario);
        console.log(newUser);
    ;
}

function validarFechaCreacion(fechaCreacion){
    const validacion = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;

    return validacion.test(fechaCreacion);
}

function validarCocinero(cocinero){
    const validacion = /^[A-Z]{2}[^\w\d\s]\d{4}$/;
    
    return validacion.test(cocinero);
}

function validarDestinatario(destinatario){
    const validacion = /^[A-Z]{2,3}_[a-z]+:\d{4}$/;

    return validacion.test(destinatario);
}

function validarGramos(gramos){
    
    if(gramos >= 100 && gramos <= 5000){
        return true;
    } else {
        return false;
    }  
}

function validarComposicion(composicion, gramos){;
    const validacion = /^\d{3,4}g[a-z A-Z]{1,2}\d?[a-z A-Z]{1,2}\d?$/;
    const numero = composicion.split("g");

    return validacion.test(composicion) && parseInt(numero) == gramos;
}

function validarCuenta(cuenta){
    


    return validacion.test(cuenta);
}

$FORMULARIO.addEventListener('submit', handleSubmit);