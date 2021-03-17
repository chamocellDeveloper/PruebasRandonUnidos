window.addEventListener("load",function() {

class Telefono {
    constructor(marca){
       this._marca = marca 
    }
    get marca(){
        return this._marca
    }
    set marca (mar){
        this._marca = mar
    }
}
let miTelefono = new Telefono ("Google")

miTelefono.marca = "iPhone"
mensaje.innerHTML = "Mi Telefono es un "+miTelefono.marca


},true)