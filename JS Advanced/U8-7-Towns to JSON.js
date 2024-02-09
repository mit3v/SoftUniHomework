function townsToJson(arr) {
    let result = [];
    for (i = 1; i < arr.length; i++) {
       let [n, town, lat, long, m] = arr[i].split("|");
       town = town.trim();
       lat = lat.trim();
       long = long.trim();
       result.push({Town: town, Latitude: Number(Number(lat).toFixed(2)), Longitude: Number(Number(long).toFixed(2))})
    }
    console.log(JSON.stringify(result));
}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);
townsToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);