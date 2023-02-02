const sounds = [ 'cricket', 'dog' ,'fast','retro','sweep']
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click',() =>{
        // stopSongs()
        document.getElementById(sound).play()
    })
document.getElementById('buttons').appendChild(btn)
});

function stopSongs(){
    sounds.forEach(sound => {
      const s=  document.getElementById(sound);
      s.pause();
      s.currentTime=0;
    })
}