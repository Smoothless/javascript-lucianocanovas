 //calcular IMC o Peso Ideal
 function calculoIMC(sexo, altura, peso) 
 {
   altura = altura / 100;
   peso = peso;
   let imc = (peso / (altura * altura));
   let resultado = "";
   
   switch (sexo)
   {
    case "M": 
        if (imc < 20) {
            resultado = "Peso inferior al normal";
        }
        else if (imc <= 24) {
            resultado = "Peso Normal";
        }
        else {
            resultado = "Peso superior al normal";
        }
        console.log(resultado)
        break
    case "H":   
        if (imc < 20) {
            resultado = "Peso inferior al normal";
        }
        else if (imc <= 25) {
            resultado = "Peso Normal";
        }
        else {
            resultado = "Peso superior al normal";
        }
        console.log(resultado)
        break
    default:
        resultado = "["+ sexo + "] no es un sexo valido, porfavor, introduzca H/M segun corresponda";
    }
    return alert("Su IMC es: " + imc.toFixed(1) + " y su clasificación es: " + resultado);
 }

 const sexo = prompt("Indique su sexo [H/M] segun corresponda, ");
 let altura = parseInt(prompt("Indique su altura en centímetros:", ""));
 let peso = parseInt(prompt("Indique su peso en kilógramos:", ""));
 let resultado = calculoIMC(sexo, altura, peso);
 