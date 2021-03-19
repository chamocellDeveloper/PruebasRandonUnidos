
//Number.isIntege(numero)devuelve true si es entero (positivo o negativo) y false en caso contrario
console.log(`¿1.5 es entero? ${Number.isInteger(1.5)}`)

//Number.isNaN(numero): comprueba si un valor contienen NaN
console.log(`NaN ${Number.isNaN("NaN")}`)
console.log(`undefined ${Number.isNaN(undefined)}`)
console.log(`pepe ${Number.isNaN("pepe")}`)
console.log(`{} ${Number.isNaN({})}`)
console.log(`NaN ${Number.isNaN(NaN)}`)
console.log(`13 ${Number.isNaN(13)}`)

console.log(`NaN ${isNaN("NaN")}`)
console.log(`undefined ${isNaN(undefined)}`)
console.log(`pepe ${isNaN("pepe")}`)
console.log(`{} ${isNaN({})}`)
console.log(`NaN ${isNaN(NaN)}`)
console.log(`13 ${isNaN(13)}`)

// Number.isSafefeInteger(numero): devuelve true si el número se encuentra deltro del rango
// de 53 bits que determina que no hay pérdida de precisión tambien se definan las constantes
//Number.MAX_SAFE_INTEGER y Number.MIN_SAFE_INTEGER

console.log(`¿Es seguro el número 9999999? ${Number.isSafeInteger(9999999)}`)
console.log(`¿Es seguro el número 99999999999999999? ${Number.isSafeInteger(99999999999999999)}`)

console.log("-----")
console.log(`El mayor entero seguro es  ${Number.MAX_SAFE_INTEGER}`)
console.log(`El menor entero seguro es  ${Number.MIN_SAFE_INTEGER}`)

//Funcion igual que las funciones globales
//Number.isFinite(numero): comprueba si un número es infinito
//Number.parseInt(numero): parsea un numero a entero
//Number.parseFloat(numero): parsea un número a float
