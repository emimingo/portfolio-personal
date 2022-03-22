const buttonSubmit = document.querySelector('.button-submit');

export function valida(input, inputs){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
       input.parentElement.classList.remove('input-container--invalid');
       input.parentElement.querySelector('.input-message-error').innerHTML = "";
       submitController(inputs);

    }else{
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
        submitController(inputs);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
];



const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no debe estar vacío",
        patternMismatch: "El nombre no es válido",
    },
    email: {
        valueMissing: "El campo email no debe estar vacío",
        typeMismatch: "El correo no es válido",
        patternMismatch: "El correo no es válido",
    }, 
    asunto: {
        valueMissing: "El campo asunto no debe estar vacío",
    },
    mensaje: {
        valueMissing: "El campo mensaje no debe estar vacío",
    }
}

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}



function submitController(inputs) {
    let count = 0;
    inputs.forEach(input => {
        if(!(input.validity.valid)){
            return;
        } 
        count++;
    });
    if(count == inputs.length){
        buttonSubmit.classList.remove("button-disabled");
        buttonSubmit.disabled = false;
        return;
    } 
    buttonSubmit.classList.add("button-disabled");
    buttonSubmit.disabled = true;
}