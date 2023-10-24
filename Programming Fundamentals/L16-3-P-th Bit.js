function pthBit(number, p) {

    let shiftedNumber = number >> p;
    let lsb = shiftedNumber & 1;
    console.log(lsb);

}
pthBit(2145, 5);
pthBit(512, 0);
pthBit(255, 7);