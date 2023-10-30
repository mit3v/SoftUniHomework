function employees(input) {
    // let input = ['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'];

    for (element of input) {
        let employee = {
            employeeName: element,
            personalNum: element.length,
        }
        console.log(`Name: ${employee.employeeName} -- Personal Number: ${employee.personalNum}`);
    }

}
// employees();
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);

