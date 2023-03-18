const newGridButton = document.querySelector('#grid');
let gridSize = 16;
const container = document.querySelector('.container');

function createGrid() {
  // Remove all existing squares
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  
  // Create new squares with the specified grid size
  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
  }
  
  // Set the size of each square based on the grid size
  let squares = document.querySelectorAll('.square');
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  squares.forEach((element) => {
    element.style.height = `${512/gridSize}px`;
    element.style.width = `${512/gridSize}px`;
  });

  // Add event listener to change color on mouse move
  squares.forEach((element) => {
    element.addEventListener('mousemove', () => {
      element.style.backgroundColor = 'gray';
    });
  });
}

createGrid();

newGridButton.addEventListener('click', () => {
  gridSize = prompt('Enter the number of squares per side for the new grid:');
  if(gridSize>100) gridSize=16; // Reset gridSize if input value is greater than 100
  createGrid();
});
