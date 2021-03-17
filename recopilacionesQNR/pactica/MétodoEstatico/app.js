window.addEventListener("load",function(){
    class Rectangulo {
        constructor(x, y){
            this.x = x
            this.y = y
        }

        static area (a, b){
            return  a * b
        }
        static perimetro (a, b){
            return a + a + b + b 
        }
    }

    let rectangulo1 = new Rectangulo (2,3)
    //console.log(rectangulo1.area(2,3))
    //console.log(rectangulo1.perimetro(2,3))

    mensaje.innerHTML = Rectangulo.perimetro(2,3)

},true)