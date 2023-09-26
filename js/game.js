const cards = document.querySelectorAll(".card-body");
const timerElement = document.getElementById("timer");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchCount = 0; // To track the number of matches
let startTime; // To store the start time
let timerInterval; // To store the timer interval

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        secondCard = this;
        hasFlippedCard = false;
        checkForMatch();
    }
}

function startTimer() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Call immediately to avoid initial delay
}

function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const remainingTime = 60000 - elapsedTime; // 1 minute in milliseconds

    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Time's up! You've lost.";
        handleLoss(); // Call a function to handle the loss condition
    } else {
        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        matchCount++;
        if (matchCount === cards.length / 2) {
            stopTimer();
            alert("Congratulations! You've won!");
        }
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        lockBoard = false;
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function handleLoss() {
    cards.forEach((card) => card.removeEventListener("click", flipCard));
    lockBoard = true;
    setTimeout(() => {
        cards.forEach((card) => card.classList.remove("flip"));
        alert("Time's up! You've lost.");
        shuffle();
        cards.forEach((card) => {
            card.addEventListener("click", flipCard);
        });
        lockBoard = false;
        resetBoard();
        startTimer();
    }, 1500);
}

function shuffle() {
    cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}

// Shuffle the cards initially
shuffle();

// Add click event listeners to cards
cards.forEach((card) => card.addEventListener("click", flipCard));

// Start timer when the page loads
startTimer();
