function piccolo(input) {
    let parkingLotSet = new Set();
    for (singleCar of input) {
        let [inOrOut, carNumber] = singleCar.split(", ");
        if (inOrOut === "IN") {
            parkingLotSet.add(carNumber);
        } else if (inOrOut === "OUT") {
            delete parkingLotSet.delete(carNumber);
        }
    }
    if (parkingLotSet.size == 0) {
        return console.log("Parking Lot is Empty");
    }
    let parkingLotArr = Array.from(parkingLotSet);
    
    parkingLotArr.sort((a, b) => a.localeCompare(b));
        for (el of parkingLotArr) {
            console.log(el);
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