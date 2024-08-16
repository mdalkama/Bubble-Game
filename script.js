var timer = 60;
var scoreValue = 0;
var bubble = document.querySelector('#pbtm');
var hit = document.querySelector(".hit");
var score = document.querySelector(".score");
var scoreUpdate = document.querySelector("#scoreUpdate");
function changeScore(){
    score.innerHTML = scoreValue;
}
function getNewHit(){
    var rnHit = Math.floor(Math.random()*10);
    hit.innerHTML = `${rnHit}`;
}
function makeBubble(){
    let clutter = "";
    for(var i = 1; i <= 114; i++ ){
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    bubble.innerHTML = clutter;
    
}
function runTimer(){
    var timerInterval = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector(".timer").innerHTML = `${timer}`;
        }else{
            clearInterval(timerInterval);
            bubble.innerHTML = `            
            <div id="gameOver">            
                <h2>GAME OVER</h2>
            </div>`;
        }
    },1000)
}
makeBubble();
runTimer();
getNewHit();

bubble.addEventListener('click',(e)=>{
    var clickedNumber = Number(e.target.innerHTML);
    var hitNumber = Number(hit.innerHTML);
    if(timer>0){
        if(clickedNumber === hitNumber){
        makeBubble();
        getNewHit();
        scoreValue += 10;
        changeScore();
        // scoreUpdate.innerHTML = "+10";
        // scoreUpdate.style.color = "white";
        }
        else{
            scoreValue -= 20;
            changeScore();
            // scoreUpdate.innerHTML = "-20";
            // scoreUpdate.style.color = "white";
        }
    }
})