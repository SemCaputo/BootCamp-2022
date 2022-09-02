const password = prompt("Enter Password");

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid Password")
//     } else {
//         console.log("password cannot contain spaces!!!")
//     }
// }
// else {
//     console.log("Password Too Short or contains spaces")
// }

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password")
    }
}
if (password.indexOf(' ') > -1) {
    console.log("cannot contain spaces")
}
if (password.length <= 6) {
    console.log("password too short")
}