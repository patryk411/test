const video = document.querySelector('.main__video--film')
const img = document.querySelector('.main__video--video')
const btn = document.querySelector('.video-icon')

const handleShowVideo = () => {
    video.style.overflow = 'visible';
    img.style.overflow = 'hidden';
    img.style.zIndex  = '-10';
}

btn.addEventListener('click', () => {
    handleShowVideo();
})
