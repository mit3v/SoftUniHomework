function movieTicket(input) {
    let day = input[0];
    
    if (day === "Monday" || day === "Tuesday" || day === "Friday") { console.log("12");}
    if (day === "Wednesday" || day === "Thursday") { console.log("14");}
    if (day === "Saturday" || day === "Sunday") { console.log("16");}

}


movieTicket(["Monday"]);
movieTicket(["Friday"]);
movieTicket(["Sunday"]);
