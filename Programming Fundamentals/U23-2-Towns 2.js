function towns(input) {
    // let input = ['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'];

    for (element of input) {
        let [city, lat, long] = element.split(" | ");
        lat = Number(lat).toFixed(2);
        long = Number(long).toFixed(2);
        let obj = {
            town: city,
            latitude: lat,
            longitude: long,
        }
        console.log(obj);
    }

}
// towns();
towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);