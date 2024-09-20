console.log("Hey");
let equation = [];
let lastWasOperator = false;

function updateDisplay(content) {
  document.querySelector(".display").textContent = content;
}

function isOperator(char) {
  return ["+", "-", "*", "/", "%", "^"].includes(char);
}

function displayKey(key) {
  const display = document.querySelector(".display");
  if (isOperator(key)) {
    if (lastWasOperator) return;

    if (display.textContent != "" && !lastWasOperator) {
      updateDisplay(display.textContent + key);

      equation.push(key);
      lastWasOperator = true;
    }
  } else if (key === "=") {
    calc();
    lastWasOperator = false;
  } else {
    updateDisplay(display.textContent + key);
    equation.push(key);
    lastWasOperator = false;
  }
}
function calc() {
  const operators = ["+", "-", "*", "/", "%", "^"];

  const opIndex = equation.findIndex((char) => operators.includes(char));
  if (opIndex === -1) return;
  const nr1 = parseFloat(equation.slice(0, opIndex).join(""));
  const nr2 = parseFloat(equation.slice(opIndex + 1).join(""));
  const op = equation[opIndex];
  let result;

  switch (op) {
    case "+":
      result = nr1 + nr2;
      break;
    case "-":
      result = nr1 - nr2;
      break;
    case "*":
      result = nr1 * nr2;
      break;
    case "/":
      result = nr1 / nr2;
      break;
    case "%":
      result = nr1 % nr2;
      break;
    case "^":
      result = nr1 ** nr2;
      break;
  }
  result.toFixed(3);
  updateDisplay(result);
  equation = [result];
  lastWasOperator = false;
}
function clearDisplay() {
  updateDisplay("");
  equation = [];
  lastWasOperator = false;
}

function backspace() {
  const display = document.querySelector(".display");
  const text = display.textContent;

  if (text.length > 0) {
    const newText = text.slice(0, -1);
    updateDisplay(newText);
    equation.pop();

    lastWasOperator = isOperator(equation[equation.length - 1]);
  }
}
