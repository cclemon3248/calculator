let numberBorder = "";
let boolean = false
let dots = true;
let dot2 = true;
let dot3 = true;

const dot = ".";
const numberDisplay = document.getElementById("number-display");
const numberAC = document.getElementById("number-ac");
const numberEqual = document.getElementById("number-equal");
const number0 = document.getElementById("number0");
const number00 = document.getElementById("number00");
const numberDot = document.getElementById("number-dot");
const numberDivide = document.getElementById("number-divide");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const numberMath = document.getElementById("number-math");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const number6 = document.getElementById("number6");
const numberMinus = document.getElementById("number-minus");
const number7 = document.getElementById("number7");
const number8 = document.getElementById("number8");
const number9 = document.getElementById("number9");
const numberPlus = document.getElementById("number-plus");


numberAC.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  numberAC.classList.add("click-td");
  numberBorder = numberAC;
  boolean = true
  numberDisplay.textContent = "0";
  dots = true;
  dot2 = true;
  dot3 = true;
});

numberEqual.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  numberEqual.classList.add("click-td");
  numberBorder = numberEqual;
  boolean = true;
  switch (numberDisplay.textContent.slice(-1)) {
    case "+":
      break;
    case "-":
      break;
    case "*":
      break;
    case "/":
      break;
    default:
      numberDisplay.textContent = eval(numberDisplay.textContent);
      dots = true;
      dot2 = true;
      dot3 = true;
      break;
  }
});

numberPlus.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  numberPlus.classList.add("click-td");
  numberBorder = numberPlus;
  boolean = true;
  switch (numberDisplay.textContent.slice(-1)) {
    case "+":
      break;
    case "-":
      break;
    case "*":
      break;
    case "/":
      break;
    case ".":
      break;
    default:
      numberDisplay.textContent += "+";
      dots = true;
      break;
  }
});

numberMinus.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  numberMinus.classList.add("click-td");
  numberBorder = numberMinus;
  boolean = true;
  switch (numberDisplay.textContent.slice(-1)) {
    case "+":
      break;
    case "-":
      break;
    case "*":
      break;
    case "/":
      break;
    case ".":
      break;
    default:
      numberDisplay.textContent += "-";
      dots = true;
      break;
  }
});

numberMath.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  numberMath.classList.add("click-td");
  numberBorder = numberMath;
  boolean = true;
  switch (numberDisplay.textContent.slice(-1)) {
    case "+":
      break;
    case "-":
      break;
    case "*":
      break;
    case "/":
      break;
    case ".":
      break;
    default:
      numberDisplay.textContent += "*";
      dots = true;
      break;
  }
});

numberDivide.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  numberDivide.classList.add("click-td");
  numberBorder = numberDivide;
  boolean = true;
  switch (numberDisplay.textContent.slice(-1)) {
    case "+":
      break;
    case "-":
      break;
    case "*":
      break;
    case "/":
      break;
    case ".":
      break;
    default:
      numberDisplay.textContent += "/";
      dots = true;
      break;
  }
});

numberDot.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  numberDot.classList.add("click-td");
  numberBorder = numberDot;
  boolean = true;
  if (numberDisplay.textContent.slice(-1) === "+") {
    numberDisplay.textContent += "";
  } else if (numberDisplay.textContent.slice(-1) === "-") {
    numberDisplay.textContent += "";
  } else if (numberDisplay.textContent.slice(-1) === "*") {
    numberDisplay.textContent += "";
  } else if (numberDisplay.textContent.slice(-1) === "/") {
    numberDisplay.textContent += "";
  } else if (dots === true && dot2 === true && dot3 === true) {
    numberDisplay.textContent += ".";
    dots = false;
    dot2 = false;
    dot3 = false;
  }
});


number0.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  number0.classList.add("click-td");
  numberBorder = number0;
  boolean = true;
  if (numberDisplay.textContent !== "0") {
    numberDisplay.textContent += "0";
  }
  if (dots === true && dot2 === true) {
    dot3 = true;
  }
  dot2 = true;
});

number00.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  number00.classList.add("click-td");
  numberBorder = number00;
  boolean = true;
  if (numberDisplay.textContent !== "0") {
    numberDisplay.textContent += "00";
  }
  if (dots === true && dot2 === true) {
    dot3 = true;
  }
  dot2 = true;
});

number1.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  number1.classList.add("click-td");
  numberBorder = number1;
  boolean = true;
  if (numberDisplay.textContent === "0") {
    numberDisplay.textContent = "";
  }
  numberDisplay.textContent += "1";
  if (dots === true && dot2 === true) {
    dot3 = true;
  }
  dot2 = true;
});

number2.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  number2.classList.add("click-td");
  numberBorder = number2;
  boolean = true;
  if (numberDisplay.textContent === "0") {
    numberDisplay.textContent = "";
  }
  numberDisplay.textContent += "2";
  if (dots === true && dot2 === true) {
    dot3 = true;
  }
  dot2 = true;
});

number3.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  number3.classList.add("click-td");
  numberBorder = number3;
  boolean = true;
  if (numberDisplay.textContent === "0") {
    numberDisplay.textContent = "";
  }
  numberDisplay.textContent += "3";
  if (dots === true && dot2 === true) {
    dot3 = true;
  }
  dot2 = true;
});


number4.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  number4.classList.add("click-td");
  numberBorder = number4;
  boolean = true;
  if (numberDisplay.textContent === "0") {
    numberDisplay.textContent = "";
  }
  numberDisplay.textContent += "4";
  if (dots === true && dot2 === true) {
    dot3 = true;
  }
  dot2 = true;
});

number5.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  number5.classList.add("click-td");
  numberBorder = number5;
  boolean = true;
  if (numberDisplay.textContent === "0") {
    numberDisplay.textContent = "";
  }
  numberDisplay.textContent += "5";
  if (dots === true && dot2 === true) {
    dot3 = true;
  }
  dot2 = true;
});

number6.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  number6.classList.add("click-td");
  numberBorder = number6
  boolean = true
  if (numberDisplay.textContent === "0") {
    numberDisplay.textContent = "";
  }
  numberDisplay.textContent += "6";
  if (dots === true && dot2 === true) {
    dot3 = true;
  }
  dot2 = true;
});


number7.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  number7.classList.add("click-td");
  numberBorder = number7;
  boolean = true;
  if (numberDisplay.textContent === "0") {
    numberDisplay.textContent = "";
  }
  numberDisplay.textContent += "7";
  if (dots === true && dot2 === true) {
    dot3 = true;
  }
  dot2 = true;
});

number8.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  number8.classList.add("click-td");
  numberBorder = number8;
  boolean = true;
  if (numberDisplay.textContent === "0") {
    numberDisplay.textContent = "";
  }
  numberDisplay.textContent += "8";
  if (dots === true && dot2 === true) {
    dot3 = true;
  }
  dot2 = true;
});

number9.addEventListener("click", ()  => {
  if (boolean === true) {
    numberBorder.classList.remove("click-td");
  }
  number9.classList.add("click-td");
  numberBorder = number9;
  boolean = true;
  if (numberDisplay.textContent === "0") {
    numberDisplay.textContent = "";
  }
  numberDisplay.textContent += "9";
  if (dots === true && dot2 === true) {
    dot3 = true;
  }
  dot2 = true;
});