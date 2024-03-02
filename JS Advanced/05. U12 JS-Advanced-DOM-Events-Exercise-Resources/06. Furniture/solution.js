function solve() {

  const generateButton = document.querySelectorAll("button")[0];
  generateButton.addEventListener("click", generateF);

  function generateF(event) {
    const jsonString = document.querySelectorAll("textarea")[0].value;
    const arr = JSON.parse(jsonString);
    
    for (obj of arr) {
      let newTrElement = document.createElement("tr");
      let tdElement1 = document.createElement("td");
      let imgElement = document.createElement("img");
      imgElement.src = obj.img;
      tdElement1.appendChild(imgElement);
      newTrElement.appendChild(tdElement1);

      const readyElementRef = document.querySelector("tbody");
      readyElementRef.appendChild(newTrElement);

      for (key in obj) {
        if (key !== "img") {
          let tdElement2 = document.createElement("td");
          let pElement2 = document.createElement("p");
          pElement2.textContent = obj[key];
          tdElement2.appendChild(pElement2);
          newTrElement.appendChild(tdElement2);
        }
      }
      let markElement = document.createElement("input");
      let tdElementForMark = document.createElement("td");
      markElement.type = "checkbox";
      tdElementForMark.appendChild(markElement);
      newTrElement.appendChild(tdElementForMark);
    }

  }

  const buyButton = document.querySelectorAll("button")[1];
  buyButton.addEventListener("click", buyF);

  function buyF() {
    let finalText = "Bought furniture: ";
    let finalPrice = 0;
    let finalDecFactor = 0;
    let counter = 0;
    let checkedBoxArr = Array.from(document.querySelectorAll("[type='checkbox']:checked"));
    for (el of checkedBoxArr) {
      if (counter !== 0) {
        finalText += ", ";
      }
      finalText += el.parentElement.parentElement.children[1].textContent;
      finalPrice += Number(el.parentElement.parentElement.children[2].textContent);
      finalDecFactor += Number(el.parentElement.parentElement.children[3].textContent);
      counter++;
    }
    finalDecFactor = finalDecFactor / counter;
    const buyTextArea = document.querySelectorAll("textarea")[1];
    buyTextArea.value = finalText + "\n" + "Total price: " + finalPrice.toFixed(2) + "\n" + "Average decoration factor: " + finalDecFactor.toFixed(1);

  }



}