class telefono {
    constructor(marca, modelo){
        this.marca = marca
        this.modelo = modelo
    }
}

let miTelefono = new telefono ("Google", 'Pixel')
console.log(miTelefono.marca+" "+miTelefono.modelo)