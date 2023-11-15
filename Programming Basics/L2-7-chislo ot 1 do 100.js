function numNum(inputArray) {
    let number1 = Number(inputArray[0]); 
        if (number1 < 100) {
        console.log(`Less than 100`); 
        }  else if (number1 <= 200) {
            console.log(`Between 100 and 200`)
        } else { console.log(`Greater than 200`)}
           
}

numNum(["300"]);
