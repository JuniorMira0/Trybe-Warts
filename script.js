let email = document.getElementById('email');
let password = document.getElementById('password');
let buttonEntrar = document.getElementById('buttonEntrar');

//função para checkar email e senha
function checkUser() {
    if (email.value == 'tryber@teste.com' && password.value == '123456') {
        alert('Olá, Tryber!'); 
    } else {
            alert('Email ou senha inválidos.');
        }
}

buttonEntrar.addEventListener('click', checkUser);
