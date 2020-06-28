const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Console.
// Regular
console.log("eae");

// Interpolated
console.log("uma %s string", "bela");

// Styled
console.log("%c tékst", "color:black; background:blue");

// warning!
console.warn("Oh Noooo");

// Error :|
console.error("Crap!");

// Info
console.info("Web dev is awesome.");

// Testing
console.assert(1 === 2, "Errô!");

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("hello");
console.count("hello");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/isaacMuniz")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// table
console.table(dogs);
