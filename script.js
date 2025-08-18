let submit = document.getElementById('submit');
let nome = document.getElementById('nome');
let telefone = document.getElementById('telefone');
let email = document.getElementById('email');
let CPF = document.getElementById('CPF');
let CEP = document.getElementById('CEP');
let nascimento = document.getElementById('nascimento');

submit.addEventListener('click', verificar());
function verificar() {
    // Nome nao pode ter numero, caractere especial e tem que ter espaço (para sobrenome)
    if(!nome.(' ')) {
        console.log('Por favor informe sobrenome');
    }
}