// const s = function (x) {
//     return x * x
// }
// const s1 = x => {
//     return x * x;
// }
const s2 = x => x ** 2

// const m = function (x, y) {
//     return x * y;
// }
// const m1 = (x, y) => {
//     return x * y;
// }
const m2 = (x, y) => x * y;


// const add = function (x, y) {
//     return x + y;
// }
// const add1 = (x, y) => (
//     return x + y;
// )
const add2 = (x, y) => x + y
// on 1 line not round brackets(for shorter functions)

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)
// IMPLICIT: not curly brackets but ROUND, only single expression(only 1 value)




// const greet = (name) => {
//     return (`Hey ${name}!`);
// }
// // exercise48
