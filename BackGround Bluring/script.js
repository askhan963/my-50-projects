const bg = document.querySelector('.bg');
const text = document.querySelector('.load-text');
let num=0;
let int =  setInterval(blur, 30);
function blur(){
num++;
if(num >= 99){
    clearInterval(int);
    }
text.innerText= `${num}%`;
text.style.opacity=`${100-num}%`;
bg.style.filter=`blur(${30-(num/3)}px)`;

}