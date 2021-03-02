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
const valorRest = []

const porsentaje = 0.0050

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
        ConpraValida()
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


const ConpraValida = () => {

    // operacion cuando compras BTC con pesos 
    const number4 = compra.presioC     //compra de cripto precio en fias
    const number5 = compra.valorC   //precio del mercado al comprar
    const number6 = 0.0050
    
    const res4 = number4 / number5 // monto comprado/posentage
    const res5 = res4 * number6  //comicsion
    const res6 = res4 - res5     // cuanto te dan

    valorRest ["res4"] = res4
    valorRest ["number4"] = number4

    console.log(res6)
    //fin de esta operacion pero se puede unir con la sigiente directamente al poner el monto 

}

 // operacion de ganacia 
 const number7 = 951853.00 // este monto en pesos es al que quieres vender 
 const number8 = porsentaje
 const number9 = valorRest.res4  //monto que yo deveria tener
 
 const number10 =  number9 - number8 //diferencia entre compara y lo que dan
 const number11 =  number10 + number8 // monto para estar en el monto que tenia que tener

// si yo vendo

const venta = number11

const porcetaje = 0.018
const valorPorce = number7 * porcetaje
const valor2 = number7 + valorPorce  // monto de venta

const valor3 = number11 * valor2  //monto de recuperacion

/* -----------------------------------------------------*/


// operacion cuando compras BTC con pesos 
const number12 = valor3
const number13 = valor2
const number14 = 0.0065

const res12 = number12 / number13 // monto comprado/porsentage
const res13 = res12 * number14  //comicsion
const res14 = res12 - res13     // cuanto te dan


/* ------------------------------------------------------------*/

const ganacia1 = res14  // monto de recuperacion
const comicion = 0.0065

const resulganacia = ganacia1 * comicion  //retamos la comicion
const ganacia2 = ganacia1 + resulganacia  //incrementamos la comision

const ganacia3 = valor2 * comicion  //incremento para optener ganacia

const ganacia4 = valor2 + ganacia3 //este es el precio para la veta con ganacia


/* -----------------------------------------------------------*/

//cuanto me gane

const ganacia5 = ganacia1 * ganacia4 

const ganaciatotal = ganacia5 - valorRest.number4
