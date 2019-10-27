function startGame(){

  for(let i = 1; i <= 9; i++){
    clearBox(i);
  }

  document.turn = "X";
  document.winner = null;
  setMessage(document.turn + " STARTS GAME")
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(box){
  if(document.winner != null){
    setMessage(document.turn + " ALREADY WON.")
  } else if(box.innerText == ""){
    box.innerText = document.turn;
    switchTurn();
  } else {
    setMessage("PICK ANOTHER BOX.")
  }

}

function switchTurn(){
  if(checkForWinner(document.turn)){
    setMessage("YAAAAY " + document.turn + ", YOU WON!")
    document.winner = document.turn;
  } else if(document.turn == "X"){
    document.turn = "O";
  } else{
    document.turn = "X";
    setMessage("It's " + document.turn + " 's turn.")

  }
}

function checkForWinner(move){
  let result = false;
  if(checkRow(1, 2, 3, move) ||
     checkRow(4, 5, 6, move) ||
     checkRow(7, 8, 9, move) ||
     checkRow(1, 4, 7, move) ||
     checkRow(2, 5, 8, move) ||
     checkRow(3, 6, 9, move) ||
     checkRow(1, 5, 9, move) ||
     checkRow(3, 5, 7, move)) {
       result = true;
     }
     return result;
}

function checkRow(a, b, c, move){
  let result = false;
  if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
    result = true;
  }
  return result;
}

function getBox(number){
  return document.getElementById("box" + number).innerText;
}

function clearBox(number){
  document.getElementById("box" + number).innerText = "";
}


//create variable to stores click count
//variable with click count would increase +1 with each  click within addEvent Listener
//if variable with click count is % by 2 then the textContent would be assigned "O"
//else  variable textContent would be assigned "X"
//Create conditional for when 3 boxes have the same textContent then the
