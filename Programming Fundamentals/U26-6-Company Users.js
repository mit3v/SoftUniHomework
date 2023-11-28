function companyUsers(input) {
    let companyObj = {};
    for (el of input) {
        let [company, id] = el.split(" -> ");
        if (company in companyObj) {
            if (companyObj[company].includes(id)) {
                continue;
            }
            companyObj[company].push(id);
        } else {
            companyObj[company] = [id];
        }
    }
    let arrSorted = Object.entries(companyObj);
    arrSorted.sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    for (el of arrSorted) {
        console.log(el[0]);
        for (elel of el[1]) {
            console.log(`-- ${elel}`);
        }
    }
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);
companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111']);