function addItem() {

    let textRef = document.getElementById("newItemText");
    let valueRef = document.getElementById("newItemValue");

    let newOption = document.createElement("option");
    newOption.textContent = textRef.value;
    newOption.value = valueRef.value;

    let selectMenuRef = document.getElementById("menu");
    selectMenuRef.appendChild(newOption);

    textRef.value = "";
    valueRef.value = "";
}