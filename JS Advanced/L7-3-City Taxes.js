function cityTaxes(input) {


}

const city = cityTaxes('Tortuga',
    7000,
    15000);
    console.log(city);
const city2 = cityTaxes('Tortuga',
    7000,
    15000);
    city.collectTaxes();
    console.log(city.treasury);
    city.applyGrowth(5);
    console.log(city.population);
