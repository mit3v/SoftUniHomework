function bitDestroyer(number, p){
    let mask = 1 << p;
    mask = ~mask;

    let result = number & mask;
    console.log(result);
    console.log(dec2bin(mask));

}

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }


bitDestroyer(1313, 5);