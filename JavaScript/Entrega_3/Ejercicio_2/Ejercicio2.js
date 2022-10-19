const $FORMULARIO = document.getElementById('Ej2');
const $NOMBRE = document.getElementById('nombre');
const $APELLIDOS = document.getElementById('apellidos');
const $EMAIL = document.getElementById('email');
const $WEB = document.getElementById('web');

function handleSubmit(e) {
    e.preventDefault();
    
    const nombre = $NOMBRE.value;
    const apellidos = $APELLIDOS.value;
    const email = $EMAIL.value;
    const web = $WEB.value;
    
    if (nombre == false || !validarNombre(nombre)){
        alert("EL NOMBRE ES INCORRECTO. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -SOLO PUEDE HABER DOS NOMBRES")
    } else if(apellidos == false || !validarApellidos(apellidos)){
        alert("LOS APELLIDOS SON INCORRECTOS. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -SOLO PUEDE HABER DOS APELLIDOS")
    } else if (email == false || !validarEmail(email)){
        alert("EL EMAIL ES INCORRECTO. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -EL FORMATO DEBE SER xxx@xxxxx.extension")
    } else if(web == false || !validarWeb(web)){
        alert("LA WEB ES INCORRECTA. REVISE QUE CUMPLE LO SIGUIENTE: \n -EL CAMPO DEBE ESTAR RELLENO \n -EL FORMATO DEBE SER: http://www.sitio.extension")
    } else {
        regUsuario = {nombre:nombre, apellidos:apellidos, email:email, web:web};
        console.log(regUsuario);

        let newUser = JSON.stringify(regUsuario);
        console.log(newUser);

        obtenerUsuario();
    }
}

function validarNombre(nombre){
    const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    
    return validacion.test(nombre);
}

function validarApellidos(apellidos){
    const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    
    return validacion.test(apellidos);
}

function validarEmail(email){
    const validacion = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    
    return validacion.test(email);
}

function validarWeb(web){
    const validacion = /^http:\/\/www\.[a-zA-Z]+\.[a-zA-Z]+$/;

    return validacion.test(web);
}

$FORMULARIO.addEventListener('submit', handleSubmit);