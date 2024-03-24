const prompt = require("prompt-sync")();
console.log(
  "this is a game called snake, water, gun, with a loop of 3 times, snake>water, water>gun, gun>snake...GOOD LUCK!",
);
let namee = prompt("enter your name- ");
let user = prompt("enter your choiice [S,W,G] - ");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI];
const play = (cpu, user) => {
  if (cpu === user) {
    return "nobody";
  } else if ((cpu == "S" && user == "W")) {
    return "cpu";
  } else if ((cpu == "S" && user == "G")) {
    return namee;
  } else if ((cpu == "W" && user == "S")) {
    return namee;
  } else if ((cpu == "W" && user == "G")) {
    return "cpu";
  } else if ((cpu == "G" && user == "W")) {
    return namee;
  } else if ((cpu == "G" && user == "S")) {
    return "cpu";
  } else {
    console.log("enter a valid choice");
  }
};
console.log(
  namee + " entered",
  user + " and cpu entered ",
  cpu + " the winner is ",
  play(cpu, user),
);
console.log(
  cpu === user ? "this match is a draw" : "congratulations to the winner!!",
);
