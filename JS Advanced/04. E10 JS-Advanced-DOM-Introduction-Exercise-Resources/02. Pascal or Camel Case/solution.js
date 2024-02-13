function solve() {

  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let result = "";
  let textArr = text.split(" ");
  let word = "";
  if (convention === "Camel Case") {
    for (i = 0; i < textArr.length; i++) {
      if (i == 0) {
        word = textArr[i].toLowerCase();
        result += word;
      } else {
        word = `${textArr[i].charAt(0).toUpperCase()}${textArr[i].slice(1).toLowerCase()}`;
        result += word;
      }
    }
  } else if (convention === "Pascal Case") {
    for (i = 0; i < textArr.length; i++) {
      word = `${textArr[i].charAt(0).toUpperCase()}${textArr[i].slice(1).toLowerCase()}`;
      result += word;
    }
  } else {
    result = "Error!";
  }
  document.getElementById("result").textContent = result;
}

