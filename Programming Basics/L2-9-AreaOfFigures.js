function areaOfFigures(input) {
    let figure = input[0];
    if (figure === "square") {
        let strana = Number(input[1]);
        let area = strana * strana;
        console.log(area.toFixed(3)); 
    } else if (figure === "rectangle") {
        let strana1 = Number(input[1]);
        let strana2 = Number(input[2]);
        let area = strana1 * strana2;
        console.log(area.toFixed(3));
    } else if (figure === "circle") {
        let radius = Number(input[1]);
        let area = radius * radius * Math.PI;
        console.log(area.toFixed(3));
    } else if (figure = "triangle") {
        let strana = Number(input[1]);
        let visochina = Number(input[2]);
        let area = strana * visochina / 2;
        console.log(area.toFixed(3));
    }

}

areaOfFigures(["triange","5","4"]);
areaOfFigures(["square", "8"]);
areaOfFigures(["circle","7"]);
areaOfFigures(["rectangle","6","8"]);


