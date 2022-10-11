// VARIABLES QUE CONSIGUEN DATOS DEL HTML
let Display = document.getElementById("Display")
let DisplayHistorial = document.getElementById("DisplayHistorial")
let Boton = Array.from(document.getElementsByClassName("Boton"))
let Retroceder = Array.from(document.getElementsByClassName("Retroceder"))
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
                    Historial.push(parseFloat(Display.innerText).toFixed(1))
                    console.log(Historial)
                    for (i=0; i < Historial.length; i++) {
                        localStorage.setItem("Resultado "+ (i+1), Historial[i])
                    }
                    Toastify({
                        text: "Resultado Guardado",
                        duration: 3000,
                        position: "center",
                    }).showToast();
                } 
                // SI NO ES POSIBLE EVALUAR EL ARRAY DEVUELVE ERROR
                catch {
                    Display.innerText = "Error"
                    Swal.fire({
                        title: 'Error',
                        text: 'No se puede calcular la cuenta ingresada, revise los valores y reintente',
                        icon: 'error',
                        confirmButtonText: 'Hecho'
                      })
                }
                break
            // MUESTRA EL HISTORIAL DE RESULTADOS
                case "◷":
                DisplayHistorial.innerText != Historial.join(" | ") ? DisplayHistorial.innerText = Historial.join(" | ") : DisplayHistorial.innerText = "Ver Ultimos Resultados"
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