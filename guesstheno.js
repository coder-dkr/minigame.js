const prompt = require("prompt-sync")();
console.log("this is a game for guessing a number and evaluating your score");
let number = Math.floor(Math.random() * 100);
let count = 0;
let guess;

guess = prompt("enter your guess ");

++count;

do {
  guess = Number.parseInt(guess);

  if (guess > number) {
    console.log("your guess is greater than the number");
    guess = prompt("try again!");
    guess = Number.parseInt(guess);
    ++count;
    continue;
  } else if (guess < number) {
    console.log("your guess is smaller ");
    guess = prompt("try again!");
    guess = Number.parseInt(guess);
    ++count;
    continue;
  }
} while (guess != number);
let score = 100 - count;
console.log(
  "congratualtions you have guessed the right number that is",
  number + "and your score is",
  +score,
);
