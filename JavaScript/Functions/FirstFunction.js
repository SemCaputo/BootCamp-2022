// function grumpus() {
//     console.log('you again...');
//     console.log('for the last time...');
//     console.log('LEAVE ME ALONE!!!...');
// }

// grumpus()

// function singSong() {
//     console.log('DO');
//     console.log('RE');
//     console.log('MI');
// }
// singSong()
// singSong()
// singSong()

// function rant(message) {
//     //     console.log(`${message}`.toUpperCase());
//     //     console.log(`${message}`.toUpperCase());
//     //     console.log(`${message}`.toUpperCase());
//     // }

//     function greet(FirstName) {
//         // console.log(`firstName is: ${FirstName}`)
//         // console.log('Hi!')

//         console.log(`Hi, ${FirstName}!`);

//     }


//     function greet(firstName, lastName) {
//         console.log(`Hi, ${firstName} ${lastName[0]}.`);
//     }

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}