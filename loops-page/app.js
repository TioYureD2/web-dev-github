//example 1

let calcButton = document.getElementById("calc-but");
let finalResult = document.getElementById("calculated-sum");

function sumUpToNumber() {
  let result = 0;
  let userNumber = document.getElementById("user-number").value;

  for (let i = 0; i <= userNumber; i++) {
    result = i + result;
  }
  finalResult.textContent = result;
  finalResult.style.display = "block";
}

calcButton.addEventListener("click", sumUpToNumber);

//example 2

let allLinks = document.querySelectorAll("#highlight-links a");
let highlightButton = document.getElementById("highlight-button");

function highlightLinks() {
  for (let singleLink of allLinks) {
    singleLink.className = "highlight";
  }
}

highlightButton.addEventListener("click", highlightLinks);

//example 3
let displayUserDataButton = document.getElementById("display-user-data-button");
let dataOutputList = document.getElementById("output-user-data");
let generalUserData = {
  name: "Yure",
  age: 26,
  job: "developer",
  started: "June, 2022",
};

function outputData() {
  dataOutputList.innerHTML = "";
  for (userData in generalUserData) {
    let newListItem = document.createElement("li");
    newListItem.textContent =
      userData.toUpperCase() + ": " + generalUserData[userData] + ";";
    dataOutputList.append(newListItem);
  }
}
displayUserDataButton.addEventListener("click", outputData);

//example 4

let rollDiceButton = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function showRollNumber() {
  let diceRolls = document.getElementById("dice-rolls");
  let userTargetNumber = document.getElementById("user-target-number");
  let enteredNumber = userTargetNumber.value;
  diceRolls.innerHTML = "";
  let numberOfRolls = 0;
  let hasRolledTargetNumber = false;

  if (enteredNumber < 0 || enteredNumber > 6) {
    alert("Enter a valid number!");
  } else {
    while (!hasRolledTargetNumber) {
      let rolledNumber = rollDice();
      numberOfRolls++;
      let newDiceListItem = document.createElement("li");
      newDiceListItem.textContent =
        "Roll " + numberOfRolls + ": " + rolledNumber;
      diceRolls.append(newDiceListItem);
      hasRolledTargetNumber = rolledNumber == enteredNumber;
    }
  }
  let outputTotalRolls = document.getElementById("output-total-rolls");
  let outputTargetNumber = document.getElementById("output-target-number");
  outputTargetNumber.textContent = enteredNumber;
  outputTotalRolls.textContent = numberOfRolls;
}
rollDiceButton.addEventListener("click", showRollNumber);
