// Main Container
const maincontainer = document.getElementById('maincontainer');

// Title Container
const titlecontainer = document.getElementById('titlecontainer');

// Title
const title = document.createElement('div');
title.classList.add('title');
title.textContent = "Etch-a-Sketch";
title.setAttribute("style", "font-size: 48px; font-family: 'Jura', sans-serif; letter-spacing: 4px;");
titlecontainer.appendChild(title);

// Grid Container
const container = document.getElementById('container');

// Button Container
const buttoncontainer = document.getElementById('buttoncontainer');
buttoncontainer.setAttribute("style", "display: flex; justify-content: center; padding: 12px; gap: 100px; flex-direction: column");

const rangeslider = document.getElementById("myRange");
rangeslider.classList.add('rangeslider');
const slideroutput = document.getElementById("slideroutput");
slideroutput.classList.add('slideroutput');
slideroutput.setAttribute("style", "display: flex; justify-content: center; font-family: 'Jura', sans-serif;")
slideroutput.textContent = (rangeslider.value + " x " + rangeslider.value);

let gridSize = rangeslider.value;
createGrid(); // draws grid with default slider value (25)

// Slider
rangeslider.oninput = function() { 
    gridSize = parseInt(this.value);
    slideroutput.textContent = (this.value + " x " + this.value);
    createGrid();
}

// Button
const button1 = document.createElement('button'); // black
const button2 = document.createElement('button'); // rgb
const button3 = document.createElement('button'); // eraser
button1.classList.add('button1');
button2.classList.add('button2');
button3.classList.add('button3');
button1.textContent = "Black";
button2.textContent = "Random";
button3.textContent = "Eraser";
buttoncontainer.appendChild(button1);
buttoncontainer.appendChild(button2);
buttoncontainer.appendChild(button3);

// Grid (deletes old grid if exists and draws a new one)
function createGrid() {
    const gridDelete = document.querySelectorAll('.gridDiv');
    gridDelete.forEach(i => {
        i.remove();
    });

    for (let i = 0; i < (gridSize*gridSize); i++) {
        const gridDiv = document.createElement('div');
        gridDiv.id = "id" + i;
        gridDiv.className = 'gridDiv';
        gridDiv.setAttribute("style", "display: inline-block; box-shadow: -1px -1px 0px black inset; float: left; width:"+600/(gridSize)+"px; height:"+600/(gridSize)+"px");
        container.appendChild(gridDiv);
    }
}

// Black color
button1.addEventListener('click', () => {
    const grids = container.querySelectorAll('div');
    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mouseover', () => {
            grids[i].style.background = 'black';
        })
    }
})

// Random RGB color
button2.addEventListener('click', () => {
    const grids = container.querySelectorAll('div');
    for (let i = 0; i < grids.length; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        grids[i].addEventListener('mouseover', () => {
            grids[i].style.background = `rgb(${r},${g},${b})`;
        })
    }
})

// Eraser
button3.addEventListener('click', () => {
    const grids = container.querySelectorAll('div');
    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mouseover', () => {
            grids[i].style.background = 'white';
        })
    }
})