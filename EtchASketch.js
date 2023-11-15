(function () {
  window.addEventListener("load", fillBoard);
  window.addEventListener("load", primeButton);

  const BOARDWIDTH = 660;
  let boardSize = 16;
  const colorMatrix = [];

  function primeButton() {
    let btn = document.querySelector("button");
    btn.addEventListener("click", resetGame);
  }

  function resetGame() {
    let board = document.querySelector("#gameboard");
    let ans = prompt("What number size do you want to enter?");
    while (isNaN(ans) || ans < 5) {
      ans = prompt("What number size do you want to enter?");
    }

    if (ans > 100) ans = 100;

    ans = Math.floor(ans);

    while (colorMatrix.length > 0) {
      colorMatrix.pop();
    }

    board.innerHTML = "";

    boardSize = ans;
    fillBoard();
  }

  function initiateColorMatrix() {
    for (let i = 0; i < boardSize; i++) {
      let row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(100);
      }

      colorMatrix.push(row);
    }

    console.log(colorMatrix);
  }

  function fillBoard() {
    initiateColorMatrix();
    let board = document.querySelector("#gameboard");
    for (let i = 0; i < boardSize; i++) {
      let row = document.createElement("div");
      //row.innerText = "test";
      row.style.height = 100 / boardSize + "%";
      row.style.width = "100%";
      for (let j = 0; j < boardSize; j++) {
        let square = document.createElement("span");
        square.style.display = "inline-block";
        square.style.width = "100%";
        square.id = i + "-" + j;
        square.addEventListener("mouseover", (e) => {
          changeColor(e);
        });
        row.appendChild(square);
      }
      //row.classList.add("flexy");
      row.style.display = "flex";
      //row.classList.add("pos");
      board.appendChild(row);
    }
  }

  function generateRandomColor(span) {
    // Generate random hue and saturation values, while keeping lightness constant
    let temp = span.id.split("-");
    let currentLightness = colorMatrix[temp[0]][temp[1]];
    colorMatrix[temp[0]][temp[1]] = Math.max(0, currentLightness - 10);
    const hue = Math.floor(Math.random() * 360);
    const saturation = 100;

    // Construct the HSL color string
    const color = `hsl(${hue}, ${saturation}%, ${currentLightness}%)`;

    return color;
  }

  function changeColor(element) {
    let span = element.target;
    span.style.background = generateRandomColor(span);
  }
})();
