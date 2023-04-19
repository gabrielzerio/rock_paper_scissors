let log = console.log;
game();
function game(){
    for(let i=0;i<5;i++){
    let option = prompt("Rock, paper or scissor?");
    let c_option = getComputerChoice();
    option = formatOption(option);
    log(playRound(option,c_option));
    }
}

function getComputerChoice(){
   const aleatorio = Math.floor(Math.random()*10);
   if(aleatorio>=0 && aleatorio <=3){
    return 'scissor';
   }
   else if(aleatorio>3 && aleatorio <=6){
    return 'rock';
   }
   else if(aleatorio>6 && aleatorio <=9){
    return 'paper';
   }
}
function formatOption (text){
    return text.toLowerCase();
}

            ///['rock'>'scissor']
            ///['paper'>'rock']          
            ///['scissor'>'paper'] 

function playRound(playerSelection, computerSelection){
    console.log('computer: '+computerSelection+ ', You: ', playerSelection);
    const p = playerSelection;
    const c = computerSelection;
    const rock = 'rock'; const paper = 'paper'; const scissor = 'scissor';
    if(playerSelection===computerSelection){
        return 'Tie!';
    }else{
        if(p===rock){
            if(c===scissor){
                return 'you won! rock beats scissor!';
            }
            if(c===paper){
                return 'you lose! paper beats rock!';
            }
        }
        if(p===paper){
            if(c===rock){
                return 'You won! paper beats rock';
            }
            if(c===scissor){
                return 'You lose! scissor beats paper';
            }
        }
        if(p===scissor){
            if(c===paper){
                return 'You won! scissor beats paper!';
            }
            if(c===rock){
                return 'You lose! rock beats scissor!';
            }
        }
    }
}

