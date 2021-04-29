const botonesPrueba = document.getElementById('botonesAll')
const botoneAll  = document.querySelectorAll('#botonesAll button')

const botonesvalor = (e) => {
    switch(e.target.name){
        case "boton1":
            document.getElementById('informe').textContent = `Este el el boton1`
        break
        case "boton2":
            document.getElementById('informe').textContent = `Este el el boton2`
        break
        case "boton3":
            document.getElementById('informe').textContent = `Este el el boton3`
        break
        case "boton4":
            document.getElementById('informe').textContent = `Este el el boton4`
        break
        case "boton5":
            document.getElementById('informe').textContent = `Este el el boton5`
        break
        case "boton6":
            document.getElementById('informe').textContent = `Este el el boton6`
        break
        case "boton7":
            document.getElementById('informe').textContent = `Este el el boton7`
        break
        case "boton8":
            document.getElementById('informe').textContent = `Este el el boton8`
        break
        case "boton9":
            document.getElementById('informe').textContent = `Este el el boton9`
        break
        case "boton10":
            document.getElementById('informe').textContent = `Este el el boton10`
        break
    }
}



botoneAll.forEach((button) => {
    button.addEventListener('click', botonesvalor)
})