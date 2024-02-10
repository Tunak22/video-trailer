const btnEl = document.querySelector('.btn')
const trailerContainerEl = document.querySelector('.trailer-container')
const cancelEl = document.querySelector('.closeBtn')
const videoEl = document.querySelector('video')

btnEl.addEventListener('click', ()=>{
    trailerContainerEl.classList.remove('active')
    videoEl.pause()
    videoEl.currentTime = '0'
})
cancelEl.addEventListener('click', ()=>{
    trailerContainerEl.classList.add('active')
})