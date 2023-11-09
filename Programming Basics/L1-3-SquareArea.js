function squareArea(input) {  // input държи стойността ["5"]
 let sideA = input[0]      // sideA държи първия елемент в масива (единствения =5)
 let area = sideA * sideA;   // area държи резултата "5"*"5" !!!
 console.log(area);

}

squareArea(["5"])
// това до тук ще даде резултат, но не е напълно правилно

function squareArea2(input) {  // input държи стойността ["5"]
    let sideA = Number(input[0])     // sideA вече ще държи номера Number("5") =>5 
    let area = sideA * sideA;   // area държи резултата 5*5 !!
    console.log(area);
   
   }
   
   squareArea2(["5"])
   
