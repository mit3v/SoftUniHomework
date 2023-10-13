function printHeader() {
    console.log("~~~-   {@}   -~~~");
    console.log("~- Certificate -~");
    console.log("~~~-   ~---~   -~~~");
}

function didYouPass(grade) {
    return grade >= 3;
}

function formatGrade(grade) {

    if (grade < 3) {
        console.log(`Fail (2)`);
    } else if (grade < 3.5) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.5) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.5) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }

}

function readFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

function printCertificate(grade, arrName) {
    if (!didYouPass(grade)) {    // това се нарича pattern;
        return console.log(`Student does not qualify`);
    }
    printHeader();
    console.log(readFullName(arrName[0], arrName[1]));
    formatGrade(grade);
}



// printCertificate(5.25, ["Peter", "Carter"]);
printCertificate(2, ["Peter", "Carter"]);
