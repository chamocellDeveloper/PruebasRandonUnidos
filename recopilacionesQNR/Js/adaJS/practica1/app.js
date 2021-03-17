console.log(Math.max(3,1,7))

let array = [3,1,7]
console.log(Math.max(array)) //Devuelve NaN
console.log(Math.max(...array)) // Devuelve 7

let array2 = [ 2,6,8]
console.log(Math.max(...array, ...array2, 5))

let arrayResultante = [...array, ...array2]
console.log(arrayResultante)

//Cadenas 
let saludo = "Hola, cocacola"
console.log([...saludo])

//Funciones 
const suma = (a,b,c) => {
    return a+b+c
} 
 const valores = [1,3,5]
 console.log(suma(...valores))

 //Objetos 
 let persona1 = { nombre: "Eduardo", nacimiento: 1968}
 let persona2 = { nombre2: "Bjork", nacimiento2: 2008}

 let cloneEduardo = {...persona1, ...persona2}

 console.log(cloneEduardo)