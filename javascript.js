const container = document.getElementById('container');



function generateGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-item";
    }
    hoverListen();
};

function hoverListen() {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            console.log("mouse in");
            item.style.backgroundColor = `black`;
        });

        item.addEventListener("mouseout", () => {
            item.style.backgroundColor = 'white';
        });
    });
};

function randomColor() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
  };

  generateGrid(16, 16);