const htmlCounter = document.getElementById("dynamic");
const inputField = document.getElementById("prod-name");
const maximumLength = inputField.maxLength;

function countRemainingCharacters(event) {
  const aText = event.target.value;
  const textLength = aText.length;
  const remainingCharacters = maximumLength - textLength;
  htmlCounter.textContent = remainingCharacters;

  if (remainingCharacters <= 60 && remainingCharacters > 30) {
    htmlCounter.className = "clear"
    inputField.className = "clear"
  } else if (remainingCharacters <= 30 && remainingCharacters > 10) {
    htmlCounter.className = "attention"
    inputField.className = "attention"
  }else if (remainingCharacters <= 10 && remainingCharacters > 0) {
    htmlCounter.className = "warning"
    inputField.className = "warning"
  }else {
    htmlCounter.className = "error"
    inputField.className = "error"
  } 
}

inputField.addEventListener("input", countRemainingCharacters);