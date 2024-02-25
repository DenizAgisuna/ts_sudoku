const Keyboard = window.SimpleKeyboard.default;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myKeyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button)
});

function onChange(input) {
//   document.querySelector(".input").value = input;
  console.log("Input changed", input);
}
document.addEventListener("keydown", (event) => {
    console.log(event.key)
    document.querySelectorAll(`.hg-activeButton`).forEach(element => {
        element.classList.remove("hg-activeButton")
     });
    document.querySelectorAll(`div[data-skbtn='${event.key}']`).forEach(element => {
        element.classList.add("hg-activeButton")
     });
    
    // do something
  });
function onKeyPress(button) {
    console.log(button)
  console.log("Button pressed", button);
  
 
}


