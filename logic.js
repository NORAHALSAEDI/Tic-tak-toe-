let gridItem = document.getElementsByClassName("square");
let currentTurn = "x";
let isGamrFinished = false;
let boarddArrey = ["0", "2", "3", "4", "5", "6", "7", "8", "9"];

for (const item of gridItem) {
  item.addEventListener("click", function () {
    let value = item.getAttribute("value");
    let index = value - 1;

    // in case if the game finsied will stop to write
    if (isGamrFinished) {
      return;
    }

    if (boarddArrey[index] == "x" || boarddArrey[index] == "o") {
      return;
    }

    // fill the visual board
    let squareContent = document.querySelector(`.square[value="${value}"]`);
    squareContent.innerHTML = currentTurn;

    // fill the logic board

    // update the array
    boarddArrey[index] = currentTurn;
    console.log(boarddArrey);
    evaluateBoard();

    if (currentTurn == "x") currentTurn = "o";
    else {
      currentTurn = "x";
    }
    document.getElementById("intraction").textContent = `${currentTurn} turn`;
  });

  function evaluateBoard() {
    if (
      //rows
      (boarddArrey[0] == boarddArrey[1] && boarddArrey[1] == boarddArrey[2]) ||
      (boarddArrey[3] == boarddArrey[4] && boarddArrey[4] == boarddArrey[5]) ||
      (boarddArrey[6] == boarddArrey[7] && boarddArrey[7] == boarddArrey[8]) ||
      //column
      (boarddArrey[0] == boarddArrey[3] && boarddArrey[3] == boarddArrey[6]) ||
      (boarddArrey[1] == boarddArrey[4] && boarddArrey[4] == boarddArrey[7]) ||
      (boarddArrey[2] == boarddArrey[5] && boarddArrey[5] == boarddArrey[8]) ||
      //diagnoal
      (boarddArrey[0] == boarddArrey[4] && boarddArrey[4] == boarddArrey[8]) ||
      (boarddArrey[2] == boarddArrey[4] && boarddArrey[4] == boarddArrey[6])
    ) {
      var winner = currentTurn == "o" ? "o" : "x";
      isGamrFinished = true;
      alert(`${winner} Won!`);
    }
    //if the game is fill with x or o it will be a draw
    var isDraw = true;
    for (square of boarddArrey) {
      if (square != "x" && square != "o") {
        isDraw = false;
      }
    }
    if (isDraw) {
      isGamrFinished = true;
      //  alert("draw");
      alar;
    }
  }
}

document.getElementById("reset-butn").addEventListener("click", function () {
  reset();
});
function reset() {
  // reseting the board viually
  for (item of gridItem) {
    let value = item.getAttribute("value");
    let squareContent = document.querySelector(`.square[value="${value}"]`);
    squareContent.innerHTML = "";
    //reseting logiclly
    boarddArrey = ["0", "2", "3", "4", "5", "6", "7", "8", "9"];
  }
  isGamrFinished = false;
  currentTurn = "x";
  document.getElementById("intraction").textContent = `${currentTurn} turn`;
}
