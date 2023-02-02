const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebt')
jokeBtn.addEventListener('click', genJoke)
genJoke();
async function genJoke(){
    const config = {
        headers : {
            Accept : 'Application/json',
        },
    }
 const res =await  fetch('https://icanhazdadjoke.com', config)
   const data = await res.json();
        jokeEl.innerHTML=data.joke

}

// function genJoke(){
//     const config = {
//         headers : {
//             Accept : 'Application/json',
//         },
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data)=> {
//         jokeEl.innerHTML=data.joke
//     })
// }