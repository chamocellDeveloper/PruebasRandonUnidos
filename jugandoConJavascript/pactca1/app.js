let primos = [2,3,5,7];
let primo = 5;
console.log(primos)
console.log(primos.length)

let indice = primos.indexOf(primo)

if(indice >= 0){
    primos.splice(indice, 1)
}

console.log(primos)
console.log(primos.length)
