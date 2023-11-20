function ageAndSex(input) {
    let age = Number(input[0]);
    let sex = input[1];

    if (age >= 16) { 
        if (sex === "m") { console.log("Mr.")}
        else { console.log("Ms.")}
    } else { if (sex === "m") 
        console.log("Master");
        else console.log("Miss") }
        

} 

ageAndSex(["12", "f"]);
ageAndSex(["17", "m"]);
ageAndSex(["25", "f"]);
ageAndSex(["13.5", "m"]);
