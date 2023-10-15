function loadingBar(num) {
    function loading(a) {
        a = num / 10;
        let result = "";
        result += "%".repeat(a);
        result += ".".repeat(10 - a);
        return result;
    }

    if (num < 100) {
        console.log(`${num}% [${loading(num)}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% Complete!`);
        console.log(`[${loading(num)}]`);
    }

}

loadingBar(30);
loadingBar(50);
loadingBar(100);
