function validacao() {
  document.querySelector("#success").classList.remove("mensagem");
  document.querySelector("#error").classList.remove("mensagem");

  var cpf = document.querySelector("#cpf_digitado").value;
  var cpfRefct = cpf.replace(/\D/g, "");

  //   console.log(cpfRefct);

  var resultadoValidacao = validaCpf(cpfRefct);

  if (resultadoValidacao) {
    document.querySelector("#success").classList.add("mensagem");
  } else {
    document.querySelector("#error").classList.add("mensagem");
  }
}

function validaCpf(cpf) {
  if (cpf.length != 11) {
    return false;
  } else {
    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);

    var soma = 0;
    for (var i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }
    // console.log(soma);

    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    //Validação do primeiro digito
    if (resultado != digitos.charAt(0)) {
      return false;
    }
    // console.log(
    //   digitos.toString().charAt(0) + " é a primeira posição da variável soma"
    // );

    soma = 0;
    numeros = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--) {
      soma += numeros.charAt(11 - k) * k;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    //Validação do segundo digito
    if (resultado != digitos.charAt(1)) {
      return false;
    }

    return true;
  }
}
//37142811854
