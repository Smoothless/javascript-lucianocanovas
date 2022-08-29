//SACAR PROMEDIOS//
const NumeroValores = prompt("Ingrese la cantidad de valores a promediar")
let SumaValores = 0
let Promedio = 0

if (isNaN (NumeroValores) == false) {
    for (let Numero = 1; Numero <= NumeroValores; Numero++) {
        SumaValores = SumaValores + parseInt(prompt("Ingrese la Nota N*" + Numero))
        console.log(SumaValores)
    } 
    if (isNaN(SumaValores) == true) {alert ("Ha ingresado un numero no valido")}
    else {alert("La suma de las notas es " + SumaValores)
    alert("El promedio de las notas es " + SumaValores / NumeroValores)
}
}

else {
    alert(NumeroValores + " no es un numero valido")
}

