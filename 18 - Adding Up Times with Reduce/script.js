const timeNodes = [...document.querySelectorAll("[data-time")];
const seconds = timeNodes
  .map((node) => node.dataset.time) // dataset strings
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs; // number of seconds in each
  })
  .reduce((total, vidSeconds) => total + vidSeconds); // total seconds

// turn the total seconds into hours, minutes and seconds
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600); // 3600: seconds in an hour
secondsLeft %= 3600;
const mins = Math.floor(secondsLeft / 60); // 60: secs in a minute
secondsLeft %= 60;

console.log(hours, mins, secondsLeft);
