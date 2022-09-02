// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     let sum = x + y;
//     return sum;
// }

// function multiply(num1, num2){
//     let sum = num1 * num2;
//     return sum
// } 

// function isShortsWeather(temperature) {
//     if (temperature >= 75) {
//         return true;
//     } return false;
// }


// function lastElement(arr) {
//     if (arr.length === 0) {
//         return null;
//     } else {
//         return arr[arr.length - 1];
//     }
// }

// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// function sumArray(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total = total + arr[i];
//     }
//     return total;
// }

const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function returnDay(number) {
    if (number < 1 || number > 7) {
        return null;
    }
    return (days[number])
}
