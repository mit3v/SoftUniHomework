function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let aa = document.querySelector("textarea").value;
      let inputArr = JSON.parse(aa);
      let obj = {};
      let average = 0;
      let finalObj = {};
      let finalText = "";
      for (el of inputArr) {
         let [resName, resWorkers] = el.split(" - ");
         if (!obj.hasOwnProperty(resName)) {
            obj[resName] = resWorkers.split(", ");
         } else {
            for (let info of resWorkers.split(", ")) {
               obj[resName].push(info);
            }
         }
      }
      for (keyche in obj) {
         obj[keyche].sort((a, b) => Number(b.split(" ")[1]) - Number(a.split(" ")[1]));
      }
      for ([key, valueArr] of Object.entries(obj)) {
         for (element of valueArr) {
            average += Number(element.split(" ")[1]);
         }
         average = average / valueArr.length;
         obj[key].push(average);
         average = 0;
      }
      finalObj = { [Object.keys(obj)[0]]: Object.values(obj)[0] };

      for ([key2, valueArr2] of Object.entries(obj)) {
         if (Number(valueArr2[valueArr2.length - 1]) > Number(Object.values(finalObj)[0][(Object.values(finalObj)[0]).length - 1])) {
            finalObj = { [key2]: valueArr2 };
         }
      }
      // console.log(finalObj);
      let finalObjValuesArr = Object.values(finalObj)[0];
      document.querySelector("#bestRestaurant p").textContent = `Name: ${Object.keys(finalObj)[0]} Average Salary: ${Number(finalObjValuesArr.pop()).toFixed(2)} Best Salary: ${Number(finalObjValuesArr[0].split(" ")[1]).toFixed(2)}`
      // console.log(finalObjValuesArr);
      for (worker of finalObjValuesArr) {
         [nameWorker, salary] = worker.split(" ");
         finalText += `Name: ${nameWorker} With Salary: ${salary} `;
      }
      document.querySelector("#workers p").textContent = finalText;
   }

}



// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]

// for (valueArr of Object.values(obj)) {
//    for (element of valueArr) {
//       average += Number(element.split(" ")[1]);
//    }
//    average = average / valueArr.length;
//    obj[keyche].push(average);
//    console.log(obj);
//    debugger
// // }


// console.log(Number(valueArr2[valueArr2.length - 1]));
//       console.log(Number(Object.values(finalObj)[Object.values(finalObj).length - 1]));
//       console.log(Object.values(finalObj)[0]);
//       console.log(Object.values(finalObj)[0].length - 1);
//       console.log(finalObj);
//       console.log(Object.values(finalObj)[0][3]);