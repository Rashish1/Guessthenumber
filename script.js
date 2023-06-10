'use strict';

let number=Math.trunc(Math.random()*20+1);


let score=20;
let highscore=0;

document.querySelector(".check").addEventListener("click",function(){
    const guess=Number(document.querySelector(".guess").value);

    // When there is no input number
    if(!guess){
        document.querySelector(".message").textContent="No Guess Made!!🚫";
    }

    // When Player wins
    else if(guess===number){
        document.querySelector(".message").textContent="Correct Number!!🎉";
        document.querySelector("body").style.backgroundColor="#0BDA51";
        document.querySelector(".number").textContent=number;
        if(score>highscore){
            document.querySelector(".highscore").textContent=score;
            highscore=score;
        }
    }
    // When guess is too high
    else if(guess>number){
        if(score>1){
            document.querySelector(".message").textContent="Too High!!📈";
        score--;
        document.querySelector(".score").textContent=score;
        }
        else{
            document.querySelector("body").style.backgroundColor="#EF0107";
            document.querySelector(".message").textContent="You Lost the game.Try Again!!"
            document.querySelector(".score").textContent=0;
        }
    }
    // When guess is too low
    else if(guess<number){
        if(score>1){
            document.querySelector(".message").textContent="Too Low!!";
        score--;
        document.querySelector(".score").textContent=score;
        }
        else{
            document.querySelector("body").style.backgroundColor="#EF0107";
            document.querySelector(".message").textContent="You Lost the game.Try Again!!"
            document.querySelector(".score").textContent=0;
        }
    }
});

document.querySelector(".again").addEventListener("click",function(){
    document.querySelector(".message").textContent="Start guessing...";
    score=20;
    document.querySelector(".score").textContent=20;
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".guess").value="";
    document.querySelector(".number").textContent="?";
    number=Math.trunc(Math.random()*20+1);
});






