let options=["ROCK", "PAPER", "SCISSORS"];
const begin=prompt("This is a game, press ok to begin");
if(begin||begin==""){
    game();
}
while(true){
    const restart=prompt("press ok to restart the game");
    if(restart||restart==""){
        console.clear();
        game();
    }
}

function game(){
    let CS="";
    let PS = "";
    let PlayerSel="";
    let Cscore=0;
    let Pscore=0;
    result=null;
    let fresult="";

    for(let i=0; i<5; i++){
    console.log("ROUND ", i+1);
    CS=ComputerPlay();
    //console.log("the computer's choice is:",CS);
    PlayerSel = prompt("Please enter your selection (ROCK, PAPER, SCISSORS)");
    while (PlayerSel.toUpperCase()!=="ROCK" && PlayerSel.toUpperCase()!=="PAPER" && PlayerSel.toUpperCase()!=="SCISSORS"){
        PlayerSel = prompt("Please enter a proper option (ROCK, PAPER, SCISSORS)");
    }
    PS = PlayerSel.toUpperCase();
    console.log("the player's choice is:",PS,"and computer's choice is ",CS);
    
    fresult=(PlayRound(PS,CS));
    console.log(fresult);

    if(fresult=="PLAYER WINS"){
        Pscore=Pscore+1;
    }
    if(fresult=="COMPUTER WINS"){
        Cscore=Cscore+1;
    }}

    if(Cscore>Pscore){
        console.log("Computer won the game");
    }
    if(Cscore<Pscore){
        console.log("Player won the game");
    }
    if(Cscore==Pscore){
        console.log("the result of the game is draw");
    }
}

function ComputerPlay(){
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function PlayRound(PS,CS){
 
  if (PS === CS) {
    result = "DRAW";
  }

  if (PS === "ROCK" && CS === "SCISSORS") {
    result = "PLAYER WINS";
  }

  if (PS === "SCISSORS" && CS === "PAPER") {
    result = "PLAYER WINS";
  }

  if (PS === "PAPER" && CS === "ROCK") {
    result = "PLAYER WINS";
  }

  if (PS === "SCISSORS" && CS === "ROCK") {
    result = "COMPUTER WINS";
  }

  if (PS === "PAPER" && CS === "SCISSORS") {
    result = "COMPUTER WINS";
  }

  if (PS === "ROCK" && CS === "PAPER") {
    result = "COMPUTER WINS";
  }

  return result;
};