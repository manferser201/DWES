const $FORMULARIO = document.getElementById('Ej3');
const $DNI = document.getElementById('dni')
const $NOMBRECOMPLETO = document.getElementById('nombreCompleto');
const $FECHANACIMIENTO = document.getElementById('fNacimiento');
const $EMAIL = document.getElementById('email');
const $WEB = document.getElementById('web');
const $CONTRASENA = document.getElementById('contrasena');

function handleSubmit(e) {
    e.preventDefault();
    
    const dni = $DNI.value;
    const nombreCompleto = $NOMBRECOMPLETO.value;
    const fechaNacimiento = $FECHANACIMIENTO.value;
    const email = $EMAIL.value;
    const web = $WEB.value;
    const contrasena = $CONTRASENA.value;
    
    (dni == false || !validarDNI(dni)) ? alert("EL DNI ES INCORRECTO. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -EL FORMATO DEBE SER 12.345.678-A") :
    (nombreCompleto == false || !validarNombreyApellidos(nombreCompleto)) ? alert("EL NOMBRE COMPLETO ES INCORRECTO. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -SOLO PUEDE HABER DOS NOMBRES \n -SOLO PUEDE HABER DOS APELLIDOS") :
    (fechaNacimiento == false || !validarFechaNacimiento(fechaNacimiento)) ? alert("LA FECHA DE NACIMIENTO ES INCORRECTA. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL FORMATO DEBE SER dd/mm/yyyy") :
    (email == false || !validarEmail(email)) ? alert("EL EMAIL ES INCORRECTO. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -EL FORMATO DEBE SER xxx@xxxxx.extension") :
    (web == false || !validarWeb(web)) ? alert("LA WEB ES INCORRECTA. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -EL FORMATO DEBE SER: http://www.sitio.extension") :
    (contrasena === false || !validarContrasena(contrasena)) ? alert("LA CONTRASEÑA ES INCORRECTA. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE TENER ENTRE 8 Y 10 CARACTERES") :
    
        regUsuario = {dni:dni, nombreCompleto:nombreCompleto, fechaNacimiento:fechaNacimiento, email:email, web:web, contrasena:contrasena};
        console.log(regUsuario);

        guardarDatosObtenidos(regUsuario);

        let newUser = JSON.stringify(regUsuario);
        console.log(newUser);
    ;
}

function validarDNI(dni){
    const validacion = /^\d{2}.\d{3}.\d{3}-[A-Z]$/;

    return validacion.test(dni);
}

function validarNombreyApellidos(nombreCompleto){
    const validacion = /^(([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))|(([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    
    return validacion.test(nombreCompleto);
}

function validarFechaNacimiento(fechaNacimiento){
    const validacion = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;

    return validacion.test(fechaNacimiento);
}

function validarEmail(email){
    const validacion = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    
    return validacion.test(email);
}

function validarWeb(web){
    const validacion = /^http:\/\/www\.[a-zA-Z]+\.[a-zA-Z]+$/;

    return validacion.test(web);
}

function validarContrasena(contrasena){
    const validacion = /^[\s\S]{8,10}$/;

    return validacion.test(contrasena)
}

$FORMULARIO.addEventListener('submit', handleSubmit);