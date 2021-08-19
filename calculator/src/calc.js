var calculation = "";

const userInp = document.getElementById("userInp");
const calcOut = document.getElementById("calcOut");

function evalString(value) {
  calculation += value;
  userInp.value() = calculation;
}

function removeChar() {
  calculation = calculation.substring(0, calculation.length - 1);
  userInp.value = calculation;
}

function getOutput() {
  if (calculation.length == 0 || "") {
    alert("Input Required");
    return;
  }
  try {
    ans = eval(calculation);
    calcOut.value = ans
  }
  catch (error) {
    alert("Invalid Input")
  }
}

function reset() {
  userInp.value = "";
  calcOut.value = "";
  calculation = "";
}