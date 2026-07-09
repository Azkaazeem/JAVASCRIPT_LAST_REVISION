let btn = document.getElementById("generate-btn");
let colorBox = document.getElementById("color-box");

function generateColor() {
    let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    colorBox.style.backgroundColor = randomColor;
    colorBox.textContent = randomColor;
}

btn.addEventListener("click" , generateColor);