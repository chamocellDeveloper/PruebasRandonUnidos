function getMinutesAndSeconds(time) {
    let minutes = Math.floor(time / 60)
    let segunds = Math.floor(time % 60)

    return `${minutes}: ${segunds}`

    if(minutes < 10 ) minutes = `0s{minutes}`

    if(seconds < 10 ) minutes = `0s{seconds}`
}


const video = document.querySelector('video')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const full = document.getElementById('full')
const volume = document.getElementById('volume')
const time = document.getElementById('time')
const pip = document.getElementById('pip')
const mute = document.getElementById('mute')

const current = document.getElementById('current')
const duration = document.getElementById('duration')

duration.textContent = getMinutesAndSeconds(video.duration)
console.log(video.duration)

video.addEventListener('loadedmetadata', e => {
    duration.textContent = getMinutesAndSeconds(video.duration)
    console.log(video.duration)
})

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

    current.textContent = getMinutesAndSeconds(video.currentTime)
})

time.addEventListener('input', (e) => {
    video.currentTime = time.value * video.duration / 100
})

pip.addEventListener('click', (e) => {
    video.requestPictureInPicture()
    video.style.display = "none"
})

video.addEventListener('leavepictureinpicture', e => {
    video.style.display = 'block'
})

mute.addEventListener('click', e => {
    video.muted = !video.muted
    mute.textContent = video.muted ? 'unmute' : 'Mute'
})