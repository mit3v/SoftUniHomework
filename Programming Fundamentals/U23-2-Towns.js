function towns(input) {
    // let input = ['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'];

    for (element of input) {
        let [city, lat, long] = element.split(" | ");
        let obj = {
            town: city,
            latitude: lat,
            longitude: long,
        }
        console.log(`{ town: '${obj.town}', latitude: '${Number(obj.latitude).toFixed(2)}', longitude: '${Number(obj.longitude).toFixed(2)}' }`);
    }

}
// towns();
towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);