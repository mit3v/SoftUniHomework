function palindromeIntegers(arr) {

    for (element of arr) {
        let elementAsString = String(element);
        console.log(isPalindrome(elementAsString));
    }

    function isPalindrome(checkingNumAsString) {
        for (i = 0; i < checkingNumAsString.length; i++) {
            if (checkingNumAsString[i] != checkingNumAsString[checkingNumAsString.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);