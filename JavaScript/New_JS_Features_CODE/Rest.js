function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}
// name parameter first and collect the rest of the parameters

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold Medal Goes to: ${gold}`)
    console.log(`Gold Silver Goes to: ${silver}`)
    console.log(`Thanks to Everyone else: ${everyoneElse}`)
}
// call the first 2 and collect the REST in everyoneElse

