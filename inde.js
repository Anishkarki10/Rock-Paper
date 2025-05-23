let userScore =0;
let compScore =0;
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const getCompChoice =()=>{
    const option = ["rock", "paper", "scissors"]
    ranIndx= Math.floor(Math.random()*3)
    return option[ranIndx]
}
const drawGame=()=>{
    console.log(" The game was draw")
    msg.innerHTML="Draw Play again !"
}
const showWinner=(userWin)=>{
    if (userWin){
        userScore++
        userScorePara.innerHTML= userScore
        console.log("You won ")
        msg.innerHTML="You won !"
    }else{
        compScore++
        compScorePara.innerHTML=compScore
        console.log(" you lost")
        msg.innerHTML="You lost !"
    }
}

const playGame = (userChoice)=>{
    const compChoice= getCompChoice();
    console.log(userChoice)
    console.log(compChoice)

    if(userChoice === compChoice){
     drawGame()
    }else{
        let userWin = true;
        if(userChoice == "rock"){
           userWin = compChoice === "paper" ? false : true
        }else if (userChoice === "paper"){
            userWin=compChoice === "scissors" ? false :true;
        }else{
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
       playGame(userChoice)
    })
})