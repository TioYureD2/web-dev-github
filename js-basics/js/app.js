let userAge = 26;
let userName = "Yure Oliveira";
let hobbies = [
  " Watch races",
  " Play some music",
  " Drink some coffee",
  " Date my girlfriend",
];
let job = {
  title: "Developer",
  city: "Maricá",
  stateOrProvince: "Rio de Janeiro",
  started: "June, 2022",
  finished: "present",
  salary: 36000,
};
let adultYears;
function calculateAdultYears(x){
  return x - 18;
}

adultYears = calculateAdultYears(userAge);
console.log(adultYears);
userAge = 68;
adultYears = calculateAdultYears(userAge);
console.log(adultYears);
userAge = 108;
adultYears = calculateAdultYears(118);
console.log(adultYears);

let person = {
  name: "Yure",
  greet(){
    console.log("Hello!");
  }
};

person.greet();