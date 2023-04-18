let log = console.log;


function getComputerChoice(){
   const aleatorio = Math.floor(Math.random() * 9);
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
const computerSelection = getComputerChoice();

//let sup =  [['rock'>'scissor'],
            //['paper'>'rock'],            
            //['scissor'>'paper']]; 

function playRound(playerSelection, computerSelection){
    const p = playerSelection;
    const c = computerSelection;
    const rock = 'rock'; const paper = 'paper'; const scissor = 'scissor';
    if(playerSelection===computerSelection){
        return 'Empate!';
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
