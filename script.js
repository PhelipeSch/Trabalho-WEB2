let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let especiais = ["!","@","#","$","%","¨","&","*","(",")","_","+","=","-","{","}","[","]",";",":","'","<",">",",",".","?","/","|","^","~","`"];

let formulario = document.getElementById("formulario");

// Validar todos os campos do formulário
formulario.addEventListener("submit", function(event) {
  let nomeValido = validarNome();
  let enderecoValido = validarEndereco();
  let telefoneValido = validarTelefone();
  let emailValido = validarEmail();
  let cpfValido = validarCPF();
  let nascimentoValido = validarDataNascimento();

  // Impede o envio se algum campo for inválido
  if (!nomeValido || !enderecoValido || !telefoneValido || !emailValido || !cpfValido || !nascimentoValido) {
    event.preventDefault();
    alert("Por favor, informe todos os dados corretamente.");
  } else {
    alert("Dados válidos, prosseguindo o cadastro.");
  }
});

// Listeners para validar ao sair do campo ou digitar
document.getElementById("nome").addEventListener("blur", validarNome);
document.getElementById("nome").addEventListener("keyup", validarNome);

document.getElementById("cidade").addEventListener("blur", validarEndereco);
document.getElementById("cidade").addEventListener("keyup", validarEndereco);

document.getElementById("bairro").addEventListener("blur", validarEndereco);
document.getElementById("bairro").addEventListener("keyup", validarEndereco);

document.getElementById("rua").addEventListener("blur", validarEndereco);
document.getElementById("rua").addEventListener("keyup", validarEndereco);

document.getElementById("telefone").addEventListener("blur", validarTelefone);
document.getElementById("telefone").addEventListener("keyup", validarTelefone);

document.getElementById("email").addEventListener("blur", validarEmail);
document.getElementById("email").addEventListener("keyup", validarEmail);

document.getElementById("email").addEventListener("blur", validarCPF);
document.getElementById("email").addEventListener("keyup", validarCPF);

document.getElementById("nascimento").addEventListener("blur", validarDataNascimento);
document.getElementById("nascimento").addEventListener("keyup", validarDataNascimento);
/**
    Função que valida o campo nome
    Regras:
    Não pode ser vazio
    Não pode conter números
    Não pode conter caracteres especiais
    Deve conter nome e sobrenome (ter pelo menos um espaço)
 */
function validarNome() {
  let nome = document.getElementById("nome");

  // Verifica se está vazio
  if (nome.value.length <= 0) {
    nome.setAttribute("class", "erro");
    return false;
  } else {
    // Verifica se contém números
    for (let i = 0; i < nome.value.length; i++) {
      if (numeros.includes(nome.value[i])) {
        nome.setAttribute("class", "erro");
        return false;
      }
    }

    // Verifica se contém caracteres especiais
    for (let i = 0; i < nome.value.length; i++) {
      if (especiais.includes(nome.value[i])) {
        nome.setAttribute("class", "erro");
        return false;
      }
    }

    // Verifica se possui sobrenome (pelo menos um espaço)
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
    Função que valida o endereço
    Regras:
    Cidade, Bairro e rua não podem ser vazios
    Cidade, Bairro e rua não podem conter números
 */
function validarEndereco() {
  let cidade = document.getElementById("cidade");
  let bairro = document.getElementById("bairro");
  let rua = document.getElementById("rua");

  // Verifica se tem algum vazio
  if (
    cidade.value.length == 0 ||
    bairro.value.length == 0 ||
    rua.value.length == 0
  ) {
    cidade.setAttribute("class", "erro");
    bairro.setAttribute("class", "erro");
    rua.setAttribute("class", "erro");
    return false;
  }

  // Verifica se cidade contém números
  for (let i = 0; i < cidade.value.length; i++) {
    if (numeros.includes(cidade.value[i])) {
      cidade.setAttribute("class", "erro");
      return false;
    }
  }

  // Verifica se bairro contém números
  for (let i = 0; i < bairro.value.length; i++) {
    if (numeros.includes(bairro.value[i])) {
      bairro.setAttribute("class", "erro");
      return false;
    }
  }

  // Verifica se rua contém números
  for (let i = 0; i < rua.value.length; i++) {
    if (numeros.includes(rua.value[i])) {
      rua.setAttribute("class", "erro");
      return false;
    }
  }

  // Tudo certo
  cidade.setAttribute("class", "correto");
  bairro.setAttribute("class", "correto");
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

  // Verifica se está vazio
  if (telefone.value.length == 0) {
    telefone.setAttribute("class", "erro");
    return false;
  }

  // Verifica se contém apenas números
  for (let i = 0; i < telefone.value.length; i++) {
    if (!numeros.includes(telefone.value[i])) {
      telefone.setAttribute("class", "erro");
      return false;
    }
  }

  // Verifica se tem 11 dígitos
  if (telefone.value.length != 11) {
    telefone.setAttribute("class", "erro");
    return false;
  }

  // Tudo certo
  telefone.setAttribute("class", "correto");
  return true;
}
/*
    Função que valida o campo email
    Regras:
    Não pode ser vazio
    Deve conter "@" e "."
*/
function validarEmail() {
  let email = document.getElementById("email");

  // Verifica se está vazio
  if (email.value.length == 0) {
    email.setAttribute("class", "erro");
    return false;
  }

  // Verifica se contém "@" e "."
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    email.setAttribute("class", "erro");
    return false;
  }

  // Tudo certo
  email.setAttribute("class", "correto");
  return true;
}
/*
    Função que valida o CPF
    Regras:
    Não pode ser vazio
    Deve conter apenas números
    Deve ter 11 dígitos
*/
function validarCPF() {
    let cpf = document.getElementById("CPF");

    // Verifica se está vazio
    if (cpf.value.length == 0) {
        cpf.setAttribute("class", "erro");
        return false;
    }

    // Verifica se contém apenas números
    for (let i = 0; i < cpf.value.length; i++) {
        if (!numeros.includes(cpf.value[i])) {
            cpf.setAttribute("class", "erro");
            return false;
        }
    }

    // Verifica se tem 11 dígitos
    if (cpf.value.length != 11) {
        cpf.setAttribute("class", "erro");
        return false;
    }

    // Tudo certo
    cpf.setAttribute("class", "correto");
    return true;
}

/*
    Função que valida a data de nascimento
    Regras:
    Tem que ser no maximo a data atual 
    Nao pode ser vazio
*/
function validarDataNascimento() {
  let dataNascimento = document.getElementById("nascimento");
  let dataAtual = new Date();

  // Verifica se está vazio
  if (dataNascimento.value.length == 0) {
    dataNascimento.setAttribute("class", "erro");
    return false;
  }

  // Verifica se a data é válida
  let data = new Date(dataNascimento.value);
  if (data > dataAtual) {
    dataNascimento.setAttribute("class", "erro");
    return false;
  }

  // Tudo certo
  dataNascimento.setAttribute("class", "correto");
  return true;
}