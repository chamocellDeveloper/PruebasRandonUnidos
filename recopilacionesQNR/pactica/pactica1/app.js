const botones = document.getElementById('botones')
const buttons = document.querySelectorAll('#botones button')



const validarButon = (e) => {
   
    
        switch (e.target.name){
            case "boton1":
                document.getElementById('parrafo').classList.add('dotted')
            break
            case "boton2":
                document.getElementById('parrafo').classList.add('dashed')
            break
            case "boton3":
                document.getElementById('parrafo').classList.add('solid')
            break
            case "boton4":
                document.getElementById('parrafo').classList.add('double')
            break
            case "boton5":
                document.getElementById('parrafo').classList.add('todos')
            break
        }

    
}

buttons.forEach((button) => {
    button.addEventListener('click', validarButon)
})

botones.addEventListener('submit', (e) => {
    e.preventDefault()
})


