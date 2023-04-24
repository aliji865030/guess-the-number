'use strict';



let Snumber =Math.trunc(Math.random()*20)+1;

let score=5;
let highScore=0;


document.querySelector(`.check`).addEventListener(`click`,function(){
   const guess= Number(document.querySelector(`.guess`).value);
   console.log(guess);

    if(!guess){
        document.querySelector(`.message`).textContent=`😡 No number!`
    }else if(guess===Snumber){
        document.querySelector(`.number`).textContent=Snumber;
      document.querySelector(`.message`).textContent=`🏆 Correct Number!`;
      document.querySelector(`body`).style.backgroundColor=`green`;
      document.querySelector(`.number`).style.width=`30rem`;
      if (score>highScore){
        highScore=score;
        document.querySelector(`.highscore`).textContent=highScore;
      }
    }else if(guess>Snumber+3&&guess<21){
        if (score>1){
            document.querySelector(`.message`).textContent=`😒 too high!`;
        score--;
        document.querySelector(`.score`).textContent=score;
        }else{
            document.querySelector(`.message`).textContent=`😈 you lost the game`;
        }
       

    }else if(guess>Snumber&&guess<=Snumber+3&&guess<21){
        if(score>1){
            document.querySelector(`.message`).textContent=`😮 yaa it's near!`;
            score--;
            document.querySelector(`.score`).textContent=score;
        }else{
            document.querySelector(`.message`).textContent=`😈 you lost the game`;
        }
        
       
    }else if(guess<Snumber-3&&guess<21){
        if(score>1){
            document.querySelector(`.message`).textContent=`🥱 too low!`;
        score--;
        document.querySelector(`.score`).textContent=score;
        }
          else{
        document.querySelector(`.message`).textContent=`😈 you lost the game`;
       }
    }else if(guess<Snumber&&guess>=Snumber-3&&guess<21){
        if(score>1){
            document.querySelector(`.message`).textContent=`😮 yaa it's near!`;
            score--;
            document.querySelector(`.score`).textContent=score;
        }else{
            document.querySelector(`.message`).textContent=`😈 you lost the game`;
        }
       
    }else{
        document.querySelector(`.message`).textContent=`🙄 Please enter right number`;
    }
})


document.querySelector(`.again`).addEventListener(`click`,function(){
    score=5;
    Snumber =Math.trunc(Math.random()*20)+1;
    document.querySelector(`.message`).textContent=`Start guessing...`;
    document.querySelector(`.score`).textContent=score;
    document.querySelector(`.number`).textContent=`?`;
    document.querySelector(`.guess`).value=``;
    document.querySelector(`body`).style.backgroundColor=`#222`;
    document.querySelector(`.number`).style.width=`15rem`;





})