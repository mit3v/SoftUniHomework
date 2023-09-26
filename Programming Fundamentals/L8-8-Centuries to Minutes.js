function centuriesToMin(century) {

    let years = 100 * century;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
    
}

centuriesToMin(1);
centuriesToMin(5);
