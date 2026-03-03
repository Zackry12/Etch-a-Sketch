const container = document.createElement("div");
container.classList.add('container')
document.body.append(container)

const grid = document.createElement('div');
grid.classList.add('grid');

for (let i=1;i<17;i++){
    const gridRow = document.createElement('div');
    for (let i=1;i<17;i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover',() => gridItem.style.backgroundColor = 'red')
        gridRow.appendChild(gridItem);
    }
    gridRow.classList.add('grid-row');
    grid.appendChild(gridRow)
}



container.appendChild(grid);