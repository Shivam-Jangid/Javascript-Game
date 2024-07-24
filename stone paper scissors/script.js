let user_score = 0;
let comp_score = 0;
const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#message");
const getcomchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const idx = Math.floor(Math.random() * 3);
  return options[idx];
};
const Draw = () => {
  console.log("game was draw.");
};
const showWinner = (usergame, h) => {
  if (usergame === true && h === 0) {
    console.log("won");
    msg.innerText = "you won !";
    msg.style.backgroundColor = "green";
  } else if (usergame === false && h === 0) {
    msg.innerText = "you lost ,try again !"
    msg.style.backgroundColor = "Red";
    console.log("lost");
  } else {
    msg.innerText = "It was a draw, play again !"
    msg.style.backgroundColor = "black";
    Draw();
  }
};

const playGame = (userchoice) => {
  const compchoice = getcomchoice();
  console.log("user-choice = ", userchoice);
  console.log("comp-choice = ", compchoice);
  let usergame = true;
  let h = 0;
  if (userchoice === compchoice) {
    h = 1;
  } else {
    if (userchoice === "rock") {
      if (compchoice === "paper") usergame = false;
    } else if (userchoice === "scissors") {
      if (compchoice === "rock") usergame = false;
    } else {
      if (compchoice === "scissors") usergame = false;
    }
  }
  showWinner(usergame, h);
};
choices.forEach((ch) => {
  ch.addEventListener("click", () => {
    const userchoice = ch.getAttribute("id");
    playGame(userchoice);
  });
});
