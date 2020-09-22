function resetGrid() {
    // delete container full of squares, clearing the page
    let target = document.querySelector('.container');
    target.remove();

    let newSize = NaN;
    // prompt for a new container size and create a new grid
    do{
        newSize = prompt('Please enter a size for the new grid.');
        if(isNaN(newSize) || newSize <= 0) {
            alert("That isn't a valid number!");
        }
    }while(isNaN(newSize) || newSize <= 0);
    createGrid(newSize);
}

function changeColor(e) {
    e.target.style.backgroundColor = "#182628";
}

function createGrid(size) {
    const totalSquares = size * size;
    // create a contianer for the squares
    let gridContainer = document.createElement('div');
    gridContainer.setAttribute("class", "container");
    gridContainer.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
    // fill the container with squares
    for(i = 0; i < totalSquares; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.setAttribute("class", "gridSquare");
        gridSquare.setAttribute("id", i);
        gridContainer.appendChild(gridSquare);    
    }
    document.body.appendChild(gridContainer);
    // add mouseover listeners to all the squares
    const squares = document.querySelectorAll('.gridSquare');
    squares.forEach(square => square.addEventListener('mouseover', changeColor));
}

document.getElementById("reset").addEventListener("click", resetGrid);

createGrid(16);