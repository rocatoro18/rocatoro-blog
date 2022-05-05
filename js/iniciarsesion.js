// Utilizado para leer el DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
// Evento que escucha cuando se da click a un boton y una vez sucede eso se acciona una funcion
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});
// Función para checar la información que esta escrita en cada input y en base a eso tomar
// una desicion
function checkInputs(){
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue == ''){
        setErrorFor(username,'Usuario no puede estar en blanco');
    } else {
        setSuccessFor(username);
    }
    if(passwordValue == ''){
        setErrorFor(password,'La contraseña no puede estar en blanco');
    } else {
        setSuccessFor(password);
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

}