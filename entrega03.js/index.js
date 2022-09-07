function IngresarAlumnos (NumeroDeAlumnos, Alumnos) {
for (let NumeroAlumno = 1; NumeroAlumno <= NumeroDeAlumnos; NumeroAlumno++) {
    Alumnos.push(prompt("Ingrese el Nombre del Alumno " + NumeroAlumno))
}
}

function CalcularPromedios (Alumnos, NumeroCalificaciones, SumaCalificaciones) {
for (i = 0; i < Alumnos.length; i++) {
if (isNaN (NumeroCalificaciones) == false) {
    for (let Numero = 1; Numero <= NumeroCalificaciones; Numero++) {
        SumaCalificaciones = SumaCalificaciones + parseInt(prompt("Ingrese la Nota N*" + Numero + " de " + Alumnos[i]))
        console.log(SumaCalificaciones)
    } 
    if (isNaN(SumaCalificaciones) == true) {alert ("Ha ingresado un numero no valido")}
    else {alert("La suma de las notas de " + Alumnos[i] + " es " + SumaCalificaciones)
    alert("El promedio de las notas de " + Alumnos[i] + " es " + SumaCalificaciones / NumeroCalificaciones)
    SumaCalificaciones = 0
}
}

else {
    alert(NumeroCalificaciones + " no es un numero valido")
}
}
}

const NumeroDeAlumnos = prompt("Ingrese la cantidad de Alumnos en el Sistema")
let Alumnos = []
const NumeroCalificaciones = prompt("Ingrese la cantidad de Calificaciones a Promediar")
let SumaCalificaciones = 0
IngresarAlumnos (NumeroDeAlumnos, Alumnos)
CalcularPromedios (Alumnos, NumeroCalificaciones, SumaCalificaciones)