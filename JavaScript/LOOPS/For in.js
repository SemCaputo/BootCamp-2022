const testScores = {
    Charlie: 80,
    Peter:86,
    Mark:78,
    John:90,
    Stephen: 91
}

// for (let person in testScores){
//     console.log(person);
// }

// for (let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`);
// }

// for (let person in testScores){
//     console.log(`${testScores[person]}`);
// }

let total = 0;
let scores = Object.values(testScores);
for(let score of scores){
    total+=score;
}
   
console.log(total/scores.length)