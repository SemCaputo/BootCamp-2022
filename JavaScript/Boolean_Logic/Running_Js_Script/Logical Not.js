// let firstName = prompt("Enter First Name");

// if (!firstName) {
//     firstName = prompt("Try Again")
// }

const age = prompt("Enter Age")

if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("Not a baby or a senior")
}