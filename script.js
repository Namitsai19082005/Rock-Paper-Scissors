let userScore=0;
let compScore=0;

const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");
const newBtn=document.querySelector("#new-btn");

const choices=document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
}
)

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const index=Math.floor(Math.random()*3);
    return options[index];
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="rock"?true:false;
        }
        else
        {
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

const disable=()=>{
    choices.forEach((choice)=>{
        choice.classList.add("disabled");
    }
    )
}

const enable=()=>{
    choices.forEach((choice)=>{
        choice.classList.remove("disabled");
    }
    )
    userscore.innerText="0";
    compscore.innerText="0";
    msg.innerText="Play your move";
    msg.style.backgroundColor="black";
    userScore=0;
    compScore=0;
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userscore.innerText=userScore;
        msg.innerText=`You win, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        compscore.innerText=compScore;
        msg.innerText=`You loss, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
    if(userScore==5)
    {
        msg.innerText="Congratulations You won the Game, Keep it up";
        msg.style.backgroundColor="blue";
        disable();
    }
    if(compScore==5)
    {
        msg.innerText="Sorry, You loss the Game";
        msg.style.backgroundColor="blue";
        disable();
    }
}

const drawGame=()=>{
    msg.innerText="Game is Draw, Play again";
    msg.style.backgroundColor="orange"
}

newBtn.addEventListener("click",enable);

