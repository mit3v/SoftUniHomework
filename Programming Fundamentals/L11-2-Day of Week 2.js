function dayOfWeek(day) {
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];    
        let result = week[day - 1];
        if (result != undefined) {
            console.log(result);
        } else {
            console.log("Invalid day!");
        }
 }


dayOfWeek(2);
dayOfWeek(3.7);
dayOfWeek("tuhla");