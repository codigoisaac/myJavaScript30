// Elements
const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

// Event Listeners
speed.addEventListener("mousemove", handleMove);

// Functions
function handleMove(e) {
  const y = e.pageY - this.offsetTop,
    percent = y / this.offsetHeight,
    min = 0.4,
    max = 4,
    height = Math.round(percent * 100) + "%",
    playbackRate = percent * (max - min) + min;

  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
}
