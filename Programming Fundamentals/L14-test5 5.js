function solve(numA, numB, name, age) {
    
    addTwoNumbers(numA, numB);
    addTwoNumbers(7, 8);
    addTwoNumbers(10, 14);

    let textForPrint = `${name} -> ${age}`;
    console.log(textForPrint);

}

function addTwoNumbers(a, b) {
    console.log(a + b);
}


// независимо, че функцията е извадена навън, ние получаваме резултатите; кода ще се прочете 2 пъти, първия път интерпретатора минава и взима всички функции и техните имена; създава регистър и слага имената на функциите в регистъра; така че можем да изпълняваме функциите преди тяхното деклариране;

solve(1, 2, "Stan", 34);
solve(1, 2, "Gosho", 30);
solve(1, 2, "Vanio", 27);
