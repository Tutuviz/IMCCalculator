document
  .getElementById("btnExecutar")
  .addEventListener("click", function (event) {
    var altura = parseFloat(document.querySelector("#txtValor1").value);
    var peso = parseFloat(document.querySelector("#txtValor2").value);
    var op = parseInt(document.querySelector("#txtOp").value);
    var imc = peso / (altura * altura);
    var resultado = "";
    var condicao;

    switch (op) {
      case 1:
        imc *= 1.1;
        break;
      case 2:
        imc *= 1;
        break;
      case 3:
        imc *= 0.8;
        break;
    }

    if (imc < 11.7) {
      resultado += "Abaixo do Peso";
      condicao = 1;
    } else if (imc >= 11.7 && imc < 15) {
      resultado += "Peso Ideal";
      condicao = 2;
    } else if (imc >= 15 && imc < 18.7) {
      resultado += "Acima do Peso";
      condicao = 3;
    } else if (imc >= 18.7) {
      resultado += "Obeso";
      condicao = 4;
    }
    document.querySelector("#txtCalculo").innerHTML = imc.toFixed(2);
    document.querySelector("#txtClassificar").innerHTML = condicao;
    document.querySelector("#txtResult").innerHTML = resultado;
    event.preventDefault();
  });
