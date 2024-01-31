function gcd(a, b) {
    let min = Math.min(a, b);
    let divisor = 1;
    for (i = 1; i <= min; i++) {
        if (a % i == 0 && b % i == 0) {
            divisor = i;
        }
    }
console.log(divisor);
}

gcd(15, 5);
gcd(2154, 458);
