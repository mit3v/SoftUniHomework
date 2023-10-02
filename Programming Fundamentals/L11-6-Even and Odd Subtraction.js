function evenOddSubtraction(arr) {
    let even = 0;
    let odd = 0;
    for (singleNum of arr) {
        singleNum % 2 == 0 ? even += singleNum : odd += singleNum;
    }
    console.log(even - odd);
}

evenOddSubtraction([1,2,3,4,5,6]);
evenOddSubtraction([3,5,7,9]);
