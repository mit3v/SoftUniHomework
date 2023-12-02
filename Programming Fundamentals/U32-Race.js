function race(input) {
    let namesArr = input.shift().split(", ");
    let namesObj = {};

    for (name of namesArr) {
        namesObj[name] = 0;
        let index = 0;
        let element = input[index];
        while (element != "end of race") {
            let letterMatch = element.match(/[A-Za-z]/g);
            let digitMatch = element.match(/[0-9]/g)
            let elementName = letterMatch.join("");
            let elementDistance = digitMatch.reduce((sum, current) => sum + parseInt(current), 0);
            if (name === elementName) {
                namesObj[name] += elementDistance;
            }
            index++;
            element = input[index];
        }
    }
    let entries = Object.entries(namesObj);
    let fixed = entries.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
    console.log(`1st place: ${fixed[0][0]}`);
    console.log(`2nd place: ${fixed[1][0]}`);
    console.log(`3rd place: ${fixed[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
