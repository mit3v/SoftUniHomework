function nameAndPassword(input) {
    let index = 0;
    let username = input[index];
    index++;
    let userPassword = input[index];
    index++;
    let password = input[index];
    while (true) {
        if (password === userPassword) {
            break;
        }
        password = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}

nameAndPassword(["Nakov", "1234", "Pass", "1324", "1234"]);
nameAndPassword(["Gosho", "secret", "secret"]);
