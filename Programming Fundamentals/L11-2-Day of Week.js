function dayOfWeek(day) {

    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (day > 0 && day < 8) {
        console.log(week[day - 1]);
    } else {
        console.log("Invalid day!");
        }

}

dayOfWeek(3.7);
