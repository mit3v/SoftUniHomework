function graduation(input) {
    let name = input[0];
    let index = 1;
    let command = input[index];
    let sumAverageGrade = 0;
    let grade = 0;
    let bye = 0;
    let gradeFail = 0;
    let previousGradeFail = 0;
   

    while (true) {
        let command = Number(input[index]);
        sumAverageGrade += command;
        grade++;
        if (command <= 4) {bye++; previousGradeFail = gradeFail; gradeFail = grade; }
        if (bye >= 2) { console.log(`${name} has been excluded at ${previousGradeFail} grade`); break;
        }
        if (grade >= 12) {
            console.log(`${name} graduated. Average grade: ${(sumAverageGrade / 12).toFixed(2)}`); break;
        }
        index++;
    }

}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);

