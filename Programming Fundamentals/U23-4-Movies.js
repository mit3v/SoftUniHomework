function movies(arr) {
    // let arr = ['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen'];
    let movieArr = [];

    for (element of arr) {
        if (element.includes("addMovie ")) {
            let movieName = element.split("addMovie ")[1];
            let movieObj = { name: movieName };
            movieArr.push(movieObj);
        } else if (element.includes(" directedBy ")) {
            let [movieName, directedBy] = element.split(" directedBy ");
            let isThereMovie = movieArr.find(isThereMovie => isThereMovie.name == movieName); // от наличните филми намери този филм, чието име (има свойство name) е същото като movieName; методът find ако намери нещо, ще върне индекса на първото, което е намерил; ама тук така като гледам си връща true; isThereMovie е обект; той променя свойствата си на същия ред докато търси филма, но ако не намери нищо си остава undefined; докато търси първо е "Fast and Furious", после става "Godfather" и т.н.; в крайна сметка ако намери филма, isThereMovie става същия обект като movieObj и можем да добавяме към него, защото е референтен и като променяме единия, съответно променяме всички обекти;
            if (isThereMovie) {
                isThereMovie.director = directedBy;
            }
        } else if (element.includes(" onDate ")) {
            let [movieName, theDate] = element.split(" onDate ");
            let isThereMovie = movieArr.find(isThereMovie => isThereMovie.name == movieName);
            if (isThereMovie) {
                isThereMovie.date = theDate;
            }
        }
    }
    for (movie of movieArr) {
        if (movie.name && movie.director && movie.date) { // проверяваме дали в обекта има и трите key-я;
            console.log(JSON.stringify(movie));
        }
    }

}
// movies();
movies([ 'addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen' ]);
movies([ 'addMovie The Avengers', 'addMovie Superman', 'The Avengers directedBy Anthony Russo', 'The Avengers onDate 30.07.2010', 'Captain America onDate 30.07.2010', 'Captain America directedBy Joe Russo' ]);

