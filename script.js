let gridBoxes = document.querySelectorAll('.grid-box');

let currentSymbol = 'X';
let gridArray = ['', '', '', '', '', '', '', '', ''];

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

  currentSymbol === 'X' ? (currentSymbol = 'O') : (currentSymbol = 'X');
}
