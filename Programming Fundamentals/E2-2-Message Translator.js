function messageTranslator(input) {
    let n = Number(input.shift());

    for (element of input) {
        let pattern = /![A-Z][a-z]{2,}!:\[[A-Za-z]{8,}\]/g;
        let match = pattern.exec(element);
        if (match === null) {
            console.log("The message is invalid");
            continue;
        }
        while (match != null) {
            let text = match[0];
            text = text.substring(1, text.length - 1);
            let arr = text.split("!:[");
            let word = arr[0];
            let wordToValue = arr[1];
            let arrWithValues = [];
            for (i = 0; i < wordToValue.length; i++) {
                let code = wordToValue[i].charCodeAt();
                arrWithValues.push(code);
            }
            console.log(`${word}: ${arrWithValues.join(" ")}`);
            match = pattern.exec(element);

        }
    }


}
messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"]);
messageTranslator(["3", "go:[outside]", "!drive!:YourCarToACarWash", "!Watch!:[LordofTheRings]"]);