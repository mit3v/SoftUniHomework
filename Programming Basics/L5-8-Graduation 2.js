function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let i = 1;
    let sumGrade = 0;
    let averageGrade = 0;
    let fail = 0;
    let didGraduate = true;


    while (i <= 12) {
     let grade = Number(input[index]);
     index++;
     sumGrade += grade;
     
     if (grade < 4) {
        fail++;
        if(fail == 2) {console.log(`${name} has been excluded at ${i} grade`);
        didGraduate = false; }
        continue;
     }
     i++;
    }

    if (didGraduate) {
    averageGrade = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);}
}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);

