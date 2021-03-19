let precios = [100,250,500]

for (let valor of precios) { //Si el valor no cambia podemos usar const
    console.log(`Precio sin IVA: ${valor}`)
    valor *= 1.21
    console.log(`Precio con IVA: ${valor}`)
}

// Sobre una cadena
let cadena = "Hola, caracola"
for (let letra of cadena){
    console.log(letra)
}

//Sobre un map
let matriculas = new Map([["ZA","Zamora"], ["SA", "Salamanca"], ["VA","valladolid"]])
for (let matricula of matriculas){
    console.log(matricula)
}

for (let [matricula, provincia] of matriculas){
    console.log(matricula+ " "+provincia)
}

//Solo un set
let tiradasDado = new Set([1,6,2,1,6,6,3,3])

for (let tirada of tiradasDado) {
    console.log(tirada)
}