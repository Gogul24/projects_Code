const box = document.getElementById('box');
let x = 0;
let y = 0;
const moveVal = 15;

document.addEventListener('keydown', event => {
    switch (event.key) {
        case "ArrowUp":
            y -= moveVal;
            break;
        case "ArrowDown":
            y += moveVal;
            break;
        case "ArrowLeft":
            x -= moveVal;
            break;
        case "ArrowRight":
            x += moveVal;
            break;
        default:
            return; // Exit function for other keys
    }
    
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
});
