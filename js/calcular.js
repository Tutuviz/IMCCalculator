document
  .getElementById("btnExecutar")
  .addEventListener("click", function (event) {
    var altura = parseFloat(document.querySelector("#txtValor1").value);
    var peso = parseFloat(document.querySelector("#txtValor2").value);

    var imc = peso / (altura * altura);
    var resultado = "";

    if (imc < 16) {
      resultado += "Magreza Grave";
    } else if (imc >= 16 && imc < 17) {
      resultado += "Magreza Moderada";
    } else if (imc >= 17 && imc < 18.5) {
      resultado += "Magreza Leve";
    } else if (imc >= 18.5 && imc < 25) {
      resultado += "Saudável";
    } else if (imc >= 25 && imc < 30) {
      resultado += "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
      resultado += "Obesidade Grau 1";
    } else if (imc >= 35 && imc < 40) {
      resultado += "Obesida Grau 2 (Severa!)";
    } else if (imc >= 40) {
      resultado += "Obesidade Grau 3 (Mórbida!)";
    }

    document.querySelector("#txtCalculo").innerHTML = imc.toFixed(2);
    document.querySelector("#txtResult").innerHTML = resultado;
    event.preventDefault();
  });
