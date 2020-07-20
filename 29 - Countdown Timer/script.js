let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
  clearInterval(countdown); // clear any active timers
  const now = Date.now(); // miliseconds
  const then = now + seconds * 1000; // when it stops
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display
    displayTimeLeft(secondsLeft);
  }, 1000);
}

// get the actual second input
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display =
    minutes + ":" + (remainderSeconds < 10 ? "0" : "") + remainderSeconds;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const adjustedHours = hours > 12 ? hours - 12 : hours;
  const mins = end.getMinutes();
  endTime.textContent =
    "Be Back At: " + adjustedHours + ":" + (mins < 10 ? "0" : "") + mins;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));

document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
