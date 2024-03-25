const prompt = require("prompt-sync")();
console.log(
  "This is a game called snake-water-gun...RULES- snake > water, water > gun, gun > snake...you'll disqualified on 3 wrong entries....GOOD LUCK! \n\n",
);
let namee = prompt("enter your name- ");
let numgames = prompt("enter the number of times you wanna play ");
numgames = Number.parseInt(numgames);

let chan = 0;
for (let i = 0; i < numgames; i++) {
  console.log(`\n\n${numgames - i} games left...!`);

  let user = prompt("enter your choiice [S,W,G] - ");
  let cpuI = Math.floor(Math.random() * 3);
  let cpu = ["S", "W", "G"][cpuI];

  const play = (cpu, user) => {
    if (cpu === user) {
      return "nobody";
    } else if (cpu == "S" && user == "W") {
      return "cpu";
    } else if (cpu == "S" && user == "G") {
      return namee;
    } else if (cpu == "W" && user == "S") {
      return namee;
    } else if (cpu == "W" && user == "G") {
      return "cpu";
    } else if (cpu == "G" && user == "W") {
      return namee;
    } else if (cpu == "G" && user == "S") {
      return "cpu";
    } else {
      ++chan;
      return "no one";
    }
  };
  let winner = play(cpu, user);
  console.log(
    `${namee} entered ${user} and cpu entered ${cpu}...the winner is ${winner.toUpperCase()}`,
  );
  if (chan > 2) {
    console.log("\n\n\nYou are disqualified");
    break;
  }
  console.log(
    user != "S" && user != "W" && user != "G"
      ? "PLEASE ENTER A VALID CHOICE"
      : cpu === user
        ? "this match is a draw"
        : "congratualtions to the winner",
  );
}
