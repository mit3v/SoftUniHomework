function passwordValidator(pass) {
    isLetterOrDigit = false;
    for (let singleChar of pass) {
        console.log(singleChar);
        let singleCharNum = singleChar.charCodeAt();
        console.log(singleCharNum);
        if (
            singleCharNum >= 65 && singleCharNum <= 90 || singleCharNum >= 97 && singleCharNum <= 122 || singleCharNum >= 48 && singleCharNum <= 57
        ) {
            isLetterOrDigit = true;
        }

    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');