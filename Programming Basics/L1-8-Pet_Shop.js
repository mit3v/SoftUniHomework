function petShop(input) {
  let numDogFood = Number(input[0]);
  let numCatFood = Number(input[1]);
  let cost = numDogFood * 2.5 + numCatFood * 4;
  console.log(`${cost} lv.`);


} 


petShop(["13", "9"])
