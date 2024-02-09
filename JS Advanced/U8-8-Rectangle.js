function rectangle(width, height, color) {

    function upperLetter (colll) {
        let newColor = colll[0].toUpperCase();
        for (i = 1; i < colll.length; i++) {
            newColor += colll[i];
        }
        return newColor;
    }
return {
    width: Number(width),
    height: Number(height),
    color: upperLetter(color),
    calcArea() {
        return this.width * this.height
    }
}

}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());