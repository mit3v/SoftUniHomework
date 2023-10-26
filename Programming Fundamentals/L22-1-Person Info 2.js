function personInfo(firstName, lastName, age) {
    let info = {}
    info["firstName"] = firstName;
    info["lastName"] = lastName;
    info["age"] = age;
    return info;

}
console.log(personInfo("Peter", "Pan", "20"));
console.log(personInfo("George", "Smith", "18"));