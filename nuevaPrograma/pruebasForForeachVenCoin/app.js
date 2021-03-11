console.log('conectado')

const formVenta = document.getElementById('formVenta')
const inputs = document.querySelectorAll('#formVenta input');

const expresiones = {
    venta: /\d+\.\d{4,8}$/,
    valor: /\d+\.\d{2}$/
}

const campos = {
    venta: false,
    valor: false
}

const varias = []

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "venta":
         validarCampo(expresiones.venta, e.target, 'venta')
        const venta = e.target.value
        varias["venta"] = venta
        break
        case "valor":
        validarCampo(expresiones.valor, e.target, 'valor')
        const valor = e.target.value
        varias["valor"] = valor
        break
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} .veta__group-error`).classList.remove('veta__group-error-active')
        campos[campo] = true
      }else {
          document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
          document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
          document.querySelector(`#grupo__${campo} .veta__group-error`).classList.add('veta__group-error-active')
          campos[campo] = false
      } 
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formVenta.addEventListener('submit', (e) => {
    e.preventDefault() 
    
    if(campos.venta && campos.valor){
        formVenta.reset()
        datosValidados()
        

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensajeVenta-exito-activo')

        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensajeVenta-exito-activo')
        },5000)
    }else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensajeVenta-activo')

        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensajeVenta-activo')
        },5000)
    }
})

const datosValidados = () =>{

    // operacion cuando cambias bitcoin por pesos 

const number1 = varias.venta 
const number2 = varias.valor
const number3 = 0.00650


const res1 = number1 * number2 //monto que vendistes *document.querySelectorAll('#formVenta input')

const res2 = res1 * number3   // comicion de la venta en Pesos

const res3 = res1 -res2      // cuanto te llego pesos

   
    document.getElementById('descri1').innerHTML = `Vendistes:<span>${number1}</span>`
    document.getElementById('descri2').innerHTML = `Valor de Mercado: <span>${number2}</span>`
    document.getElementById('descri3').innerHTML = `Comicion del <span>0.65%</span>` 
    document.getElementById('descri4').innerHTML = `Total de la venta: <span>${res1.toFixed(2)}</span>`
    document.getElementById('descri5').innerHTML = `Total de la comicion: <span>${res2.toFixed(2)}</span>`
    document.getElementById('descri6').innerHTML = `Total a recibir <span>${res3.toFixed(2)}</span>`

    campos['venta']= false
    campos['valor']= false
    
}


