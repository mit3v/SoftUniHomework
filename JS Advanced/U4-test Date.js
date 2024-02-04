function previousDay(year, month, day) {
    let myDate = new Date(2024,0,10);

    console.log(myDate.getDate());
    console.log(myDate.getDay());

    myDate.setDate(15);
    console.log(myDate);
    console.log("-----------")
    myDate.setDate(myDate.getDate() - 1);
    console.log(myDate);
    console.log("- - - - - - - -");
    let anotherDate = new Date("2024, 3, 7");
    console.log(anotherDate);
    console.log("-   -   -   -   -   -");
    console.log(myDate.toISOString());
    console.log(myDate.toDateString());


}

previousDay(2016, 9, 30);
