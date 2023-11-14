(function () {
  window.addEventListener("load", fillBoard);

  const BOARDWIDTH = 660;
  const boardSize = 16;

  function fillBoard() {
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
        //square.style.height = Math.floor(BOARDWIDTH / boardSize) + "px";
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

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeColor(element) {
    let span = element.target;
    span.style.background = getRandomColor();
  }
})();
