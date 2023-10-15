function passwordValidator(pass) {

    function passLength(pass) {
        if (pass.length >= 6) {
            return true;
        } else {
            return false;
        }
    }

    function passLettersAndDigits(pass) {
        isLetterOrDigit = false;
        for (i = 0; i < pass.length; i++) {
            if (pass[i].charCodeAt() >= 65 && pass[i].charCodeAt() <= 90 || pass[i].charCodeAt() >= 97 && pass[i].charCodeAt() <= 122 || pass[i].charCodeAt() >= 48 && pass[i].charCodeAt() <= 57) {
                isLetterOrDigit = true;
            } else {
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
            }}
            if (counter >= 2) {
                return true;
            } else {
                return false;
        }
    }

    if (passLength(pass) == false) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (passLettersAndDigits(pass) == false) {
        console.log("Password must consist only of letters and digits");
    }
    if (doPassHave2digits(pass) == false) {
        console.log("Password must have at least 2 digits");
    }
    if (passLength(pass) == true && passLettersAndDigits(pass) == true && doPassHave2digits(pass) == true) {
        console.log("Password is valid");
    }
}

// passwordValidator('logIn');
// passwordValidator('MyPass123');
passwordValidator('Pa$s$s');