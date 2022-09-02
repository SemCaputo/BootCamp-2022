// let count = 0;
// while (count < 10) {
//     console.log(count)
//     count++;
// }

// let count2 = 0;
// while (count2 < 10) {
//     count2++
//     console.log(count2);
// }

// const SECRET = "BabyHippo";

// let guess = prompt ("Enter the Secret Code");
// while (guess !== SECRET) {
//     guess = prompt ("Enter the Secret Code");
// }
// console.log('congratulations')

let input = prompt ('say something!')
while (true) {
    input = prompt(input);
    if (input.toLocaleLowerCase () === 'stop') break;

}
console.log('you win')


// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }