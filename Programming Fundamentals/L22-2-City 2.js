function city(town) {

    // for(let [key, value] of Object.entries(town)) {
    //     console.log(`${key} -> ${value}`);
    // }

    for (let arr of Object.entries(town)) {
        console.log(`${arr[0]} -> ${arr[1]}`);
    }

}
city({name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000"});
city({name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000"})
