let scores = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses : 0,
    ties : 0
    };

/* if (!scores ){          ///(scores === null)///
scores = {
wins : 0,
losses : 0,
ties : 0,
};
}*/

scoreDisplay();
function cPick() {
const rNum = Math.random();

let cVar;
if (rNum >= 0 && rNum < 1/3) {
cVar = 'Rock';
}
else if (rNum >= 1/3 && rNum < 2/3) {
cVar = 'Paper';
}
else {
cVar = 'Scissor';
}
return cVar;
}


console.log(scores);
function resultss(usr){

let userVar;
let comp = cPick();
if (usr === 'Rock'){
if (comp === 'Rock'){
userVar = 'Tie';
}
else if (comp === 'Paper'){
userVar = 'You Lose';
}
else 
userVar = 'You win';
}
else if (usr === 'Paper'){
if (comp === 'Rock'){
userVar = 'You win';
}
else if (comp === 'Paper'){
userVar = 'Tie';
}
else 
userVar = 'You lose';
}
else if (usr === 'Scissor'){
if (comp === 'Rock'){
userVar = 'You lose';
}
else if (comp === 'Paper'){
userVar = 'You win';
}
else 
userVar = 'Tie';
}
if (userVar === 'You win')
scores.wins ++;
else if (userVar === 'Tie')
scores.ties ++;
else if (userVar === 'You lose')
scores.losses ++;

localStorage.setItem('score', JSON.stringify(scores));

scoreDisplay();
updateOthers(userVar, usr, comp);
//alert(`You picked ${usr}. Computer picked ${comp}. ${userVar}. win : ${scores.wins},  lose : ${scores.losses}, tie : ${scores.ties}`);

}
function reset(){
scores.wins = 0;
scores.losses = 0;
scores.ties = 0;
scoreDisplay();
localStorage.removeItem('score');   
}

function scoreDisplay(){
document.querySelector('.js-score')
.innerHTML = `Win : ${scores.wins},  Lose : ${scores.losses}, Tie : ${scores.ties}`;
}

function updateOthers(declare, user, computer){
document.querySelector('.js-declare').innerHTML = declare;
document.querySelector('.js-picks')
.innerHTML = `You <img src="${user}-emoji.png" class="move-icon"> <img src="${computer}-emoji.png" class="move-icon"> Computer`;
}

let isAutoPlaying = false;
let intervalId;
function autoplay() {
    if (!isAutoPlaying){
        intervalId= setInterval(function() {
            const playerMove2 = cPick();
            resultss(playerMove2);
        
        }, 1000);
        document.querySelector('.auto-play-btn').innerHTML = 'Stop Play';
        document.querySelectorAll('button').forEach(function(button){
            button.style.border = '4px dotted red';
        });
        isAutoPlaying = true;

    }
    else {
        clearInterval(intervalId);
        document.querySelector('.auto-play-btn').innerHTML = 'Auto Play';
        isAutoPlaying = false;
    }
}