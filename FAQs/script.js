const toggles = document.querySelectorAll('.faq-btn')

toggles.forEach((toggle)=>{
    toggle.addEventListener('click',() =>{
toggle.parentNode.classList.toggle('active');
    })
})
