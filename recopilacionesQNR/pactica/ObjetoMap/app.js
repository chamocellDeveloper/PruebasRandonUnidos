let codigosPostales = new Map([[49, "Zamora"], [37, "salamanca"], [47, "ValladoLid"]])
let matriculas = new Map([["ZA", "Zamora"], ["SA","salamanca"], ["VA","Valladolid"]])

// Propiedades 
//size: tamaño del Map

console.log(codigosPostales.size)

// Métodos
// get evuelve el valor asociado a una clave (o undefined si no hay ninguna)

console.log(codigosPostales.get(49))

// set: establece una valor asociado a una clave

codigosPostales.set(47, "Pucela")
console.log(codigosPostales.get(47))

//has: comprueba si el mapa contiene un elemento indicado por su clave o no
console.log(matriculas.has("ZA"))

//delete: elimina un elemento indicado por su clave 
matriculas.delete("ZA")
console.log(matriculas.has("ZA"))

//clear: elimina todos los elementos de un objeto map
codigosPostales.clear();
console.log("Tamaño del códigos Postales: "+codigosPostales.size)

//Iteradores
//Keys: devuelve un iterador con las claves del mapa ordanadas
//values: devuelve una iterador
//entries: devuelve un iterador con los pares clave-valor del mapa ordenado
let itClaves = matriculas.keys()
let itValores = matriculas.values()
let itPares = matriculas.entries()

console.log(itClaves.next().value)
console.log(itClaves.next().value)
console.log(itClaves.next().value)
console.log(itClaves.next().value)