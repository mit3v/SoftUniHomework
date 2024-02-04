function wordUppercase(input) {

    let result = input.split(/[^a-zA-Z0-9]+/)
        .join(" ")
        .trim()
        .split(" ")
        .map(x => x.toUpperCase())
        .join(", ");

    console.log(result);

}

wordUppercase('Hi, how are you?');
wordUppercase('hello');
