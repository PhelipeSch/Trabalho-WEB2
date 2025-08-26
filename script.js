let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', validarForm);

let nome = document.getElementById('nome');
nome.addEventListener('blur', validarNome);
nome.addEventListener('keyup', validarNome);

let endereco = document.getElementById('endereco');
endereco.addEventListener('blur', validarEndereco);
endereco.addEventListener('keyup', validarEndereco);

function validarForm(event) {
    if((validarNome() == false) || (validarEndereco() == false)) {
        event.preventDefault();
        alert('Por favor, informe todos os dados corretamente.'); 
    } else {
        alert('Dados validos.');
    }
}

function validarNome() {
    // Nome: nao pode ser nulo, conter numeros ou caracteres especiais e deve ter nome e sobrenome;
    let nome = document.getElementById('nome');

    if (nome.value.length <= 0) {
        nome.setAttribute('class', 'erro');
        return false;
    } else {
        // Verifica se o nome contém números ref https://pt.stackoverflow.com/questions/9121/como-verificar-se-existem-n%C3%BAmeros-dentro-de-um-input-com-javascript#:~:text=Explica%C3%A7%C3%A3o:,um%20limite%20de%2050%20caracteres.
        let regexNum = /[0-9]/;
        if (regexNum.test(nome.value)) {
            nome.setAttribute('class', 'erro');
            return false;
            // Verifica os caracteres especiais
        } else {
            // https://pt.stackoverflow.com/questions/300205/validar-nome-e-sobrenome-no-javascript
            let regexTxt = /[^a-zA-Z\s]/;
            if(regexTxt.test(nome.value)) {
                nome.setAttribute('class', 'erro');
                return false;
            } else {
                // Se nao possui sobrenome
                if (nome.value.indexOf(' ') === -1) {
                    nome.setAttribute('class', 'erro');
                    return false;
                }
            }
        }
        // Tudo certo
        nome.setAttribute('class', 'correto');
        return true;
    }
}

function validarEndereco() {
    // 
    let cidade = document.getElementById('cidade');
    let bairro = document.getElementById('bairro');
    let rua = document.getElementById('rua');
    //vazio
    if(bairro.value.length == 0 || rua.value.length == 0) {
        cidade.setAttribute('class', 'erro');
        return false;
    } else {
        // numero
        let regexNum = /[0-9]/;
        if (regexNum.test(bairro.value) || regexNum.test(rua.value)) {
            bairro.setAttribute('class', 'erro');
            return false;
        }
    } else {
        endereco.setAttribute('class', 'correto');
        return true;
    }
}

// let telefone = document.getElementById('telefone');
// let email = document.getElementById('email');
// let CPF = document.getElementById('CPF');
// let CEP = document.getElementById('CEP');
// let nascimento = document.getElementById('nascimento');
