const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('You  Clicked Me!')
    console.log('I Hope It Worked!!')
}

// btn.onclick = function () {
//     alert('AAAHHHHHHH')
// }

function scream() {
    alert('AAAAHHHHHHHHH');
}
btn.onmouseenter = scream;



// function scream() {
//     console.log("AAAAAHHHHH");
//     console.log("STOP TOUCHING ME!")
// }

// btn.onmouseenter = scream;


// document.querySelector('h1').onclick = () => {
//     alert('You Clicked The H1');
// }

const button = document.querySelector('h1');
button.addEventListener('click', () => {
    alert('You Touched Me!!!')
})

const btn3 = document.querySelector('#v3');
btn3.addEventListener('dblclick', () => {
    alert('YOU PUSHED THE 3RD BUTTON')
})


function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist, { once: true })
tasButton.addEventListener('click', shout)


