function bombNumbers(arr1, arr2) {
    // let arr1 = [1, 2, 2, 4, 2, 2, 2, 9];
    // let arr2 = [4, 2];
    let bombNumber = arr2[0];
    let range = arr2[1];
    let sum = 0;

    while(arr1.includes(bombNumber)) {
        let index = arr1.indexOf(bombNumber);
        
        arr1.splice(Math.max(0, index - range), range * 2 + 1);
       
    }
    sum = arr1.reduce((acc, value) => acc + value); // ще даде грешка, защото имаме празен масив; в този случай по-добре да си ползваме for цикъл и в него да си съберем сумата от елементите на масива;
    console.log(sum);
}
// bombNumbers();
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
bombNumbers([1, 2, 1, 1, 1], [2, 3]);