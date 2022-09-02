// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// } Old way of writing Default Params
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

// function greet(msg, person) {
//     console.log(`${msg} ${person} !`)
// }
// function greet(msg = "HEY THERE", person) {
//     console.log(`${msg} ${person} !`)
// } = Joe undefined! Javascript thinks the first 
// information added is for msg!!
function greet(person, msg = "HEY THERE") {
    console.log(`${msg} ${person} !`)
}