const calculadora = document.getElementById('calculadora')
const inputCalculadora = document.querySelectorAll('#calculadora input')

const expreCalcula = {
    valorA:/\d+\.\d{2}$/
}

const a = []
const b = []

const validarCal = (e) => {
    //console.log(e.target.name)
    switch(e.target.name){
        case 'valor1':
         if(expreCalcula.valorA.test(e.target.value)){
            document.querySelector('#grupo__calculadora .message__error').classList.remove('message__error-active')
            a ['a'] = e.target.value
         }else {
             document.querySelector('#grupo__calculadora .message__error').classList.add('message__error-active')
         }
        break
        case 'valor2':
            if(expreCalcula.valorA.test(e.target.value)){
                document.querySelector('#grupo__calculadora2 .message__error2').classList.remove('message__error2-active')
                b ['b'] = (e.target.value)
             }else {
                 document.querySelector('#grupo__calculadora2 .message__error2').classList.add('message__error2-active')
             }
        
        break
    }

}




inputCalculadora.forEach((input) => {
    input.addEventListener('keyup', validarCal)
    input.addEventListener('blur', validarCal)
    
})

calculadora.addEventListener('submit', (e) => {
    e.preventDefault()

    const r1 = parseInt(a.a)
    const r2 = parseInt(b.b)
    respuesta = (r1 - r2)
    document.getElementById('resultado').innerHTML = `Ganacia = ${respuesta.toFixed(2)}` 
    calculadora.reset()

})