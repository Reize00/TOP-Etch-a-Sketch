function initDynamicGrid(size) {
    const totalSquares = size * size;
    let rowsString = "";
    let columnsString = "";
    for(i = 0; i < size; i++) {
        if(i === size -1) {
            rowsString +='1fr';
        } else {
            rowsString +='1fr ';
        }
        if(i === size -1) {
            columnsString += '1fr';
        } else {
            columnsString += '1fr ';
        }
    }

    let gridContainer = document.createElement('div');
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateRows = rowsString;
    gridContainer.style.gridTemplateColumns = columnsString;

    for(i = 0; i < totalSquares; i++) {
        let squareInGrid = document.createElement('div');

        gridContainer.appendChild(squareInGrid);
    }
}