function circleArea(input) {
    if (typeof(input) == "number"){
        let area = Math.PI * input * input;
        console.log(area.toFixed(2));
    } else {
        let type = typeof(input);
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}
circleArea(5);
circleArea("name");
