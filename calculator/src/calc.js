var calculation = "";

const userInp = document.getElementById("userInp");
const calcOut = document.getElementById("calcOut");

function evalString(value) {
  calculation += value;
  userInp.value = calculation;
}

function removeChar() {
  calculation = calculation.substring(0, calculation.length - 1);
  userInp.value = calculation;
}

function getOutput() {
  if (calculation.length === 0 || "") {
    alert("Input Required");
    return;
  }
  try {

    calcOut.value = eval(calculation);
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

module.exports = {
  calculation,
  userInp,
  calcOut,
  evalString,
  removeChar,
  getOutput,
  reset
}
