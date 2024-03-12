"use strict";

// 1.
let value = 100;

if (value < 50) {
  console.log("ნაკლებია 50-ზე");
} else if (value > 20) {
  console.log("მეტია 20-ზე");
} else {
  console.log("შეცდომაა");
}

let conditionResult =
  value < 50 ? "ნაკლებია 50-ზე" : value > 20 ? "მეტია 20-ზე" : "შეცდომაა";

console.log(conditionResult);

// 2.
let userName = "Mariam";

if (userName === "Mariam") {
  console.log(true);
} else {
  console.log(false);
}

let nameResult =
  userName === "Mariam" ? true : false;

console.log(nameResult);

//3.

let userName1 = "Mariam";
switch (userName1) {
  case "Mariam":
    console.log(true);
    break;
  default:
    console.log(false);
}
