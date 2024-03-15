function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function solve(areaFn, volFn, input) {
    let result = [];
    let inputArr = JSON.parse(input);
    // console.log(inputArr);
    for (el of inputArr) {
        let area = areaFn.call(el);
        let volume = volFn.call(el);
        let obj = { area: area, volume: volume };
        result.push(obj);
    }
    console.log(result);

}
solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);