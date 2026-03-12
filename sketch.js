const container = document.querySelector(".container");

function createGrid(size){
    

    for(let i = 1; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.opacity = "0.3";
        container.appendChild(square);
    }
}

createGrid(16);