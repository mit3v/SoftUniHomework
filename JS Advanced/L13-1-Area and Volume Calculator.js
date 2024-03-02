function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function solve(areaFn, volFn, input) {
    let data = JSON.parse(input);
    console.log(data);
    let result = [];
    for (el of data) {
        // let area = areaFn.call(el);
        // let volume = volFn.call(el);
        // let obj = {area: area, volume: volume};
        // result.push(obj);

        result.push({
            area: areaFn.call(el),
            volume: volFn.call(el)
        })

    }
    console.log(result);

    // console.log(areaFn.call(fig));
    // console.log(volFn.call(fig));

}

const data1 = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;
const data2 = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`;

solve(area, vol, data1);
solve(area, vol, data2);