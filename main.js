const container = document.createElement("div");
container.classList.add('container')
document.body.append(container)

const grid = document.createElement('div');
grid.classList.add('grid');
const buttonList = document.createElement('div')
buttonList.classList.add('button-list')
const gridSizeButton = document.createElement('button')
gridSizeButton.textContent = "Grid size"
gridSizeButton.classList.add('grid-size-button')
buttonList.appendChild(gridSizeButton)

function gridMaker(gridSize){
    for (let i = 0; i < gridSize; i++){
        const gridRow = document.createElement('div');
        for (let i = 0; i < gridSize; i++){
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.addEventListener('mouseover',() => gridItem.style.backgroundColor = 'red')
            gridRow.appendChild(gridItem);
        }
        gridRow.classList.add('grid-row');
        grid.appendChild(gridRow)
    }
}

//create a default 16x16 grid
gridMaker(16)

//button functionality
gridSizeButton.addEventListener('click',() => {
    let gridSize = prompt("Enter a number between 1-100");
    while (grid.firstChild){
        grid.removeChild(grid.firstChild)
    };
    // if exceed 100 or below 0, create the default grid
    if (gridSize > 0 && gridSize < 101){
    gridMaker(gridSize);
    }else gridMaker(16);
});



container.appendChild(grid);
container.appendChild(buttonList);