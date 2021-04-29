const formCalcu = document.getElementById('formCalcu')
const inputs = document.querySelectorAll('#formCalcu input')

const expresiones = {
    venta: /\d+\.\d{4,8}$/,
    valor: /\d+\.\d{2}$/
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        console.log(e.target.valu2)
    })
});

formCalcu.addEventListener('submit', (e) => {
    e.preventDefault()
})