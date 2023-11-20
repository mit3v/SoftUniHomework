function ageAndSex(input) {
    let age = Number(input[0]);
    let sex = input[1];

    if (age >= 16) {
    switch (sex) {
        case "m":
        console.log("Mr.");
        break;
        case "f":
        console.log("Ms.");
        break;
        default:
        console.log("Error");
    } } else {
        switch (sex) {
            case "m":
            console.log("Master");
            break;
            case "f":
            console.log("Miss");
            break;
            default:
            console.log("Error");
        }
    }


}


ageAndSex(["12", "f"]);
ageAndSex(["17", "m"]);
ageAndSex(["25", "f"]);
ageAndSex(["13.5", "m"]);