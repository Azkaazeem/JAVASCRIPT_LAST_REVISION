let gameSeq = [];
let userSeq = [];

let btns = ["green", "red", "yellow", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

// Allow starting the game by clicking/tapping anywhere on the screen (except the buttons themselves)
document.addEventListener("click", function (e) {
    if (!started && !e.target.classList.contains("btn")) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++; 
    h2.innerText = `Level ${level}`;
    
    // Fixed bug: Math.random() * 4 to cover all 4 buttons
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor); 
    gameFlash(randBtn);
}

function checkSeq(idx) { 
    if (userSeq[idx] === gameSeq[idx]) { 
        if (userSeq.length === gameSeq.length) { 
            setTimeout(levelUp, 1000); 
        } 
    } else { 
        h2.innerHTML = `Game Over! Your score was <span style="color: #ff0055; font-weight: bold;">${level}</span> <br> Press any key or tap to restart.`; 
        document.querySelector("body").classList.add("game-over");
        setTimeout(function() { 
            document.querySelector("body").classList.remove("game-over"); 
        }, 200);
        reset();
    } 
}

function btnPress() {
    if(!started) return;

    let btn = this;
    userFlash(btn); 

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() { 
    started = false; 
    gameSeq = []; 
    userSeq = []; 
    level = 0;
}