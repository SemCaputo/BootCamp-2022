// console.log("Conditionals");
// if (1 + 1 === 2) {
//     console.log("Math is ok")
// }

let random = Math.random();

if (random < 0.5) {
    console.log("your number is less than 0.5!")
}
// if (random >= 0.5) {
//     console.log("your number is greater than 0.5!")
//     console.log(random)
// }
else {
    console.log("your number is greater than 0.5!")
}
console.log(random)

// const dayOfWeek = prompt('ENTER A DAY OF THE WEEK').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("I HATE MONDAYS")
// } else if (dayOfWeek === 'saturday') {
//     console.log("I LOVE SATURDAYS")
// } else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE GOOD!!")
// } else {
//     console.log("MEH!!")
// }

const age = prompt('ENTER AGE')

if (age < 5) {
    console.log("you are an infant, you get in for free")
} else if (age < 10) {
    console.log("you are a child, pay £10")
} else if (age < 65) {
    console.log("you are an adult, pay £20")
} else {
    console.log("you are a senior, pay £10")
}


