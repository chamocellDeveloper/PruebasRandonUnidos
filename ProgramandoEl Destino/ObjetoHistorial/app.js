const atras = document.getElementById('atras')
const go    = document.getElementById('go')
const adelante = document.getElementById('adelante')

const home      = document.getElementById('home')
const productos = document.getElementById('productos')
const contacto  = document.getElementById('contacto')
const contacto2 = document.getElementById('contacto2')


atras.addEventListener('click', e => {
    history.back()
})

go.addEventListener('click', e => {
    const numero = parseInt(prompt('ingrese un numero'))
    history.go(numero)
})

adelante.addEventListener('click', e => {
    history.forward()
})

home.addEventListener('click', e => {
    history.pushState({
        page: 'Home'
    }, 'Home', '/home')
    
})

productos.addEventListener('click', e => {
    history.pushState({
        page: 'Productos',
        productos: [
            {nombre: 'A', precio: 100},
            {nombre: 'B', precio: 200}
        ]
    }, 'Productos', '/productos')
})

contacto.addEventListener('click', e => {
    history.pushState({
        page: 'Contacto'
    }, 'Contacto', '/contacto')
})

contacto2.addEventListener('click', e => {
    history.replaceState({
        page: 'Contacto',
        usuario: {
            nombre: 'Nathanerio'
        }
    }, 'Contacto', '/contacto2')
})

window.addEventListener('popstate', e => {
    console.log('POP STATE: ', history.state )
})