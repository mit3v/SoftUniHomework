function personInfo(firstName, lastName, age) {
    let personObj = {};
    personObj.firstName = firstName;
    personObj["lastName"] = lastName;
    personObj.age = Number(age);
    return personObj;

}
console.log(personInfo("Peter", "Pan", "20"));
