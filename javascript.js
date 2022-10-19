const container = document.getElementById('gridContainer');
const pen = document.getElementById('pen');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clearBtn = document.getElementById('clearBtn');
const gridSize = document.getElementById('gridSize');
const sliderOutput = document.getElementById('sliderOutput');
let items = document.querySelectorAll('.grid-item');



gridSize.textContent = sliderOutput.value;
sliderOutput.oninput = function () {
    gridSize.textContent = this.value;
}


function generateGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
    }
    hoverBlack();

};

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
            console.log("mouse in");
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



generateGrid(16, 16);