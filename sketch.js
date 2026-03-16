const container = document.querySelector(".container");
const button = document.getElementById("resizeBtn");

const reset = document.getElementById("reset");

// create the grid canvas
function createGrid(size){
    container.innerHTML = "";

    const squareSize = 640 / size; // taking the size of the grid container and dividing it by the size

    for(let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.opacity = "0.1";
        container.appendChild(square);
    }

    // hovering over the squares changes the background color of the squares to black
    const squares = document.querySelectorAll(".square");
    // iterate through each square and add a mouse listener to "hover"
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            // Set background color to black
            square.style.backgroundColor = "black";

            // Add increasing opacity everytime you hover over a square.
            let currentOpacity = parseFloat(square.style.opacity);
            if(currentOpacity < 1){
                square.style.opacity = (currentOpacity + 0.1).toString();
            }
        });

    });

}

createGrid(16);

button.addEventListener("click", () => {
    let newSize = prompt("Enter the number of squares per side (Maximum 100):");
    newSize = parseInt(newSize);

    if(newSize && newSize > 0 && newSize <= 100){
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100");
    }
});

// makes the graph back to a 16 x16;
reset.addEventListener("click", () => {
    createGrid(16);
});