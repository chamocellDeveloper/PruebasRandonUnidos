// Destructuring de Arrays (asignación Básica)

const galicia = ["A Coruna", "Lugo", "Ourense", "Pontevedra"]
const [c, lu,ou] = galicia
console.log(c)
console.log(ou)
//console.log(p)

//Destructuring de arrays (asignación separacion de la declaración)

let cc, ba 

[cc, ba="merida"] = ["Cáceres", "Badajoz"]
console.log(cc)
console.log(ba)

// Destructuring de objetos (asignación básica)

const varios = {p:11, q:true, r:"hola"}
const {p,r} = varios
console.log(p)
//console.log(q)
console.log(r)

// Destructuring de objeto(asignando a nuevos nombres de variables)
const objeto = { nombre: "Ada", apellido: "Lovecode"}
// Tomamos del objeto la propiedad llamanda Nombre y la asignamos a la variable n
const {nombre: n, apellido: a} = objeto
console.log(n + " "+ a)
//Tomamos del objeto el valor de nombre y del apellido
const {nombre,apellido} = objeto
console.log(nombre+" "+apellido)
//Destructuring de objetos (asignación sin declaración)
let x, y
({x, y} = {x: 1, y: 2})
console.log(x)
console.log(y)