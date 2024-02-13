function subtract() {
const firstNum = Number(document.getElementById("firstNumber").value);
// const firstNum = document.getElementById("firstNumber"); // ето това вече в debugger можем да му видим стойностите;
const secondNum = Number(document.getElementById("secondNumber").value);
let result = firstNum - secondNum;
document.getElementById("result").textContent = result;
}