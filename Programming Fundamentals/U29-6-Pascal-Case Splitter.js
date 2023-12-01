function pascalCaseSplitter(input) {
    let str = input[0];
    for (i = 1; i < input.length; i++) {
        if (input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90) {
            str += " " + input[i];
        } else {
        str += input[i];
        }
    }
    console.log(str.split(" ").join(", "));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');