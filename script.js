const btnEl = document.querySelector('.btn');
const removEl = document.querySelector('#remove');
const iconeEl = document.querySelector('#icone');
const videoEl = document.querySelector('video');

btnEl.addEventListener('click', () =>{
    removEl.classList.remove('active');
})

iconeEl.addEventListener('click', () =>{
    removEl.classList.toggle('active');
    videoEl.pause();
    videoEl.currentTime = 0;
})