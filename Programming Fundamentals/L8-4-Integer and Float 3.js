function intAndFloat(num1, num2, num3) {
   let sum = num1 + num2 + num3;
   let sumString = String(sum);
   let isInteger = true;
   for (i = 0; i < sumString.length; i++) {
      if (sumString[i] == ".") {
         isInteger = false; break;
      }
   }
   console.log(`${sum} - ${isInteger ? "Integer" : "Float"}`);

}

intAndFloat(9, 100, 1.1);
intAndFloat(100, 200, 303);

