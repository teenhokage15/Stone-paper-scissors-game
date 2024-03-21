let userscore = 0;
let compscore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const choicesArr = Array.from(choices);
const msg = document.querySelector("#msg");
const drawGame = () => {
  msg.innerText = "DRAW";
  msg.style.backgroundColor = "#001b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userscore++;
    userScorePara.innerText = userscore;

    msg.innerText = `You Win! as your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compScorePara.innerText = compscore;

    msg.innerText = `You Lose as ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "crimson";
  }
};

const genCompChoice = () => {
  const optionns = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return optionns[randomIdx];
};

const playGame = (userChoice) => {
  console.log("user choice is", userChoice);
  const compChoice = genCompChoice();
  console.log("computer choice is", compChoice);

  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choicesArr.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
