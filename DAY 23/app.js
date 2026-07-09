let btn = document.getElementById("generate-btn");
let colorBox = document.getElementById("color-box");
let hexCodeText = document.getElementById("hex-code");
let hexContainer = document.querySelector(".hex-code-container");

function generateColor() {
    // Generate random hex color ensuring it's always 6 digits
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    // Update UI
    colorBox.style.backgroundColor = randomColor;
    hexCodeText.textContent = randomColor.toUpperCase();
    
    // Add a subtle animation to the hex code
    hexCodeText.style.transform = 'scale(1.1)';
    setTimeout(() => {
        hexCodeText.style.transform = 'scale(1)';
    }, 150);
}

// Optional: Click to copy functionality
hexContainer.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(hexCodeText.textContent);
        let originalText = hexCodeText.textContent;
        hexCodeText.textContent = "COPIED!";
        setTimeout(() => {
            hexCodeText.textContent = originalText;
        }, 1000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});

// Initial color generation on load
generateColor();

btn.addEventListener("click", generateColor);