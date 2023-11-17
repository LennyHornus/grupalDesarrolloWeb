// Selecciono en el DOM y guardo en variables el formulario y cada input
let formularioSignUp = document.querySelector("form#signup");

let inputNombre = document.querySelector('#nombre');
let errorNombre = document.querySelector('#errorNombre');

let inputEmail = document.querySelector('#email');
let errorEmail = document.querySelector('#errorEmail');

let inputTelefono = document.querySelector('#telefono');
let errorTelefono = document.querySelector('#errorTelefono');

let inputMensaje = document.querySelector('#mensaje');
let errorMensaje = document.querySelector('#errorMensaje');


formularioSignUp.addEventListener("submit", function(event) {
    // Evito el envio del formulario y creo el array errores para cargar el mensaje correspondiente
    event.preventDefault();
    let errores = [];

    // Limpio los errores si existian antes en el HTML
    errorNombre.innerText = '';
    errorEmail.innerText = '';
    errorTelefono.innerText = '';
    errorMensaje.innerText = '';

    // Errores del nombre
    let inputNombreValue = inputNombre.value.trim();

    if(inputNombreValue === "") {
        errores.push({
            input: "nombre",
            mensaje: "Este campo es obligatorio"
        })
    }else if (!inputNombreValue.match(/^[a-zA-Z]+$/)) {
        errores.push({
            input: "nombreNoValido",
            mensaje: "Ingrese un nombre valido"
        })
    }

    // Errores del email
    if(inputEmail.value.trim() === "") {
        errores.push({
            input: "emailVacio",
            mensaje: "Este campo es obligatorio"
        })
    }else if (!inputEmail.value.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/)) {
        errores.push({
            input: "emailNoValido",
            mensaje: "Ingrese un email valido"
        })
    }

    // Errores del telefono
    if(inputTelefono.value.trim() === "") {
        errores.push({
            input: "telefonoVacio",
            mensaje: "Este campo es obligatorio"
        })
    }else if(isNaN(inputTelefono.value)) {
        errores.push({
            input: "telefonoNoValido",
            mensaje: "Solo puede ingresar numeros"
        })
    }

    // Errores del mensaje
    if(inputMensaje.value.trim() === "") {
        errores.push({
            input: "mensajeVacio",
            mensaje: "Este campo es obligatorio"
        })
    }


    console.log();
    // Aca cargo los errores en el DOM
    if(errores.length !== 0) {             // Si el array errores no es 0, es decir que contiene errores, ejecuto un forEach de cada elemento
        errores.forEach(function(error) {  // En el forEach corroboro cual error es en especifico,
            switch(error.input) {          //  y asigno con un switch, al elemento HTML correspondiente, el mensaje determinado del error
                case "nombre":
                    errorNombre.innerText = error.mensaje;
                    break;
                case "nombreNoValido":
                    errorNombre.innerText = error.mensaje;
                    break;
                case 'emailVacio':
                    errorEmail.innerText = error.mensaje;
                    break
                case 'emailNoValido':
                    errorEmail.innerText = error.mensaje;
                    break
                case 'telefonoVacio':
                    errorTelefono.innerText = error.mensaje;
                    break
                case 'telefonoNoValido':
                    errorTelefono.innerText = error.mensaje;
                    break
                case 'mensajeVacio':
                    errorMensaje.innerText = error.mensaje;
                    break
            }
        })
    } else {
        formularioSignUp.reset();
    }
});