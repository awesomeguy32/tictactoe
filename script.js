let gridBoxes = document.querySelectorAll('.grid-box');

let currentSymbol = 'X';
let xScore = 0;
let yScore = 0;
let gridArray = ['', '', '', '', '', '', '', '', ''];
let combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

gridBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (!box.textContent) {
      handleClick(box);
    }
  });
});

function handleClick(box) {
  box.textContent = currentSymbol;

  gridArray[parseInt(box.dataset.index) - 1] = currentSymbol;

  checkWin();

  currentSymbol === 'X' ? (currentSymbol = 'O') : (currentSymbol = 'X');
}

function checkWin() {
  combinations.forEach((combination) => {
    if (
      (gridArray[combination[0]] == 'X' &&
        gridArray[combination[1]] == 'X' &&
        gridArray[combination[2]] == 'X') ||
      (gridArray[combination[0]] == 'O' &&
        gridArray[combination[1]] == 'O' &&
        gridArray[combination[2]] == 'O')
    ) {
      if ((currentSymbol = 'X')) {
        xScore++;
      } else {
        yScore++;
      }

      reset();
    }
  });
}

function reset() {
  for (let i = 0; i < 9; i++) {
    gridArray[i] = '';
  }
  gridBoxes.forEach((box) => {
    box.textContent = '';
  });
}
