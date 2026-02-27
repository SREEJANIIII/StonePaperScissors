
let start=document.getElementById("start");
let WelcomePg=document.getElementById("WelcomePg")
 let p=0,c=0;
 let btn;
 let r=1, n;
 let l="";
 let playMove;
start.addEventListener("click",event=>{
document.body.removeChild(start);
WelcomePg.textContent="CHOOSE A LEVEL";
const levels=["EASY","MEDIUM","HARD"];
levels.forEach(level => {
  btn = document.createElement("button");
  btn.textContent = level;
  
  btn.classList.add("bttn");

  WelcomePg.append(btn);

  btn.addEventListener("click",event=>{
    l=level;

    WelcomePg.textContent="ENTER THE NO. OF ROUNDS";
    let input = document.createElement("input");
input.type = "number";
input.min = "1";        
input.step = "1";       
input.placeholder = "Enter number of rounds";
input.style.fontSize="1.3em";
WelcomePg.append(input);
    let submit=document.createElement("button");
    submit.classList.add("bttn");
    submit.textContent="SUBMIT";
    WelcomePg.append(submit);
    submit.addEventListener("click",event=>{
    n=Number(input.value);
    if(!Number.isInteger(n) || n <= 0) {
    alert("Enter a whole number greater than 0");
    return;
  }

    play();
     
});
  });
});


});
function win(pm){
    
  if(pm=="STONE🪨") return 1;      // PAPER
  if(pm=="PAPER📄") return 2;      // SCISSORS
  if(pm=="SCISSORS✂️") return 0;   // STONE
}

function lose(pm){
  if(pm=="STONE🪨") return 2;      // SCISSORS
  if(pm=="PAPER📄") return 0;      // STONE
  if(pm=="SCISSORS✂️") return 1;   // PAPER
}

function tie(pm){
  if(pm=="STONE🪨") return 0;
  if(pm=="PAPER📄") return 1;
  if(pm=="SCISSORS✂️") return 2;
}

function display()
{
  WelcomePg.innerHTML = "";

  const score = document.createElement("h2");
  score.textContent = `SCORE`;

  const playerScore = document.createElement("p");
  playerScore.textContent = `Player: ${p}`;

  const computerScore = document.createElement("p");
  computerScore.textContent = `Computer: ${c}`;

  const nextBtn = document.createElement("button");
  if(r<n)
  nextBtn.textContent = "NEXT ROUND";
else
    nextBtn.textContent = "RESULT";
  nextBtn.classList.add("bttn");

  WelcomePg.append(score, playerScore, computerScore, nextBtn);

  nextBtn.addEventListener("click", () => {
    r++;        // move to next round
    play();     // continue game
  });
}


function play(){
    if(r>n)
    {
        
        if(c>p)
            WelcomePg.textContent="COMPUTER WINS BY "+(c-p)+" POINTS. BETTER LUCK NEXT TIME!";
        else if(p>c)
            WelcomePg.textContent="CONGRATS! PLAYER WINS BY "+(p-c)+" POINTS";
        else if(p==c)
            WelcomePg.textContent="ITS A TIE! GOOD TRY!";
    
    
setTimeout(()=>{
    let choice = prompt("Game Over! Type YES to restart, NO to exit");
if (choice && choice.toLowerCase() === "yes") {
    restartGame();
}
},2000);
return;
    }

    WelcomePg.textContent="SELECT YOUR CHOICE PLEASE:";
    const choices = [
  { name: "STONE🪨", img: "stone.jpg" },
  { name: "PAPER📄", img: "hand.jpg" },
  { name: "SCISSORS✂️", img: "scissors.jpg" }
];
    choices.forEach(choice => {
    const ch = document.createElement("button");
    ch.classList.add("bttn");

    const img = document.createElement("img");
    img.src = choice.img;
    img.alt = choice.name;
    img.style.width = "80px";
    img.style.height = "80px";

    ch.append(img);
    WelcomePg.append(ch);

    ch.addEventListener("click", () => {
        playMove = choice.name;
  let compMove=["STONE🪨", "PAPER📄", "SCISSORS✂️"];
  let ran1= Math.floor(Math.random()*100)+1;
  let result=0;
  if(l=="HARD")
  {
    if(ran1<=65)
    {
        result=lose(playMove);
        c++;
    }
    else if(ran1<=85)
    {
        result=tie(playMove);
        p++;
        c++;
    }
    else 
    {
        result=win(playMove);
        p++;
    }
  }
  else if(l=="MEDIUM")
  {
    if(ran1<=33)
    {
        result=win(playMove);
        p++;
    }
    else if(ran1<=66)
    {
        result=lose(playMove);
        c++;
    }
    else{
    result=tie(playMove);
    c++;
    p++;
    }
    

  }
  else {
     if(ran1<=65)
    {
        result=win(playMove);
        p++;
    }
    else if(ran1<=85)
    {
        result=tie(playMove);
        c++;
        p++;
    }
    else 
    {
        result=lose(playMove);
        c++;
    }
  }
  WelcomePg.textContent="COMPUTER CHOSE "+compMove[result];
  let d = document.createElement("button");
  d.textContent = "DISPLAY";
  
  d.classList.add("bttn");

  WelcomePg.append(d);

  d.addEventListener("click",event=>{
    if(r<=n)
  display();
  });

});
    });
}
function restartGame() {
    location.reload();
}
