for (let i = 0; i < 10; i++) {
  console.log(i);
}

let usersMamakos = ["Yure", "Byel", "Biri", "Joel", "Rafa", "Paulor", "Artu"];

for (let users of usersMamakos) {
  console.log(users);
}

let isLoggedIn = {
  name: "Yure",
  age: 26,
  isAdmin: true,
};

for (let keys in isLoggedIn) {
  console.log(keys);
  console.log(isLoggedIn[keys]);
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit??");
}

console.log("Done");
