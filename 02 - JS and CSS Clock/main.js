function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const secondsHand = document.querySelector(".second-hand");
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const minutesHand = document.querySelector(".min-hand");
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  const hoursHand = document.querySelector(".hour-hand");
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(hours, minutes, seconds);
}
setInterval(setDate, 1000);
