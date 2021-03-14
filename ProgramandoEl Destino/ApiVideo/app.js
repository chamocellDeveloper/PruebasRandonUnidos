const video = document.querySelector('video')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const full = document.getElementById('full')
const volume = document.getElementById('volume')
const time = document.getElementById('time')
const pip = document.getElementById('pip')


play.addEventListener('click', (e) => {
    video.play()
})

pause.addEventListener('click', (e) => {
    video.pause()
})

full.addEventListener('click', (e) => {
    video.requestFullscreen()
})

volume.addEventListener('change', (e) => {
    video.volume = volume.value /100
})

video.addEventListener('timeupdate', (e) => {
    time.value = Math.floor(video.currentTime * 100 / video.duration)
})

time.addEventListener('input', (e) => {
    video.currentTime = time.value * video.duration / 100
})

pip.addEventListener('click', (e) => {
    video.requestPictureInPicture()
    video.style.display = "none"
})