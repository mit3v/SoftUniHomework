function addItem() {

    const textRef = document.getElementById("newItemText");
    const text = textRef.value;
    if (text.length == 0) {
        return;
    }
    const liElement = document.createElement("li");
    const ref = document.getElementById("items");
    liElement.textContent = text;
    ref.appendChild(liElement);
    textRef.value = "";

}




// същото е това тука;
// let text = document.getElementById("newItemText").value;
// let newRef = document.getElementById("items");
// const newElement = document.createElement("li");
// newElement.textContent = text;
// newRef.appendChild(newElement);