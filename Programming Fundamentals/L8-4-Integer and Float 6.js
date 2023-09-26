function intAndFloat(num1, num2, num3) {
   let sum = num1 + num2 + num3;
   
   // let isInt = Math.round(sum) - sum == 0;
   let isInt = Math.round(sum) == sum;
   console.log(`${sum} - ${isInt ? "Integer" : "Float"}`);
}

intAndFloat(9, 100, 1.1);
intAndFloat(100, 200, 303);

