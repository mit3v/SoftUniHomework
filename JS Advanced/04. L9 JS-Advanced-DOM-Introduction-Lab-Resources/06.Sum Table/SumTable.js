function sumTable() {
    let sum = 0;
    const productsArr = Array.from(document.getElementsByTagName("tr")); // document.querySelectorAll("table tr");
    for (i = 1; i < productsArr.length - 1; i++) {
        sum += Number(productsArr[i].children[1].textContent);
    }
    document.getElementById("sum").textContent = sum;
}