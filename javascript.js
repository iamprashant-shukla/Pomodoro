// Select HTML elements we need
const timerDisplay = document.querySelector('.timer'); // Selects the timer element to update it.
const startButton = document.querySelector('.button-30:nth-child(1)'); // First button (Start).
const pauseButton = document.querySelector('.button-30:nth-child(2)'); // Second button (Pause).
const stopButton = document.querySelector('.button-30:nth-child(3)'); // Third button (Stop).

// Timer variables
let totalTime = 25 * 60; // 25 minutes converted to seconds.
let countdown; // This will store the timer interval (to stop or pause it).
let isRunning = false; // Tracks if the timer is running.

// Function to start the timer
function startTimer() {
  if (isRunning) return; // If the timer is already running, do nothing.

  isRunning = true; // Set timer to running.

  // Update the timer every second
  countdown = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(countdown); // Stop the timer when it reaches 0.
      isRunning = false; // Timer stops running.
      alert('Time’s up!'); // Optional: Alert when the time is up.
    } else {
      totalTime--; // Decrease the time by 1 second.
      updateDisplay(); // Update the display to show the new time.
    }
  }, 1000); // Runs the function every 1000ms (1 second).
}

// Function to update the timer display
function updateDisplay() {
  const minutes = Math.floor(totalTime / 60); // Calculate remaining minutes.
  const seconds = totalTime % 60; // Calculate remaining seconds.
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Format as MM:SS.
}

// Function to pause the timer
function pauseTimer() {
  clearInterval(countdown); // Stops the interval.
  isRunning = false; // Set running to false.
}

// Function to stop and reset the timer
function stopTimer() {
  clearInterval(countdown); // Stops the interval.
  totalTime = 25 * 60; // Resets the time to 25 minutes.
  isRunning = false; // Set running to false.
  updateDisplay(); // Update the display to show the reset time.
}

// Attach event listeners to the buttons
startButton.addEventListener('click', startTimer); // Calls startTimer when Start is clicked.
pauseButton.addEventListener('click', pauseTimer); // Calls pauseTimer when Pause is clicked.
stopButton.addEventListener('click', stopTimer); // Calls stopTimer when Stop is clicked.

// Initialize the timer display
updateDisplay(); // Sets the display to the initial 25:00.