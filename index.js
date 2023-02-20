const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.
  process.exit();
}


async function pickHighNum() {
  let minNum = 1;
  let pickMaxNum = await ask(
    `\nPlease choose a number greater than ${minNum}: `
  );
  let highNum = parseInt(pickMaxNum);
  console.log(`\nYou set ${highNum} as the highest value.`);
}

pickHighNum();

async function pickLowNum() {
  let maxNum = 100;
  let pickLowNum = await ask(
    `\nPlease choose a number lower than ${maxNum}: `
  );
  let lowNum = parseInt(pickMinNum);
  console.log(`\nYou set ${lowNum} as the highest value.`);
}

pickLowNum();

checkGuess()
async function checkGuess() {
  
    console.log(`is it higher than ${checkGuess} ? y/n`);
  
    if(checkGuess < 1 || checkGuess > 100){
      alert("Please enter a number between 1 and 100.");
  }
  else{
      guessed_nums.push(checkGuess);
      no_of_guesses+= 1;

      if(checkGuess < answer){
          console.log("Your guess is too low.");
          
      }
      else if(checkGuess> answer){
          console.log("Your guess is too high.");
          
      }
      else if(checkGuess == answer){
        console.log("You Win!!");
      
      }
  }
}