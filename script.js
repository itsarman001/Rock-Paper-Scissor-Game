const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn")

let player;
let computer;
let result;
let score = 0;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer : ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum){
        case 1:
            computer = "Rock"
            break;
        case 2:
            computer = "Paper"
            break;
        case 3:
            computer = "Scissor"
    }
}

function checkWinner(){
    if (player == computer) {
        return "Draw!"
    }
    else if (computer == "Rock") {
        return (player == "Paper") ? "You Win!" : "You Loose!"
    }
    else if (computer == "Paper") {
        return (player == "Scissor") ? "You Win!" : "You Loose!"
    }
    else if (computer == "Scissor") {
        return (player == "Rock") ? "You Win!" : "You Loose!"
    }
}
function scoreCard(){
    if (checkWinner)

}