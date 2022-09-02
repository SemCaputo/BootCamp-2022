const input = document.querySelector('input');
const h1 = document.querySelector('h1')


// input.addEventListener('change', function () {
//     console.log('CHANGE!!')
// })
// when you leave input ONLY make a change(LEAVE) will console.log

// input.addEventListener('input', function (e) {
//     console.log('INPUT!!!')
//     console.log(e)
// })
// useful for COPY/PASTE or READERS

// input.addEventListener('input', function (e) {
//     h1.innerText = input.value
// })
// good for previews



input.addEventListener('input', function (e) {
    if (!this.value) {
        h1.innerText = ('Type Below:')
    } else {
        h1.innerText = (`Welcome ${input.value}`)
    }
})
// exercise 62

