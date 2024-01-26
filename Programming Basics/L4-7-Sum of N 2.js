function sumN(input) {
    let a = String(input[0]);
    let sum = 0;
   

    for (i = 0; i < a.length; i++) {
        let b = Number(a[i]);
         sum += b;
    }
  console.log("The sum of the digits is:" + sum);
  
}

sumN(["1234"]);
sumN(["564891"]);
