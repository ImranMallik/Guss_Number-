'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(number);


let currentScure = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click',function(){
    const inpNum = Number(document.querySelector('.guess').value);
    //When win
    if(inpNum === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🥳 Correct Number';
        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(currentScure > highScore){
            highScore = currentScure;
            document.querySelector('.highscore').textContent = highScore;
        }
        // let value = document.querySelector('.number').textContent.style.color = 'green';
        // console.log(value);
        // No Input
    }else if(!inpNum){
        document.querySelector('.message').textContent = '⛔ Please Enter Number';
        //Too High
    }else if(inpNum > secretNumber){
        if(currentScure > 0){
            document.querySelector('.message').textContent = '📈 Too High!!';
            currentScure--;
            document.querySelector('.score').textContent = currentScure;
            //Lost Game
        }else{
              document.querySelector('.message').textContent = 'You Lost Game😔';
              document.querySelector('body').style.background = 'red';
        }
        //Too Low
    }else if(inpNum < secretNumber){
        if(currentScure > 0){
            document.querySelector('.message').textContent = '📉 Too Low!!';
            currentScure--;
            document.querySelector('.score').textContent = currentScure;
            //Lost The Game
        }else{
            document.querySelector('.message').textContent = 'You Lost Game😔';
            document.querySelector('body').style.background = 'red';
        }

    }
})

// Try Agan Function 

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.background = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    // document.querySelector('.highscore').textContent = 0;
});