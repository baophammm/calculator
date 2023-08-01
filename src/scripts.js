let display = document.querySelector("#display");
let num1 = "";
let num2 = "";
let operator = null;
let clearNextOperation = false;

const addNumber = (num) => {
  if (clearNextOperation === true) {
    clearNextOperation = false;
    num1 = "";
    num2 = "";
    operator = null;
  }

  let char;
  if (num === ".") {
    char = ".";
  } else if (Number.isInteger(num)) {
    char = num.toString();
  }
  if (operator === null) {
    if (num === ".") {
      if (num1 === "") {
        char = "0.";
      } else if (num1.includes(".")) {
        char = "";
      }
    }
    num1 += char;
    display.innerHTML = num1;
  } else {
    if (num === ".") {
      if (num2 === "") {
        char = "0.";
      } else if (num2.includes(".")) {
        char = "";
      }
    }
    num2 += char;
    display.innerHTML = num1 + operator + num2;
  }
};

const setOperator = (newOperator) => {
  if (clearNextOperation === true) {
    clearNextOperation = false;
    operator = null;
    num2 = "";
  }

  if (operator) {
    calculate(true);
  }
  operator = newOperator;
  display.innerHTML = num1 + operator;
};

const calculate = (isOperator) => {
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "x":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      result = parseFloat(num1) / parseFloat(num2);
  }

  if (!result) {
    clearNextOperation = true;
    return;
  } else {
    display.textContent = result;
  }

  num1 = result;
  if (isOperator === true) {
    num2 = "";
  } else if (isOperator === false) {
    clearNextOperation = true;
  }
};

const equal = () => {
  calculate(false);
};

function clearCalc() {
  num1 = "";
  num2 = "";
  operator = null;
  display.innerHTML = "";
}

function deleteChar() {
  if (operator === null) {
    num1 = num1.substring(0, num1.length - 1);
    display.innerHTML = num1;
  } else {
    num2 = num2.substring(0, num2.length - 1);
    display.innerHTML = num2;
  }
}
