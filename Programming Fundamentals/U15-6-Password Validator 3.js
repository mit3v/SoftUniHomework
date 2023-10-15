function passwordValidator(pass) {

    function passLength(pass) {
        if (pass.length >= 6) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function passLettersAndDigits(pass) {
        isLetterOrDigit = false;
        for (singleChar of pass) {
            if (singleChar.charCodeAt() >= 65 && singleChar.charCodeAt() <= 90 || singleChar.charCodeAt() >= 97 && singleChar.charCodeAt() <= 122 || singleChar.charCodeAt() >= 48 && singleChar.charCodeAt() <= 57) {
                isLetterOrDigit = true;
            } else {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return isLetterOrDigit;
    }


    function doPassHave2digits(pass) {
        let counter = 0;
        for (i = 0; i < pass.length; i++) {
            if (pass[i].charCodeAt() >= 48 && pass[i].charCodeAt() <= 57) {
                counter++;
            }
        }
        if (counter >= 2) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }
    let passLengthCheck = passLength(pass);
    let passLettersAndDigitsCheck = passLettersAndDigits(pass);
    let doPassHave2digitsCheck = doPassHave2digits(pass);
    if (passLengthCheck == true && passLettersAndDigitsCheck == true && doPassHave2digitsCheck == true) {
        console.log("Password is valid");
    }
}

// passwordValidator('logIn');
// passwordValidator('MyPass123');
passwordValidator('Pa$s$s');