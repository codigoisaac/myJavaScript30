// Elements
const triggers = document.querySelectorAll(".cool > li");
const bg = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

// Functions
function handleEnter() {
  // show content
  this.classList.add("trigger-enter");
  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");
    }
  }, 150);
  bg.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  bg.style.setProperty("height", `${coords.height}px`);
  bg.style.setProperty("width", `${coords.width}px`);
  bg.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  // hide content
  this.classList.remove("trigger-enter", "trigger-enter-active");
  bg.classList.remove("open");
}

// Event Listeners
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
