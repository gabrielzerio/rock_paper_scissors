let log = console.log;

const buttons = document.querySelectorAll('button');
const show = document.querySelector('.showMatch');
const p = document.createElement('p');
const showScore = document.querySelector('.score');
const scoreP = document.createElement('p');
const btnClear = document.createElement('button');
btnClear.textContent='Clear'
const scoreBoard = document.createElement('p');

let pointsp = 0;
let pointsc = 0;
let scorep=0;
let scorec=0;
let bothPoints=true;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (pointsp < 5 && pointsc < 5) {
            let option;
            option = (button.className == 'btnRock') ? 'rock' : (button.className == 'btnPaper') ? 'paper' : 'scissor';
            let c_option = getComputerChoice();
            p.textContent = 'computer: ' + c_option + ', you: ' + option + ", " + playRound(option, c_option);
          log(pointsp+" "+pointsc);
          log(bothPoints);    
          
        }else if(bothPoints) {
            let score = (pointsp == 5) ? 'The winner is YOU!' : 'The winner is the COMPUTER!';
            p.textContent = score;
            show.appendChild(btnClear);
            bothPoints=false;
           }else{
            alert('You Must click new round button to keep playing!');
        }
    });
});
show.appendChild(p);
btnClear.addEventListener('click', () =>{
    p.textContent='';
    
    if(pointsc==5){
        scorec++;
    }else if(pointsp==5){
        scorep++;
    }
    scoreP.textContent = 'Computer: '+scorec+', You: '+ scorep;
    showScore.appendChild(scoreP);
    show.removeChild(btnClear);
    bothPoints=true;
    pointsp=0;pointsc=0;
});



function getComputerChoice() { //GETS AN OPTION GENERATED BY MATH.RANDOM(COMPUTER)
    const aleatorio = Math.floor(Math.random() * 10);
    if (aleatorio >= 0 && aleatorio <= 3) {
        return 'scissor';
    }
    else if (aleatorio > 3 && aleatorio <= 6) {
        return 'rock';
    }
    else if (aleatorio > 6 && aleatorio <= 9) {
        return 'paper';
    }
}

///['rock'>'scissor']
///['paper'>'rock']          
///['scissor'>'paper'] 

function playRound(playerSelection, computerSelection) { //MAKE THE PLAYROUND WITH THE PLAYER OPTION AND THE COMPUTER OPTION
    //console.log('computer: '+computerSelection+ ', You: ', playerSelection);
    const p = playerSelection;
    const c = computerSelection;
    const rock = 'rock'; const paper = 'paper'; const scissor = 'scissor';
    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else {
        
        if (p === rock) {
            if (c === scissor) {
                pointsp++;
                return 'you won! rock beats scissor!';
            }
            if (c === paper) {
                pointsc++;
                return 'you lose! paper beats rock!';
            }
        }
        if (p === paper) {
            if (c === rock) {
                pointsp++;
                return 'You won! paper beats rock';
            }
            if (c === scissor) {
                pointsc++;
                return 'You lose! scissor beats paper';
            }
        }
        if (p === scissor) {
            if (c === paper) {
                pointsp++;
                return 'You won! scissor beats paper!';
            }
            if (c === rock) {
                pointsc++;
                return 'You lose! rock beats scissor!';
            }
        }
    }
}
