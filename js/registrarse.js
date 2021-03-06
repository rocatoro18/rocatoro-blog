// Utilizado para leer el DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Evento que escucha cuando se da click a un boton y una vez sucede eso se acciona una funcion
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();

});

// Función para checar la información que esta escrita en cada input y en base a eso tomar
// una desicion
function checkInputs(){
    // Tomar valores de los inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordValue2 = password2.value.trim();

    if(usernameValue == ''){
        // mostrar error
        //agregar clase error
        setErrorFor(username, 'Usuario no puede estar en blanco');
    } else {
        // agregar clase correcto
        setSuccessFor(username);
    }
    if(emailValue == ''){
        setErrorFor(email, 'Email no puede estar en blanco');
    } else if(!isEmail(emailValue)){
        setErrorFor(email,'Email no es válido');
    } else {
        setSuccessFor(email);
    }
    if(passwordValue == ''){
        setErrorFor(password, 'Contraseña no puede estar en blanco');
    } else {
        setSuccessFor(password);
    }
    if(passwordValue2 == ''){
        setErrorFor(password2, 'Contraseña no puede estar en blanco');
    } else if (passwordValue != passwordValue2){
        setErrorFor(password2, 'Las ontraseñas no coinciden');
    } else {
        setSuccessFor(password2);
    }

    // Mostrar mensaje de éxito


}

// Función para colocar los errores de cada campo del registro
function setErrorFor(input, message){
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // Agregar mensaje de error al small tag
    small.innerText = message;

    // Agregar clase error
    formControl.className = 'form-control error';

}

// Función para colocar un campo del registro en verde al rellenarse con exito
function setSuccessFor(input){
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-control success';
}

// Función que utiliza expresiones regulares para verificar que un email es correcto
function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

