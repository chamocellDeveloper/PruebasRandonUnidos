
/*import {cadenaMayuscula} from "./modulo.js"
const saludos = cadenaMayuscula("¡Hola caracola")
console.log(saludos)

import {IVAGENERAL,IVAREDUCIDO,IVASUPERREDUCIDO} from "./modulo.js"

console.log(`Hay tres tipos de IVA:  ${IVAGENERAL} ${IVAREDUCIDO} ${IVASUPERREDUCIDO}`)*/

import * as todo from "./modulo.js"
const saludos = todo.cadenaMayuscula("¡Hola caracola")
console.log(saludos)
console.log(`Hay tres tipos de IVA:  ${todo.IVAGENERAL} ${todo.IVAREDUCIDO} ${todo.IVASUPERREDUCIDO}`)