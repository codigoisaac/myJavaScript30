const pressed = [];
const secretCode = "isaacdevelops";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  console.log(pressed);
  if (pressed.join("").includes(secretCode)) {
    console.log("YEAH!");
    cornify_add();
  }
});
