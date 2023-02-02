const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', animate);
animate();
function animate(){
const height =window.innerHeight/5*4;
boxes.forEach(box=>{
    const boxTop = box.getBoundingClientRect().top;
    if(boxTop < height){
        box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
})

}

