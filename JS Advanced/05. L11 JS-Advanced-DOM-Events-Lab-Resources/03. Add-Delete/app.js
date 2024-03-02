function addItem() {

const textRef = document.getElementById("newItemText");
const text = textRef.value;
if (text.length == 0) {
    return;
}
const liElement = document.createElement("li");
liElement.textContent = text;
const deleteButton = document.createElement("a");
deleteButton.textContent = "[Delete]";
deleteButton.href = "#";
deleteButton.addEventListener("click", onDelete);
liElement.appendChild(deleteButton);

const ulRef = document.getElementById("items");
ulRef.appendChild(liElement);
document.getElementById("newItemText").value = "";

function onDelete(event) {
    console.log("delete ckicked", event.target);
    // event.target.parentElement.remove();
    const aElementRef = event.target;
    const liElementRef = aElementRef.parentElement;
    liElementRef.remove();
}

}