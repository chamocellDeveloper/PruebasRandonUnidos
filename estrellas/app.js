const btn        = document.querySelector('button')
const post       = document.querySelector('.post')
const widget     = document.querySelector('.star-widget')
const editBtn    = document.querySelector('.edit')
const respuest   = document.getElementById('respuesta')
const textarea   = document.querySelector('.textarea')
const textareaid = document.querySelector('.textareaid')


/*btn.onclick = () => {
    widget.style.display = 'none'
    post.style.display = 'block'

    editBtn.onclick = () => {
        widget.style.display = 'block'
        post.style.display = 'none'
    }
    return false
}*/

btn.addEventListener('click', () => {
    widget.style.display = 'none'
    post.style.display = 'block'

})