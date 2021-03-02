const formCompra = document.getElementById('formCompra')
const inputsC = document.querySelectorAll('#formCompra input')

const expresiones2 = {
    presioC: /\d+\.\d{2}$/,
    valorC: /\d+\.\d{2}$/,
    deceo: /\d+\.\d{2}$/
}

const campoC = {
    presioC: false,
    valorC: false,
    deceo: false
}

const compra = []

const validarFormularioCompra = (e) => {
    //console.log(e.target.value)
    switch (e.target.name){  //evaluar cual me es rellenado
        case "presioC":  
            validarCompra(expresiones2.presioC, e.target, 'presioC')
            const presioC = e.target.value
            compra["presioC"] = presioC   //envia al array copra los datos colocados 

        break
        case "valorC":  
        validarCompra(expresiones2.valorC, e.target, 'valorC')
            const valorC = e.target.value
            compra['valorC'] = valorC
        break
        case "deceo":  
        validarCompra(expresiones2.presioC, e.target, 'deceo')
        const deceo = e.target.value
        compra['deceo'] = deceo
        break
    }
}


const validarCompra = (expresiones2,input,campo) => {
    if(expresiones2.test(input.value)){
        document.getElementById(`group__${campo}`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`group__${campo}`).classList.add('formulario__grupo-correcto')
        document.getElementById(`group__${campo}`).classList.add('.form__group-compra-activo')
        document.querySelector(`#group__${campo} .compra__group-error`).classList.remove('compra__group-error-active')
        campoC [campo] = true
      }else {
          document.getElementById(`group__${campo}`).classList.add('formulario__grupo-incorrecto')
          document.getElementById(`group__${campo}`).classList.remove('formulario__grupo-correcto')
          document.getElementById(`group__${campo}`).classList.remove('form__group-compra-activo')
          document.querySelector(`#group__${campo} .compra__group-error`).classList.add('compra__group-error-active')
          campoC [campo] = false
      }
}

inputsC.forEach((input) => {
    input.addEventListener('keyup', validarFormularioCompra)
    input.addEventListener('blur', validarFormularioCompra)
});

formCompra.addEventListener('submit', (e) => {
    e.preventDefault()
    
    if(campoC.presioC && campoC.valorC ){
        formCompra.reset()
        document.getElementById('formulario__mensajeCompra-exito').classList.add('formulario__mensajeCompra-exito-activo')

        setTimeout(() => {
            document.getElementById('formulario__mensajeCompra-exito').classList.remove('formulario__mensajeCompra-exito-activo')
        },5000)
    }else {
        document.getElementById('formulario__mensajeCompra').classList.add('formulario__mensajeCompra-activo')

        setTimeout(() => {
            document.getElementById('formulario__mensajeCompra').classList.remove('formulario__mensajeCompra-activo')
        },5000)
    }
})