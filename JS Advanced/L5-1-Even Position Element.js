function evenPos(arr) {
    let result = "";
    for (i = 0; i < arr.length; i += 2) {
       result += arr[i] + " ";
    }
    console.log(result);
}

evenPos(['20', '30', '40', '50', '60']);
evenPos(['5', '10']);
