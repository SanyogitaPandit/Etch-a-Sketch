function getRandomRGB() {
    let r = Math.round((Math.random() * 255));
    let g = Math.round((Math.random() * 255));
    let b = Math.round((Math.random() * 255));
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeBackgroundColor(event) {
    let rgbColor = event.currentTarget.style.backgroundColor;
    if (rgbColor == "") {
        event.currentTarget.style.backgroundColor = getRandomRGB();
    }
    else {
        rgbColor = rgbColor.replace(/[^\d,]/g, '').split(',');
        rgbColor[0] = rgbColor[0] - Math.round(rgbColor[0] * (0.1));
        rgbColor[1] = rgbColor[1] - Math.round(rgbColor[1] * (0.1));
        rgbColor[2] = rgbColor[2] - Math.round(rgbColor[2] * (0.1));
        event.currentTarget.style.backgroundColor = "rgb(" + rgbColor[0] + ", " + rgbColor[1] + ", " + rgbColor[2] + ")";
    }
}

// function that builds a grid in the "container"
function createGrid(x) {
    let container = document.getElementById("container");
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {

            let grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.width = 960 / x;
            grid.style.height = 960 / x;
            grid.addEventListener("mouseover", changeBackgroundColor);
            container.append(grid);
        };
    };
};

let classGrid = document.geatt
// function that clears the grid
function clearGrid() {

    let grids = document.getElementsByClassName("grid");
    for (let index = grids.length; index > 0;) {
        grids[--index].remove();
    }
};

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid() {
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
function ready() {
    createGrid(16);
    let elements = document.getElementsByClassName("newGrid");
    for (let index = 0; index < elements.length; index++) {
        elements[index].addEventListener("click", refreshGrid);
    }
}
