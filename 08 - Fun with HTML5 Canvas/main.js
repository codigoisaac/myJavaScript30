const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = "round";
ctx.lineCap = "round";
// enable to add shadow
// ctx.globalCompositeOperation = "multiply";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;

  // change color
  ctx.strokeStyle = `hsl(${hue}, 50%, 50%)`;

  // Draw!
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // mouse brush (remove to see bug)
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // change color
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  // change line width
  // ctx.lineWidth = hue;
  if (ctx.lineWidth >= 200 || ctx.lineWidth <= 1) {
    direction = !direction; // flip direction
  }
  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  // reset point (remove to see bug)
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
