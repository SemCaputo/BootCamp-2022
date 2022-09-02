// const m4th = {
//     multiply: function (x, y) {
//         return x * y;
//     },
//     divide: function (x, y) {
//         return x / y;
//     },
//     square: function (x) {
//         return x * x;
//     }
// };

// const m4th = {
//     multiply(x, y) {
//         return x * y;
//     },
//     divide(x, y) {
//         return x / y;
//     },
//     square(x) {
//         return x * x;
//     }
// };

// const square = {
//     area(side) {
//         return side ** 2;
//     },
//     perimeter(side) {
//         return side * 4;
//     }
// }

// const square = {
//     area: function (x) {
//         return x * x;
//     },
//     perimeter: function (x) {
//         return 4 * x;
//     }
// } STUPID


// const cat = {
//     name: 'Blue',
//     color: 'grey',
//     breed: 'Scottish',
//     meow() {
//         console.log('THIS IS:', this)
//         console.log(`${this.name} says MEOW`);
//     }
// }
// // THIS will refer to the object on the left of meow, 
// // in this case the object CAT

// const meow2 = cat.meow;
// // THIS will refer to the object on the left of meow2, 
// // in this case the object WINDOW

// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg() {
//         console.log(`${this.eggCount++} EGG`);
//     }
//     return('EGG');

// }

let hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return ('EGG');
    }
}