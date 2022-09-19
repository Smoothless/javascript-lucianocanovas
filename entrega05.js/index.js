// VARIABLES QUE CONSIGUEN DATOS DEL HTML
let Display = document.getElementById("Display")
let Boton = Array.from(document.getElementsByClassName("Boton"))

Boton.map (Boton => {
    Boton.addEventListener("click", (Numero) => {
        switch(Numero.target.innerText){
            case 'C':
                Display.innerText = ""
                break
            case '=':
                try{
                    Display.innerText = eval(Display.innerText)
                } 
                catch {
                    Display.innerText = "Error"
                }
                break
            case "←":
                if (Display.innerText){
                   Display.innerText = Display.innerText.slice(0, -1)
                }
                break
            default:
                Display.innerText += Numero.target.innerText
        }
    })
})