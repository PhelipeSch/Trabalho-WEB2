let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let especiais = ["!", "@", "#", "$", "%", "¨", "&", "*", "(", ")", "_", "+", "=", "-", "{", "}", "[", "]", ";", ":", "'", "<", ">", ",", ".", "?", "/", "|", "^", "~", "`"];

let formulario = document.getElementById("formulario");

// Validar os campos do formulario
formulario.addEventListener("submit", function (event) {
  let nomeValido = validarNome();
  let enderecoValido = validarEndereco();
  let telefoneValido = validarTelefone();
  let emailValido = validarEmail();
  let cpfValido = validarCPF();
  let nascimentoValido = validarDataNascimento();

  // Se for invalido nao envia
  if (!nomeValido || !enderecoValido || !telefoneValido || !emailValido || !cpfValido || !nascimentoValido) {
    event.preventDefault();
    alert("Por favor, informe todos os dados corretamente.");
  } else {
    alert("Dados válidos, prosseguindo o cadastro.");
  }
});

// Listeners para validar quando sair do campo
document.getElementById("nome").addEventListener("blur", validarNome);
document.getElementById("nome").addEventListener("keyup", validarNome);

document.getElementById("cidade").addEventListener("blur", validarCidade);
document.getElementById("cidade").addEventListener("keyup", validarCidade);

document.getElementById("bairro").addEventListener("blur", validarBairro);
document.getElementById("bairro").addEventListener("keyup", validarBairro);

document.getElementById("rua").addEventListener("blur", validarRua);
document.getElementById("rua").addEventListener("keyup", validarRua);

document.getElementById("telefone").addEventListener("blur", validarTelefone);
document.getElementById("telefone").addEventListener("keyup", validarTelefone);

document.getElementById("email").addEventListener("blur", validarEmail);
document.getElementById("email").addEventListener("keyup", validarEmail);

document.getElementById("CPF").addEventListener("blur", validarCPF);
document.getElementById("CPF").addEventListener("keyup", validarCPF);

document.getElementById("nascimento").addEventListener("blur", validarDataNascimento);
document.getElementById("nascimento").addEventListener("keyup", validarDataNascimento);

/*
    Funcao que valida o campo nome
    Regras:
    Não pode ser vazio
    Não pode conter números
    Não pode conter caracteres especiais
    Deve conter nome e sobrenome (ter pelo menos um espaço)
 */
function validarNome() {
  let nome = document.getElementById("nome");

  // vazio
  if (nome.value.length <= 0) {
    nome.setAttribute("class", "erro");
    return false;
  } else {

    // números e carácteres especiais
    for (let i = 0; i < nome.value.length; i++) {
      if (numeros.includes(nome.value[i]) || especiais.includes(nome.value[i])) {
        nome.setAttribute("class", "erro");
        return false;
      }
    }

    // sobrenome
    if (nome.value.indexOf(" ") == -1) {
      nome.setAttribute("class", "erro");
      return false;
    }

    // Tudo certo
    nome.setAttribute("class", "correto");
    return true;
  }
}

/**
    Funcões que validam o endereço (Ciade, Bairro e Rua)
    Regras:
    Cidade, Bairro e rua não podem ser vazios
    Cidade, Bairro e rua não podem conter números
    Cidade, Bairro e rua não podem conter carácteres especiais
 */

function validarCidade() {
  let cidade = document.getElementById("cidade");

  // vazio
  if (cidade.value.length == 0) {
    cidade.setAttribute("class", "erro");
    return false;
  }

  // cidade - números e carácteres especiais
  for (let i = 0; i < cidade.value.length; i++) {
    if (numeros.includes(cidade.value[i]) || especiais.includes(cidade.value[i])) {
      cidade.setAttribute("class", "erro");
      return false;
    }

  }

  // Tudo certo
  cidade.setAttribute("class", "correto");
  return true;
}

function validarBairro() {
  let bairro = document.getElementById("bairro");

  //vazio
  if (bairro.value.length == 0) {
    bairro.setAttribute("class", "erro");
    return false;
  }

  // bairro - números e carácteres especiais
  for (let i = 0; i < bairro.value.length; i++) {
    if (numeros.includes(bairro.value[i]) || especiais.includes(bairro.value[i])) {
      bairro.setAttribute("class", "erro");
      return false;
    }
  }

  //tudo certo
  bairro.setAttribute("class", "correto");
  return true;
}

function validarRua() {
  let rua = document.getElementById("rua");

  // vazio
  if (rua.value.length == 0) {
    rua.setAttribute("class", "erro");
    return false;
  }

  //rua - números e carácteres especiais
  for (let i = 0; i < rua.value.length; i++) {
    if (numeros.includes(rua.value[i]) || especiais.includes(rua.value[1])) {
      rua.setAttribute("class", "erro");
      return false;
    }
  }

  // Tudo certo
  rua.setAttribute("class", "correto");
  return true;
}

/*
    Função que valida telefone
    Regras:
    Não pode ser vazio
    Deve conter apenas números
    Deve ter 11 dígitos
*/
function validarTelefone() {
  let telefone = document.getElementById("telefone");

  // vazio
  if (telefone.value.length == 0) {
    telefone.setAttribute("class", "erro");
    return false;
  }

  // números
  for (let i = 0; i < telefone.value.length; i++) {
    if (!numeros.includes(telefone.value[i])) {
      telefone.setAttribute("class", "erro");
      return false;
    }
  }

  // 11 dígitos
  if (telefone.value.length != 11) {
    telefone.setAttribute("class", "erro");
    return false;
  }

  // Tudo certo
  telefone.setAttribute("class", "correto");
  return true;
}

/*
    Funcao que valida o campo email
    Regras:
    Não pode ser vazio
    Deve conter "@" e "."
*/
function validarEmail() {
  let email = document.getElementById("email");

  // vazio
  if (email.value.length == 0) {
    email.setAttribute("class", "erro");
    return false;
  }

  // contém "@" e "."
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    email.setAttribute("class", "erro");
    return false;
  }

  // tudo certo
  email.setAttribute("class", "correto");
  return true;
}

/*
    Funcao que valida o CPF
    Regras:
    Não pode ser vazio
    Deve conter apenas números
    Deve ter 11 dígitos
*/
function validarCPF() {
  let cpf = document.getElementById("CPF");

  // vazio
  if (cpf.value.length == 0) {
    cpf.setAttribute("class", "erro");
    return false;
  }

  // números
  for (let i = 0; i < cpf.value.length; i++) {
    if (!numeros.includes(cpf.value[i])) {
      cpf.setAttribute("class", "erro");
      return false;
    }
  }

  // 11 dígitos
  if (cpf.value.length != 11) {
    cpf.setAttribute("class", "erro");
    return false;
  }

  // Tudo certo
  cpf.setAttribute("class", "correto");
  return true;
}

/*
    Funcao que valida a data de nascimento
    Regras:
    Tem que ser no maximo a data atual 
    Nao pode ser vazio
*/
function validarDataNascimento() {
  let dataNascimento = document.getElementById("nascimento");
  let dataAtual = new Date();

  //vazio
  if (dataNascimento.value.length == 0) {
    dataNascimento.setAttribute("class", "erro");
    return false;
  }

  // data válida
  let data = new Date(dataNascimento.value);
  if (data > dataAtual) {
    dataNascimento.setAttribute("class", "erro");
    return false;
  }

  // Tudo certo
  dataNascimento.setAttribute("class", "correto");
  return true;

}