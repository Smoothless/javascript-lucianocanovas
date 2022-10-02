// VARIABLES QUE CONSIGUEN DATOS DEL HTML
let Display = document.getElementById("Display")
let DisplayHistorial = document.getElementById("DisplayHistorial")
let Boton = Array.from(document.getElementsByClassName("Boton"))
let Historial = []

// REVISA LOS BOTONES PRESIONADOS, LOS GUARDA EN UN ARRAY Y EVALUA TODOS LOS ELEMENTOS DEL ARRAY PARA OBTENER EL RESULTADO
Boton.map (Boton => {
    Boton.addEventListener("click", (Evento) => {
        switch(Evento.target.innerText){
            // LIMPIA EL DISPLAY
            case 'C':
                Display.innerText = ""
                break
            case '=':
                try {Display.innerText = eval(Display.innerText)
                    // GUARDA LOS RESULTADOS EN UN ARRAY Y EN EL LOCAL STORAGE
                    Historial.push(parseInt(Display.innerText))
                    console.log(Historial)
                    for (i=0; i < Historial.length; i++) {
                        localStorage.setItem("Resultado "+ (i+1), Historial[i])
                        DisplayHistorial.innerText = "Ultimo Resultado = " + localStorage.getItem("Resultado "+(i+1))
                    }
                } 
                // SI NO ES POSIBLE EVALUAR EL ARRAY DEVUELVE ERROR
                catch {
                    Display.innerText = "Error"
                }
                break
            // ELIMINA EL ULTIMO ELEMENTO DEL ARRAY PARA BORRAR LA OPERACION
                case "←":
                if (Display.innerText){
                   Display.innerText = Display.innerText.slice(0, -1)
                }
                break
            default:
                Display.innerText += Evento.target.innerText
        }
    })
})