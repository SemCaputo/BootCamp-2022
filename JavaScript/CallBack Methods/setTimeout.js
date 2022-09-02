// console.log('HELLO!!!')
// setTimeout(() => {
//     console.log('...are you still there???')
// }, 3000)



const id = setInterval(() => {
    console.log(Math.random())
}, 1000);
// clearInterval(id) TO STOP setInterval

setTimeout(() => {
    console.log(clearInterval(id))
}, 5000)