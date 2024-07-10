// Initialize variables for score, target number, and time
let score = 0;
let num = 0;
let time = 60;

// Create initial set of bubbles
createBubble();

// Function to create bubbles and add event listeners
function createBubble() {
    let temp = "";
    hit(); // Generate a new target number
    for (let i = 1; i < 160; i++) {
        let rn = Math.floor(Math.random() * 10);
        temp += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#bottum").innerHTML = temp;

    // Add click event listeners to each bubble
    let bubbles = document.querySelectorAll(".bubble");
    for (let bubble of bubbles) {
        bubble.addEventListener('click', function (event) {
            if (event.target.innerText == num) {
                newScore();
                createBubble(); // Recreate bubbles on correct hit
            } else {
                clearInterval(id); // Stop timer on incorrect hit
                document.querySelector("#bottum").innerHTML = `<h1>Your Score ${score}</h1>`;
            }
        });
    }
}

// Timer countdown function
let id = setInterval(() => {
    document.querySelector("#time").innerHTML = --time;
    if (time <= 0) {
        clearInterval(id); // Stop timer when it reaches zero
        document.querySelector("#bottum").innerHTML = `<h1>Your Score ${score}</h1>`;
    }
}, 1000);

// Function to generate a new target number
function hit() {
    num = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerHTML = num;
}

// Function to update score
function newScore() {
    score += 10;
    document.querySelector("#score").innerHTML = score;
}
