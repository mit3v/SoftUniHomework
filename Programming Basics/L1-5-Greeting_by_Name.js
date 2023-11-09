function greetingByName(input) {  // input държи масивът с 1 елемент ["Simeon"]
 let name = input[0]; // name държи "Simeon"
 let result = `Hello ${name}!`;  // това не е задължително и може директно console.log(`Hello,${name}!`)
                                 // но е красиво да е с променлива
console.log(result); 
     
}

greetingByName(["Simeon"]);
