const formCompra = document.getElementById('formCompra')
const inputsC = document.querySelectorAll('#formCompra input')
const compras1 = document.getElementById('compra2')

const expresiones2 = {
    presioC: /\d+[^\,]\.\d{2}$/,
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
const Relacionado = 13800

const porsentaje = 0.0065

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
          setTimeout(() => {
            document.querySelector(`#group__${campo} .compra__group-error`).classList.remove('compra__group-error-active')
            document.getElementById(`group__${campo}`).classList.remove('formulario__grupo-incorrecto')
            formCompra.reset()
          }, 50000);
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
        CompraValida()
        Disas()
        document.getElementById('formulario__mensajeCompra-exito').classList.add('formulario__mensajeCompra-exito-activo')

        setTimeout(() => {
            document.getElementById('formulario__mensajeCompra-exito').classList.remove('formulario__mensajeCompra-exito-activo')
        },5000)
    }else {
        document.getElementById('formulario__mensajeCompra').classList.add('formulario__mensajeCompra-activo')

        setTimeout(() => {
            document.getElementById('formulario__mensajeCompra').classList.remove('formulario__mensajeCompra-activo')
            formCompra.reset()
        },5000)
    }
})

const Disas = () => {
    if(campoC.presioC == true){

        document.getElementById('divisa').classList.add('contenedor-active')
        document.getElementById('hr').classList.add('hr-active')
    }
}

const CompraValida = () => {

    // operacion cuando compras BTC con pesos 
    const number4 = compra.presioC     //compra de cripto precio en fias
    const number5 = compra.valorC   //precio del mercado al comprar
    const number6 = 0.0050

    //Variable de convercion de estring a number
    convertidor = parseInt(number5)
    convertidorTwo = parseInt(number4)
    console.log(convertidorTwo)
    
    const res4 = number4 / number5 // monto comprado/posentage
    const res5 = res4 * number6  //comicsion
    const res6 = res4 - res5     // cuanto te dan
    const res7 = res5 * number5
    const res15 = convertidor + Relacionado

    

    valorRest ["res4"]    = res4
    valorRest ["number4"] = number4
    valorRest ["total"]   = res6
   

    

    //console.log(res6)
    //fin de esta operacion pero se puede unir con la sigiente directamente al poner el monto 

    const DatosCompra1 = [
     {precioCompra: number4},
     {mercado     : number5},
     {cominion    :'0.050%'},
     {compraste   : res4   },
     {cobroComi   : res5   },
     {total       : res6   },
     {comicionP   : res7   },
     {minVenta    : res15  },
    ]
    
   

    /*DatosCompra1.forEach(item => {
      const li = document.createElement('li')
      li.textContent = `${item.precioCompra}`
      compra2.appendChild(li)
    })*/

    document.getElementById('descri7').innerHTML = `Cantidad Comprada ${DatosCompra1[0].precioCompra}</span>`
    document.getElementById('descri8').innerHTML = `Valor de Mercado: <span>${DatosCompra1[1].mercado}</span>`
    document.getElementById('descri9').innerHTML = `Comicion del <span>0.50%</span>` 
    document.getElementById('descri10').innerHTML = `Total de la Comprado: <span>${DatosCompra1[3].compraste.toFixed(8)}</span>`
    document.getElementById('descri11').innerHTML = `Total de la comicion: <span>${DatosCompra1[4].cobroComi.toFixed(8)}</span>`
    document.getElementById('descri12').innerHTML = `Total de la comicion: <span>${DatosCompra1[6].comicionP.toFixed(2)}</span>`  
    document.getElementById('descri13').innerHTML = `Total a recibir <span>${DatosCompra1[5].total.toFixed(8)}</span>`
    document.getElementById('descri14').innerHTML = `Valor Minimo de venta <span>${DatosCompra1[7].minVenta.toFixed(2)}</span>`
    
    validacion2()
}



    const validacion2 = () => {

        

        // operacion de ganacia 
        const number7 =valorRest.total // Este es la cantidad real que yo puedo vender  
        const number8 = porsentaje
        const number9 = valorRest.res4  // Aqui colocamos el monto que compramos pero le descontaron la comicion
        
        const number10 =  number9 - number8 //diferencia entre compara y lo que dan
        const number11 =  number10 + number8 // monto para estar en el monto que tenia que tener
        
        
        // si yo vendo


        
        const venta = number11
        console.log(number11)
        
        const porcetaje = 0.0065
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
        //console.log(ganaciatotal)

        campoC ['presioC'] = false
        campoC ['valorC'] = false
        campoC ['deceo'] = false
    }



