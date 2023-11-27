function meetings(input) {
    let meetings = {};
    for (el of input) {
        let [day, person] = el.split(" ");
        if (meetings.hasOwnProperty(day)) {     // if (meetings[day]) също ще работи, но не е добра практика; ако имаме ключ с празен стринг, това ще го презапише;
            // може if (day in meetings) това също дава true или false, върши ни работа;
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (keykey in meetings) {
        console.log(`${keykey} -> ${meetings[keykey]}`);
    }

}
meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
// meetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George']);