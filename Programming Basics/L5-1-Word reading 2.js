function readingWords(input) {
    let index = 0;
    while (true) {
        if (input[index] === "Stop") { break;}
        console.log(input[index]);
        index++;
    }
}

readingWords(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
