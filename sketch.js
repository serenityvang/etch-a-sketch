const container = document.querySelector(".container");
const button = document.querySelector(".gridSize");

// create the grid canvas
function createGrid(size){

    for(let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
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