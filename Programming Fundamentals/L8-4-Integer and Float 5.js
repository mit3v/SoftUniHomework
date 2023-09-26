function intAndFloat(num1, num2, num3) {
   let sum = num1 + num2 + num3;
   let sum2 = Math.trunc(sum);
   sum == sum2 ? sum += " - Integer" : sum += " - Float";
   console.log(sum);

}

intAndFloat(9, 100, 1.1);
intAndFloat(100, 200, 303);

