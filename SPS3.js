let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");
let compScorePara= document.querySelector("#comp-score");
let userScorePara= document.querySelector("#user-score");

const genCompChoice= ()=>{
    const options= ["stone","paper", "scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame= ()=> {
  //  console.log("game was draw");
    msg.innerText= "Game Draw. Play again"
}

const showWinner= (userWin, userChoice, compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText= userScore;
        console.log("You won the game");
        msg.innerText= `you won! your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green"; 
    }
    else{
        compScore++;
        compScorePara.innerText= compScore;
        console.log("you lose the Game");
        msg.innerText= `You lose! Comp  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "red";


    }
};

const playGame= (userChoice)=>{
   // console.log("user choice= ", userChoice);
    //Generate comp choice

    const compChoice= genCompChoice();
   // console.log("Comp choice= ", compChoice);
    if (userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin= true;
        if(userChoice==="stone"){
            // paper, scissors
            userWin= compChoice=== "paper"? false:true;
        }
       else if(userChoice==="paper"){
        // rock, scissors 
            userWin= compChoice=== "scissors"? false:true;
        }
        else{
            // paper, rock 
            userWin= compChoice=== "stone"? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
       // console.log("choice clicked", userChoice);
        playGame(userChoice);

    });

});