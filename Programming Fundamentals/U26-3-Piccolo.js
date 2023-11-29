function piccolo(input) {
    let parkingLotObj = {};
    for (singleCar of input) {
        let [inOrOut, carNumber] = singleCar.split(", ");
        if (inOrOut === "IN") {
            parkingLotObj[carNumber] = undefined;
        } else if (inOrOut === "OUT") {
            delete parkingLotObj[carNumber];
        }
    }
    let parkingLotArr = Object.keys(parkingLotObj).sort((a, b) => a.localeCompare(b));
    if (parkingLotArr.length == 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (el of parkingLotArr) {
            console.log(el);
        }
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);