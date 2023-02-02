const textarea = document.getElementById('textarea')
const tagsEl = document.getElementById('tags')
textarea.focus()
textarea.addEventListener('keyup',(e)=>{
createTags(e.target.value)
if(e.key==='Enter'){
    setTimeout(() => {
        e.target.value=''
    }, 10);
    randomSelect()
}


})
function createTags(input){
const tags= input.split(',').filter(tag => tag.trim() 
!== '').map(tag => tag.trim())
tagsEl.innerHTML=''
tags.forEach(tag => {
    const newTag = document.createElement('span')
    newTag.classList.add('tag')
    newTag.innerText= tag
    tagsEl.appendChild(newTag);
});
}
function randomSelect(){
    const times = 30;
    const interval = setInterval(()=>{
         const randTag = pickRandomTag()
         highLightTag(randTag)
         setTimeout(()=>{
            unHighLightTag(randTag)
    
        },100)
    },100);
  setTimeout(()=>{
    clearInterval(interval)
    setTimeout(()=>{
        const randomTag = pickRandomTag()
        highLightTag(randomTag)
    },100)
  }, 100*times);
}
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return  tags[Math.floor(Math.random()* tags.length)]
}
function highLightTag(tag){
    tag.classList.add('selected')
}
function unHighLightTag(tag){
    tag.classList.remove('selected')
}