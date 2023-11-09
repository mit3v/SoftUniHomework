function concatenateData(input) {
 let name1 = input[0];
 let name2 = input[1];
 let age = input[2];
 let city = input[3];
 let result = "You are " + name1 + " " + name2 + ", a " + age + "-years old person from " + city + ".";
 console.log(result);

}

concatenateData(["Maria","Ivanova","20","Sofia"])
concatenateData(["Ivanka","Petrova","27","Yambol"])

