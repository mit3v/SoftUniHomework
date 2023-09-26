function intAndFloat(num1, num2, num3) {
   let sum = num1 + num2 + num3;
   
   let isVqrno = sum % 1 == 0;
   console.log(`${sum} - ${isVqrno ? "Integer" : "Float"}`);

}

intAndFloat(9, 100, 1.1);
intAndFloat(100, 200, 303);

