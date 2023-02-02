const next = document.getElementById('next');
const prev = document.getElementById('prev');
const process = document.getElementById('process');
// console.log(process)
const divs = document.querySelectorAll('.div');
let step=1;
next.addEventListener('click', ()=>{
step++;
if(step>divs.length){
    step=divs.length;
}
// console.log(step)
updatePage();
})

prev.addEventListener('click',()=>{
    step--;
    if(step<1){
        step=1;
    }
// console.log(step)
updatePage();

})
function updatePage(){
    divs.forEach((div,index)=>{
        if(index<step){
            div.classList.add('active');
        }
        else{
            div.classList.remove('active');

        }
    })
const actives = document.querySelectorAll('.active');
process.style.width= ''+(actives.length-1)/(divs.length)*100+'%';
    if(step===divs.length){
        next.disabled=true;
    }
    else if(step===1){
        prev.disabled=true;
    }
    else{
        prev.disabled=false;
        next.disabled=false;

    }
}