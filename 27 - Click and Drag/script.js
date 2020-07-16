const slider = document.querySelector(".items");
let isClicking = false;
let clickStartX;
let scrollLeft;

// Mouse Down
slider.addEventListener("mousedown", (e) => {
  isClicking = true;
  slider.classList.add("active");
  clickStartX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
// Mouse Leave
slider.addEventListener("mouseleave", () => {
  isClicking = false;
  slider.classList.remove("active");
});
// Mouse Up
slider.addEventListener("mouseup", () => {
  isClicking = false;
  slider.classList.remove("active");
});
// Mouse Move
slider.addEventListener("mousemove", (e) => {
  if (!isClicking) return; // stop the function from running
  e.preventDefault(); // don't slecet elements inside - like text
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - clickStartX) * 6;
  slider.scrollLeft = scrollLeft - walk;
});
