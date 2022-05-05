var txtOriginal = document.querySelector("#txt");
var btn = document.querySelector("#btn");
var txtFinal = document.querySelector("#msgFinal");
var seletor = document.querySelector("#selecao");
var encode = document.querySelector("#cripto");
var decode = document.querySelector("#decripto");
var incrementoCifra = document.querySelector("#somaCifra");

btn.addEventListener("click", function () {
  if (seletor.value == 1 && encode.checked) {
    var base64 = btoa(txtOriginal.value);
    txtFinal.value = base64;
  } else if (seletor.value == 1 && decode.checked) {
    var revertBase64 = atob(txtOriginal.value);
    txtFinal.value = revertBase64;
  } else if (seletor.value == 2 && encode.checked) {
    var resultCesar = cifraDeCesar(txtOriginal.value, +incrementoCifra.value);
    txtFinal.value = resultCesar;
  } else if (seletor.value == 2 && decode.checked) {
    var resultDecriptoCesar = cesarDecifrado(
      txtOriginal.value,
      +incrementoCifra.value
    );
    txtFinal.value = resultDecriptoCesar;
  } else {
    alert(`Selecione uma criptografia e escolha a opção desejada.`);
  }
});

seletor.addEventListener("click", function () {
  if (seletor.value == 2 && true) {
    incrementoCifra.style.display = "inline-block";
  } else if (seletor.value == 1 && true) {
    incrementoCifra.style.display = "none";
  }
});

encode.addEventListener("click", function () {
  btn.innerText = "Criptografar Mensagem";
  btn.style.display = "inline-block";
});

decode.addEventListener("click", function () {
  btn.innerText = "Descriptografar Mensagem";
  btn.style.display = "inline-block";
});

function cifraDeCesar(texto, increment) {
  texto = txtOriginal.value;
  var entrada = texto.split("");
  var numeroCesar = [];
  var retornoCesar = [];
  for (i = 0; i < entrada.length; i++) {
    if (entrada[i].charCodeAt() > 64 && entrada[i].charCodeAt() < 91) {
      var aplicaCifra = (entrada[i].charCodeAt() - 65 + increment) % 26;
      numeroCesar.push(aplicaCifra + 65);
    } else if (
      entrada[i].charCodeAt() >= 97 &&
      entrada[i].charCodeAt() <= 122
    ) {
      aplicaCifra = (entrada[i].charCodeAt() - 97 + increment) % 26;
      numeroCesar.push(aplicaCifra + 97);
    } else {
      numeroCesar.push(entrada[i].charCodeAt());
    }
  }
  for (var j = 0; j < numeroCesar.length; j++) {
    retornoCesar.push(String.fromCharCode(numeroCesar[j]));
  }
  return retornoCesar.join("");
}

function cesarDecifrado(texto, increment) {
  texto = txtOriginal.value;
  var guardaMensagem = texto.split("");
  var msgCriptografada = [];
  var cesarNumero = [];

  for (var i = 0; i < guardaMensagem.length; i++) {
    if (
      guardaMensagem[i].charCodeAt() >= 65 &&
      guardaMensagem[i].charCodeAt() <= 90
    ) {
      var testando = (guardaMensagem[i].charCodeAt() - 65 - increment) % 26;
      cesarNumero.push((testando < 0 ? testando + 26 : testando) + 65);
    } else if (
      guardaMensagem[i].charCodeAt() >= 97 &&
      guardaMensagem[i].charCodeAt() <= 122
    ) {
      var testando = (guardaMensagem[i].charCodeAt() - 97 - increment) % 26;
      cesarNumero.push((testando < 0 ? testando + 26 : testando) + 97);
    } else {
      cesarNumero.push(guardaMensagem[i].charCodeAt());
    }
  }
  for (var j = 0; cesarNumero.length > j; j++) {
    msgCriptografada.push(String.fromCharCode(cesarNumero[j]));
  }
  return msgCriptografada.join("");
}
