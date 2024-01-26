function nameAndPassword(input) {
    let name = input[0];
    let password = input[1];
    let index = 2;
    while (input[index] !== password) {
        index++;
    }
    console.log(`Welcome ${name}!`);

}

nameAndPassword(["Nakov", "1234", "Pass", "1324", "1234"]);
nameAndPassword(["Gosho", "secret", "secret"]);
