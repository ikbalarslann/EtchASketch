const newGridButton = document.querySelector('#grid');
let gridSize = 16;
const container = document.querySelector('.container');

function createGrid() {
  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
  }
  
  let squares = document.querySelectorAll('.square');
  squares.forEach((element) => {
    element.style.height = `${512/gridSize}px`;
    element.style.width = `${512/gridSize}px`;
  });

  squares.forEach((element) => {
    element.addEventListener('mousemove', () => {
      element.style.backgroundColor = 'gray';
    });
  });
}

createGrid();

newGridButton.addEventListener('click', () => {
  gridSize = prompt('Enter the number of squares per side for the new grid:');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid();
});
