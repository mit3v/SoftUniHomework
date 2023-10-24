function triBitSwitch(number, position) {
    let mask = 7 << position;
    // console.log(dec2bin(mask));

    let result = number ^ mask;

    // console.log(dec2bin(2));
    // console.log(dec2bin(10));
    console.log(result);
}


// function dec2bin(dec) {
//     return (dec >>> 0).toString(2);
//   }

triBitSwitch(1234, 7);
triBitSwitch(44444, 4);
