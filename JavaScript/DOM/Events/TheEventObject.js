// document.querySelector('button').addEventListener('click', function (evt) {
//     console.log(evt)
// })

// const input = document.querySelector('input')
// input.addEventListener('keydown', function (e) {
//     console.log(e.key)
//     console.log(e.code)
// })
// CODE for the position(location) of the character on the keyboard
// KEY for the actual character


// input.addEventListener('keyup', function () {
//     console.log('KEYUP')
// })
window.addEventListener('keydown', function (p) {
    switch (p.code) {
        case 'ArrowUp':
            console.log('UP');
            break;
        case 'ArrowDown':
            console.log('DOWN');
            break;
        case 'ArrowLeft':
            console.log('LEFT');
            break;
        case 'ArrowRight':
            console.log('RIGHT');
            break;
        default:
            console.log('IGNORED!!')
    }
})