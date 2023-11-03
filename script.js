


let timer = 60;
let score = 0;
let hitrn = 0;


function increaseScore (){
    score += 10;
    document.querySelector(".scoreVal").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()* 10);
    document.querySelector(".hitVal").textContent = hitrn;
}

function runTimer(){
   
   let runTimer = setInterval(function () {
        if (timer > 0) {
            timer--; 
            document.querySelector(".timerVal").textContent = timer;    
        } else {
            
            clearInterval(runTimer);
            document.querySelector("#pbtm").innerHTML = `<h2>Game Over</h2>`;
        }

            }, 1000);
}

document.querySelector("#pbtm").
addEventListener("click", function(dets){
 let clickedNumber = Number(dets.target.textContent);
 if(clickedNumber === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
 }
})


function makeBubble(){

    let bubbleNum = "";

    for(let i= 1; i<=119 ; i++){
        let num = Math.floor(Math.random()* 10)
        bubbleNum += ` <div id="bubble">${num}</div>`;
    
    
    }
    
    document.querySelector("#pbtm").innerHTML = bubbleNum;
};







getNewHit();
runTimer();
makeBubble();