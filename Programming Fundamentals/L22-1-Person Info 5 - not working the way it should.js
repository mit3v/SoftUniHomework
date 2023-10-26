function personInfo(firstName, lastName, age) {
    let info = {
        lastName,
        age,
    }
    info["firstName"] = firstName;
    info[1] = firstName;
    return info;

}
console.log(personInfo("George", "Smith", "18"));