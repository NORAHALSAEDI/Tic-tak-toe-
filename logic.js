let gridItem = document.getElementsByClassName("square");
let currentTurn = "x";
let boredArrey = ["0", "2", "3", "4", "5", "6", "7", "8", "9"];

for (const item of gridItem) {
  item.addEventListener("click", function () {
    let value = item.getAttribute("value");
    let index = value - 1;
    let squareContent = document.querySelector(`.square[value="${value}"]`);
    squareContent.innerHTML = currentTurn;
    boredArrey[index] = currentTurn;
    console.log(boredArrey);
    if (currentTurn == "x") currentTurn = "o";
    else {
      currentTurn = "x";
    }
  });
}
