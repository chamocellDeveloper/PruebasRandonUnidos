// Math.trunc(): devuelve la parte entera de un numero,eliminando el punto y los digitos a su derecha
//Equivale a Math.floor() si el argumento es positivo, si no a Math.ceil()
console.log(Math.trunc(12.3456))

//Math.sign(): devuelve el signoi de un número, pudiendo ser el valor devueleto 
//1(positivo), -1 (negativo), 0(cero positivo), -0 (cero negativo), NaN (valor NaN)
console.log(Math.sign(-7))
console.log(Math.sign(7))
console.log(Math.sign(0))
console.log(Math.sign(-0))
console.log(Math.sign(NaN))
console.log(Math.sign("otra cosa"))

//Math.cbrt(): devuelve la raíz cádrada de un numero pasado por párametro
console.log(Math.cbrt(64))