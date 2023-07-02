const htmlCounter = document.getElementById("dynamic");
const inputField = document.getElementById("prod-name");
const maximumLength = inputField.maxLength;

function countRemainingCharacters(event) {
  const aText = event.target.value;
  const textLength = aText.length;
  const remainingCharacters = maximumLength - textLength;

  htmlCounter.textContent = remainingCharacters;
}

inputField.addEventListener("input", countRemainingCharacters);