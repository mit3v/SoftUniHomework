function ageAndSex(input) {
    let age = Number(input[0]);
    let sex = input[1];

    if (age >= 16 && sex === "m") {  console.log("Mr.")}
    if (age < 16 && sex ==="m") { console.log("Master")}
    if (age >= 16 && sex === "f") { console.log("Ms.")}
    if (age <16 && sex === "f") { console.log("Miss")}
             

} 

ageAndSex(["12", "f"]);
ageAndSex(["17", "m"]);
ageAndSex(["25", "f"]);
ageAndSex(["13.5", "m"]);
