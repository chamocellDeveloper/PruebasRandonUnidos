const cadena = "¡Hola, carocala!"

// StartsWith(cadena_busqueda[, posicion])devuelve true o false si la cadena comienza por el primer argumento indicado a partir del del segundo argumento (opcional)

console.log(cadena.startsWith("¡Hol"))
console.log(cadena.startsWith("car",7))

// endWith(cadena_busqueda[, posicion])devuelve true o false si la cadena acaba por el primer argumento indicado a partir del del segundo argumento (opcional)


//includes(cadena_busqueda): devuelve true o false si la cadena contiene el texto pasado  como argumento.

console.log(cadena.includes("carocala"))
console.log(cadena.includes("Adios"))

//repeat(numero): devuelve una cadena repatida tantas veces como se indique en el número pasado como el argumento
console.log(cadena.repeat(5))