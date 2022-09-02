let maximum = parseInt(prompt('Enter Maximum Number:'));
while (!maximum){
    maximum = parseInt(prompt('Enter a Valid Number!'));
}




const targetNum = Math.floor(Math.random()*maximum)+1;
console.log(targetNum)

let guess = parseInt(prompt('Enter Your First Guess'));
let attempts = 1;


while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too High! Guess again:');
    } else {
          guess = prompt('Too Low! Guess again:');
    }
}
if (guess === 'q') { 
    console.log('Ok, BYE!!')
}else {
    console.log('Congratulations!!!')
console.log(`You Got It!! it took you ${attempts} guesses!`)
}