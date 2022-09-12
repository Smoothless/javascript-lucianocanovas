//CALCULADORA DE PROMEDIOS POR ALUMNO

//FUNCION PARA INGRESAR LOS NOMBRES DE LOS ALUMNOS EN UN ARRAY
function IngresarAlumnos (NumeroDeAlumnos, Alumnos) {
    for (let NumeroAlumno = 1; NumeroAlumno <= NumeroDeAlumnos; NumeroAlumno++) {
        Alumnos.push(prompt("Ingrese el Nombre del Alumno " + NumeroAlumno))
    }
}

//INGRESA LOS ALUMNOS CON NOTA MAYOR A 7 EN UN ARRAY DISTINTO A LOS MENORES A 7
function AlumnosAprobados (Alumnos, SumaCalificaciones, NumeroCalificaciones) {
    if (Math.round(SumaCalificaciones / NumeroCalificaciones) >= 7) {
        Aprobados.push(Alumnos[i])
    }
    else {
        Desaprobados.push(Alumnos[i])
    }
}

//REVISA SI LOS DATOS INGRESADOS SON NUMEROS, DE LO CONTRARIO DEVUELVE UN MENSAJE DE ERROR, MUESTRA LA SUMA Y EL PROMEDIO DE CADA VALOR DEL ARRAY
function CalcularPromedios (Alumnos, NumeroCalificaciones, SumaCalificaciones) {
    for (i = 0; i < Alumnos.length; i++) {
        if (isNaN (NumeroCalificaciones) == false) {
            for (let Numero = 1; Numero <= NumeroCalificaciones; Numero++) {
                SumaCalificaciones = SumaCalificaciones + parseInt(prompt("Ingrese la Nota N*" + Numero + " de " + Alumnos[i]))
                console.log(SumaCalificaciones)
            } 
            if (isNaN(SumaCalificaciones) == true) {alert ("Ha ingresado un numero no valido")}
            else {alert("La suma de las notas de " + Alumnos[i] + " es " + SumaCalificaciones)
            alert("El promedio de las notas de " + Alumnos[i] + " es " + SumaCalificaciones / NumeroCalificaciones + ", Nota final Redondeada: " + Math.round(SumaCalificaciones / NumeroCalificaciones))
            AlumnosAprobados (Alumnos, SumaCalificaciones, NumeroCalificaciones)
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
let Aprobados = []
let Desaprobados = []
const NumeroCalificaciones = prompt("Ingrese la cantidad de Calificaciones a Promediar")
let SumaCalificaciones = 0
IngresarAlumnos (NumeroDeAlumnos, Alumnos)
CalcularPromedios (Alumnos, NumeroCalificaciones, SumaCalificaciones)
alert("Alumnos Aprobados: " + Aprobados)
alert("Alumnos Desaprobados: " + Desaprobados)
Aprobados.forEach(element => alert(element + ": Aprobado"))
Desaprobados.forEach(element => alert(element + ": Desaprobado"))