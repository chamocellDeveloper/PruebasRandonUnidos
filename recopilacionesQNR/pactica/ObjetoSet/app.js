let provincias = new Set(["Palencia", "Burgos", "Soria", "Burgos","Palencia" ])
let numeros = new Set([1,2, 5,7,2,5,1,1,5,2,7,1])
let mezcla = new Set([2,"ET","mi casa"])

// Propiedades
// size: tamaño del Set

console.log(`El número de provincias No repetidas es + ${provincias.size}`)
console.log(`El número de valores numéricos No repetidas es + ${numeros.size}`)

//MEtodos
//has: comprueba si el Set contine un elemento

console.log(`¿Está el elemento 2? ${numeros.has(2)}`)
console.log(`¿Está el elemento 4? ${numeros.has(4)}`)

//delete: borrar un elemento del set
numeros.delete(2)
console.log(`¿Está el elemento 2 ? ${numeros.has(2)}`)

//add: añadir un elemento al set
provincias.add("Segovia") //Nueva
provincias.add("Burgos")  //repetidas
console.log(`¿ Numero de provincias no repetidas es: ${provincias.size}`)
console.log(`El número de elementos de mezcla No Repetidos es: ${mezcla.size}`)

let codigos = {34: "Spain", 33:"France"}
mezcla.add(codigos)
mezcla.add({34: "Spain", 33:"France"})
console.log(`El número de elementos de mezcla No Repetidos es: ${mezcla.size}`)

//clear: elemina todos los elementos de un objeto Set
mezcla.clear()
console.log(`el Número de elementos de mezcla No Repetidos es: ${mezcla.size}`)