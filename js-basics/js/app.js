let firstParagraph = document.body.querySelector("p");

function changeText() {
  firstParagraph.textContent = "Clicked";
}

firstParagraph.addEventListener("click", changeText);

//input

let inputField = document.querySelector("input");

function getInput(event) {
  let text = event.target.value;
  console.log(text);
//   console.log(event);
}

inputField.addEventListener("input", getInput);
