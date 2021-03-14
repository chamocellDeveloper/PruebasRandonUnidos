/*const Calculadora =*/ (function calculadora () {

    function init() {
        console.log('Init Calculadora')
    }
    
    function sumar (a, b) {
        return a + b
    }
    function restar (a, b) {
        return a - b
    }
    function multiplicar (a, b) {
        return a * b
    }
    function dividir (a, b) {
        return a / b
    }
    init()

    /*return {
        sumar:sumar,
        restar: restar,
        multiplicar: multiplicar,
        dividir: dividir
    }*/

    window.Calculadora = {
        sumar:sumar,
        restar: restar,
        multiplicar: multiplicar,
        dividir: dividir
    }
}())
