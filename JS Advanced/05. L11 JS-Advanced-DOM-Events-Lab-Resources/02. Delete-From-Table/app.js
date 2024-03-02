function deleteByEmail() {

    // const inputRef = document.querySelector("label input"); // същото като на долния ред;
    const inputRef = document.querySelector('[name="email"]');
    const searchedText = inputRef.value;
    const tableRef = document.getElementById("customers");
    const rowsOfTableRef = tableRef.querySelectorAll("tbody tr");  // NodeList(4);
    // можеше и отведнъж да го направим горния ред: document.querySelectorAll("#customers tbody tr") 
    let rowsOfTableArr = Array.from(rowsOfTableRef);
    let success = false;
    for (rowRef of rowsOfTableArr) {   // rowRef си е референция
        // console.log(row);
        // console.log(row.children[1].textContent)
        if (searchedText === rowRef.children[1].textContent) {
            rowRef.remove();
            success = true;
        }
    }
    const output = document.getElementById("result");
    if (success) {
        output.textContent = "Deleted.";
        document.querySelector('[name="email"]').value = "";
    } else {
        output.textContent = "Not found.";
    }
} 