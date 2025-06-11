function getComputerChoice(){
    const randomNumber =  Math.floor(Math.random()*3 + 1)
    if(randomNumber==1)return "rock"
    else if(randomNumber==2) return "paper"
    else return "scissors"
}

function getHumanChoice(){
    return prompt("Enter rock,paper or scissors")
}


