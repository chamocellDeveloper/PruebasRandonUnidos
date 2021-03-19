//findIndex: devuelve el ínicio de un array del primer elemento que cumple con una condicion 
// Es similar a indexOf, pero hay que pasar como argumento una funcion de flecha nos permite detectar el NaN
//SINTAXIS: let position = miArray.findIndex(x => condicion_x)
const array = [1,5,NaN ,7]
console.log(array.findIndex(x => Number.isNaN(x)))
console.log(array.findIndex(x => x > 5))


//find: similar al anterior pero en lugar de devolver la posición,devuelve el valor del elemento
//hay que pasarle una función de flecha 
console.log(array.find(x => Number.isNaN(x)))
console.log(array.find(x => x > 5))

// fill: crea un array fr un tamaño determinado e inicializa su contenido
//SINTAXIS: const array = new Array(tamaño).fill(valor, inicio?,fin)

const array2 = new Array(5).fill('x')
console.log(array2)
const array3 = new Array('a','b','c','d','e','f','g')
array3.fill(null,3,5)
console.log(array3)

//copyWithin: copia los elementos que estan entre los índices  de inicio y fin a partir de una posición
//SINTAXIS: miArray.copyWithin(posicion,inicio, fin = this.length)
const array4 = ['a','b','c','d','e','f','g']
array4.copyWithin(2, 5, 7)
console.log(array4)


// para recorrer un array podemos utilizar for...of

//Iteradores
//object.keys:devuelve un iterador con los elementos del array en orden
//En la especificacion ES5, si el argumneto no es un objeto  primitvo da error
//En ES6 se transforma a objeto
//Object.values: devuelve un iterador con los valores del array en orden
//entries: devuelve un iterador con lod pares del array en orden:

console.log("ITERADORES")
const array5 = ['a','b','c','d','e','f','g']
console.log(Object.keys(array5))
console.log(Object.values(array5))
console.log(Object.entries(array5))

//Métodos estaticos
console.log("METODOS ESTATICOS")
//Array.from(): permite convertir a arrays los elementos iterables y pseudoArrays
//Podemos creaer arrays apartir de Maps, Sets,Strings,iterablrs obteniendos a partir de arra.keys(,ect.
const pseudoarray = {length: 2, 0: 'x', 1: 'y'}
/*for (const elemento of pseudoarray){
    console.log(elemento)
} */
const arrayNuevo = Array.from(pseudoarray)

for(const elemento2 of arrayNuevo){
    console.log(elemento2)
}

//Array.of(): crea un array con aquellos elementos que recibe como argumento
const array6 = Array.of('Manzana', 'Platano', 'Pera')
console.log(array6)

//Agujeros en el arrays: elementos que no existen
const array7 = ['Manzana', 'Platano',,,, 'Pera']
console.log(array7[3])