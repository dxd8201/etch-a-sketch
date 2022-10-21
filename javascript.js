const container = document.getElementById('gridContainer');
const pen = document.getElementById('pen');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clearBtn = document.getElementById('clearBtn');
const secretBtn = document.getElementById('secret');
const gridSize = document.getElementById('gridSize');
const sliderOutput = document.getElementById('sliderOutput');
let items = document.querySelectorAll('.grid-item');

let value = sliderOutput.value;



function generateGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
    }
    hoverBlack();
};

gridSize.textContent = `${sliderOutput.value} X ${sliderOutput.value}` ;
sliderOutput.oninput = function () {
    let divsToRemove = document.querySelectorAll('.grid-item');
    value = `${this.value}`;
    gridSize.textContent = `${this.value} X ${this.value}`;
    container.style.setProperty('--grid-rows', value);
    container.style.setProperty('--grid-cols', value);

    //removes old grid
    for (i = divsToRemove.length - 1; i >= 0; i--) {
        divsToRemove[i].remove();
    }

    // creates a new grid
    for (i = 0; i < (value * value); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
    }
    hoverBlack();
}

function hoverBlack() {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            console.log("mouse in");
            item.style.backgroundColor = `black`;
        }); 
    });
};
    
pen.addEventListener('click', () => {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = `black`;
        });     
    });
});

rainbow.addEventListener('click', () => {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            console.log("mouse in");
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            item.style.backgroundColor = "#" + randomColor;
        });
    });
});

eraser.addEventListener('click', () => {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = 'white';
        });  
    });
})

clearBtn.addEventListener('click', () => {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = 'white';   
    });
});

secretBtn.addEventListener('click', () => {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0)';   
        }); 
    });
});

generateGrid(value, value);
