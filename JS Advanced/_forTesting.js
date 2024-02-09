// console.log("My text is here")
// console.log("towa e prosto komentar")
// console.log(1/0)

// let myVariable1 = 13; // Number  // това е литерал
// let myVariable2 = "13" // String   // това също си е литерал
// литерал - запис в кода, чрез който даваме стойност и типа на тази стойност; например като напишем 6 - това е специалния начин да напишем число; ако напишем "6" това е специалния начин да кажем, че е стринг; ако напишем [6] това е специалния начин да кажем, че това е масив; {a: 6} - обект; true, false, null, undefined са едновременно стойност и литерал от дадения тип;
// литерала е данните + техния тип и структура!;
// литерал е стойност, записана директно в програмния код. Литералите са фиксирани стойности на примитивни типове данни, които се включват директно в кода на програмата;
// литерал е начин в кода да индекираме съдържанието на данните и техния тип; литерала за масив е [], за стринг "", за числото е просто да има цифри, за обекта е {}
// console.log(myVariable1 + 1000);
// let myVariable3;
// console.log(myVariable3);
// console.log(myUndeclaredVariable);

// let array = [1, 2, 3, 44, 55]; 

// let element1 = array[0];  // pri programiraneto se zapochwa ot 0
// let element2 = array[1];
// let element3 = array[2];
// let element4 = array[3];
// let element5 = array[4];

// console.log(element1);
// console.log(element2);
// console.log(element3);
// console.log(element4);
// console.log(element5);

// console.log(5*10);
// console.log("5" * "10");
// console.log("5a"*"10"); // NaN -> Not A Number

// let text1 = "text1"  // String
// let text2 = 'some text 2'  // same, bro
// let text3 = `some text ${text1}`  // interpolated string, defined by ` ;

// console.log(text3);  // - така вкарахме променлив текст;
// let number1=19;
// let number2="10";
// console.log(number1+number2); // само тук събира стринговете!!!
// console.log(number1-number2);   // на останалите математически операции си ги изпълнява
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(parseInt(number1/number2)); // parseInt това дава само цялото число
// console.log(number1%number2);

// let number3 = 1337;
// let number4 = 1332
// console.log(number3%10); // това ще вземе само последната цифра 7
// console.log(number3%100); // това ще вземе последните 2 цифри
// console.log(number3%2 == 0); // == 0 това пита дали е равно на 0;
// console.log(number4%2 == 0);  // дава отговор false или true

// let a =7;
// let b = 2;
// let c = a%b;
// console.log(c); 
// function usdToBgn2(usd2=22) {  // - мога директно във функцията да си задам стойността на параметъра


// function usdToBgn3(usdArray) {
//    const bgnCourse2 = 1.79549;   // ето това тука може да е различно за всяка функция
//    const bgn2 = usdArray[0] * bgnCourse2;  //  bgnCourse2 не го взема от друга функция, нищо че името е едно и също
//    console.log(bgn2);
//    console.log(usdArray[0]+bgnCourse2);
//     console.log(Number(usdArray[0])+bgnCourse2);

//   const usdNumber = Number(usdArray[0]); - може и така да ги дефинираме 
//    console.log(usdNumber+bgnCourse2);

// }

// usdToBgn3(["22"])  

// резултати: 39.50078
// 221.79549
// 23.79549



// function usdToBgn2(usd2=22) {
//    const bgnCourse2 = 1.79549;
//    const bgn2 = usd2 * bgnCourse2;
//    console.log(bgn2);
// }
// usdToBgn2();
// usdToBgn2(22);
// usdToBgn2(20);


// console.log(1+1+"4"+2+1); // това дава отговор 2421; след като добавим string всичко става string след това
 
// >= - по-голямо или равно; това е последователността;
// == това равно сравнява само стойността дали е равна;
// === сравнява и по стойност, и по тип;
// != - проверява дали са различни стойноститте;
// !== -търси и в стойността, и в типа;


// boolean - булева променлива, така се инициализира
// let neshtoSi = true;
//  let a = 5; 
// let isPositive = a > 0;
// console.log(isPositive); -> това ще даде true;


// function otlichnik(inputArray) {
//  let ocenka = Number(otlichnik[0]);
//  if(ocenka >= 5.5) {
//  console.log("Excellent!"); 
//  }
// }
// otlichnik(["4"]); -> няма да отпечата нищо;

// function otlichnik(inputArray) {
//  let ocenka = Number(otlichnik[0]);
//  if(ocenka >= 5.5) {
//  console.log("Excellent!");
//  }
//  else {console.log("Not Excellent")} // това е допълнително; 
// }

// otlichnik(["4"]); - сега вече ще отпечата Not Excellent;


// if (number1 % 2 === 0)  !! това проверява дали остатъка е равен на 0
// демек в този случай проверява дали number1 е четно;


// let up = Math.ceil(23.45) = 24;  -това закръгля до цялото, по-голямо число
// let down = Math.floor(27.99) = 27; - закръгля до цялото, по-малко;
// let trunc = Math.trunc(25.55) = 25 - оставя само цялото число
// let chislo = 10 / 3 | 0 -> 3; OR оператор, работи с 32 бита, това върши работа до около 2 милиарда;
// Math.round(a) - това си закръгля 5.5 ->6;
// Math.abs(a) - модула на а;
// Math.sqrt(a) - корен от а;
// Math.pow(2, 5) - степенува 2 на степен 5;
// Math.min(num1, num2, num3); - дава най-малкото от изброените числа;
// Math.max(num1, num2) - взима най-голямото;
// Math.random() връща рандом от 0 до 1, но [0, 1); !!! 1 никога няма да получим;
// Math.random() * 10 | 0 -> това ще ни върне от 0 до 9, защото превръща стойността в 32 битово цяло число, ще изреже запетаята;
// (123.456).toFixed(2); - това закръгля до колкото цифри след десетичната запетая искаме
// console.log(area.toFixed(3)); - ето го, така си работи


// ето как да добавим 0 преди някакъв час: добавяне на нула;
// console.log(`${(hours < 10) ? "0" : ""}${hours}:${(minutes < 10) ? '0' : ''}${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`);



// else if (tochki % 10 === 5) - така проверяваме дали числото завършва на 5;

// let area = radius * radius * Math.PI;  - умножение по пи

// let minutes = Math.trunc(totalTime / 60);
// let seconds = totalTime % 60;  - общото време го деля на минути и секунди

// outputNumber += 5; - това прибавя 5 към outputNumber; демек outputNumber = outputNumber + 5;

// let fiveHundred = 500;
// fiveHundred.toFixed(2) = "500.00"; - toFixed връща стринг!! добре е да го ползваме само при принтиране

// let isGreater = (5 + 3) > (3 + 4); -> това дава отговор true.

// if ("caseSen" == "CaseSen") { console.log("Ivan")}
//  else { console.log("Vanko"); } - това ще даде отговор Vanko.

//  console.log(123456 % 56 == 56);  -> това дава отговор true;


// switch   case :   break   default:  ;
// при switch можем да проверяваме дали е 1,2,3.. с използването на case 1: и т.н., но не можем
// да проверим дали е >1 , >2 .. и т.н. Ако ни е нужно това използваме if.

// switch (day) {
//  case "Monday":
//  case "Tuesday":
//  case "Wednesday":
// console.log("Welcome");
//  break; } - може така да го ползваме, за да си спестим писане на код;

// console.log('It's a wonderful day'); - това е кофти :)
// console.log('It\'s a wonderful day'); - така се прави;


// if (edikakwosi1 && edikakwosi2) - ако и двете са вярни, тогава влиза в if-a;
// if (condition1 || condition2) - достатъчно е едното да е вярно, за да влезе в if;
// if (!isValid) - ако не е валидно, тогава влизаме в if-a;

// например да проверим дали чиско е по-голямо от 5, по-малко от 10 и е четно:
// if (a>5 && a<10 && a % 2 == 0);

// let validNumber = (num >= 100 && num <= 200) || num === 0;
//     if (!validNumber) { console.log("invalid");} // примерно ако вкарваме num = 75 -> вади си invalid;

// shift + alt + стрелка надолу - copy paste реда на който сме;


// if (d % 2 == 0) {
//   console.log(`${a} + ${b} = ${d} - even`);
// } else {console.log(`${a} + ${b} = ${d} - odd`)}
// това горе може да се запише ето така:
// console.log(`${a} + ${b} = ${d} - ${d % 2 === 0 ? 'even' : 'odd'}`);


// console.log(!(5 == 5) && (4 + 1 == 5));
// console.log(!(3 == 5) || (3 == 5));
// console.log(!(3 > 5) || (1 == 1));

// let a = 1;
// console.log(++a); // принтира 2 и а остава 2;
// console.log(a);

// let a = 1;
// console.log(a++); // първо се принтира а, после се добавя 1
// console.log(a); // тук вече а е 2.

// let a = 1;
// console.log(--a); // --a - то си го пише, първо вадим, после получаваме а. тук се принтира 0.
// console.log(a); // - нула си е.

// let a = 1;
// console.log(a--); //принтира 1 и след това вече е 0.
// console.log(a); // вече е 0.

// for (let i = 0; i <= 12;) {
//   console.log(i++);
// }

// let tekst = "SoftUni";
// let length = tekst.length; // това ни дава чило 7;
// let bukwa = tekst[4]; // това ни дава U;
// let bukwa = tekst[0]; // това ни дава S;

// console.log(length);
// console.log(bukwa);

// let tekst = "SoftUni";
// let length = tekst.length; // length ни дава дължината. Другите може да са различни.
// let bukwa = tekst[4]; 

// console.log(length);
// console.log(bukwa);

// // console.log(name[0]); 
// // console.log(name.charAt(0)); - и двете вземат първата буква;
// при първото ако дам стойност по-голяма отколкото букви има
// ще ми даде undefined, а charAt изобщо няма да даде нищо.

// let a = String(input[0]); - така си го правим на стринг;
// let a = input[0].toString(); - това е другия вариант;
// let a = input[0] + ""; - това е третия вариант;
// sumN([1234]);
// let numToString = `${num}; - това е друг вариант в който превръщаме число в стринг;

// str += i + "\n"; -  \n - това е символ за нов ред;
// L4-8 - просто става на текст 108/n117/n126... и просто конзолата ги изкарва на нов ред;
// \t - табулацията може да се пише пред текста - изписва в конзолата няколко интервала навътре;


// function testBreak() {
//   for (let i = 1; i <= 5; i++) {
//       if (i === 4) { break;}
//       console.log(i);
//   }   - при i = 4 този брейк прекъсва for - цикълът.
// }    в този случай конзолата ще отпечата 1, 2 и 3.

// function testBreak() {
//   for (let i = 1; i <= 5; i++) {
//       if (i === 4) { continue;}
//       console.log(i);
//   }
// }  - при continue пропуска този цикъл; ще изведе 1 2 3 5.

// input.length - salary(["10", "750", "20"] - това ще даде 3.

// let a = 5;
// while (true) {
//     if (a > 10); { break;} // break прекъсва цикъла на while;
//     console.log(a);
//     a++;
// }

// break се използва само във for, while  и switch;

// let maxNumber = Number.MAX_SAFE_INTEGER; - максималното възможно число;
// let maxNumber = Number.MIN_SAFE_INTEGER; - минималното възможно число;

// continue прекъсва текущата интерация и преминава към следващата;


// !!!!!!!!!!!!!!!!!
// for (i = 1; i <= 5; i++) {  // - i е само локално и го ползваме само във for цикълът;
//     console.log(i);
// }
// console.log(i) - това тук няма да ни изкара никакво i;
// !!!!!!!!!!!!!!!!!!
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }
// console.log(i) - това ще ни изкара i = 6;
// !!!!!!!!!!!!!!!!!!


// let i = 0;
// while (i < 4) {
//   switch(i) {
//     case 1:   console.log(i);  - тук няма break, затова ще изпечата още веднъж 1.;
//     case 2:  console.log(i);
//     break;
//     case 3:  console.log(i);
//     break; 
//   }
//   i++;
// // }


// let isFinish = false;
// for (i = 1; i <= 10; i++) {
//     .......................
//     if (neshtoSi) {
//         isFinish = true;
//     }
//     if (isFinish) {
//         break;
//     }
// }  // - това си е културен начин да прекъснеш цикъл; L6-2


// debugger - това трябва да го тествам как да ми помага, вместо breakpoint;

// // let size = 50;
// // typeof(size) -> Number;
// // let name = "Peter";
// // typeof(name) -> String;
// let arr = [3, 5, 8];
// // typeof(arr) -> Object;

// console.log("Peter");
// process.stdout.write("and Maria") - пише на същия ред, но работи само server-side ;

// null =/ undefined; при null имам кофата, ама нямам водата в нея. При undefined не знам какво имам;

// C:\Users\mitev\Desktop\Programming Fundamentals>node test1.js - cmd стартиране
// PS C:\Users\mitev\Desktop\Programming Fundamentals> node .\test1.js - така мога да стартирам нещо директно в терминала


// // let a = 5;
// // let - оператор; а - идентификатор, ние го създаваме; имаме и блокове, заграден в ();
// let a = 5; let b = 3; console.log(a + b) -> това е hard-coded , не можем нищо повече да направим. Но не е особено полезна.

// function solve(num1, num2){   } функция с идентификатор solve; имената създават променливи!  променливите се СЪЗДАВАТ когато се изпълни функцията!;
// solve(2,3); извиквайки функцията подаваме стойност на променливите;

// ако проверяваме "2" == 2 , JS превръща второто 2 в стринг! и така сверява;
// така и стринг + нещо, превръща второто в стрийнг;

// type correction: какво прави JS като му се подават различни данни
// 1. string + anything -> convert to string;
// 2. logical check -> convert to Boolean;
// 3. convert to number; - затова ако имаме num * 2, а num е стринг, той най-накрая го обръща в число;


// parseFloat(number) - маха нулите примерно 3.5000 го прави на 3.5;
// ако имаме 56abc parseFloat ще всеме само 56;
// .toFixed прави числото на стринг :) ;

// console.log("There's a tree in front of my house.");
// console.log('There's a tree in front of my house.');
// за да избегнем проблемите на втория ред, може да сложим \ преди кавичката - escaping the character. 
// вече го приема като знак.

//  console.log(`${i} `.repeat(i)); - repeat(n) повтаря n пъти каквото искаме;
// "neshtosi".repeat(5);
//  let result = `${n} `.repeat(n);  

// return; - прекратява цялата функция;

// местене на ред - слагаме курсора, задържаме alt и със стрелките нагоре - надолу;

// //console.log(i, a[i]) - можем да ги отделяме със запетая, то ги принтира с интервал
// function test() {
//     let a = "Hello world!";
//     for (i = 0; i < a.length; i++) {
//         console.log(i, a[i]);
//     }
// }



// function rightPlace(word, symbol, match) {
//     let newWord = word.replace("_", symbol);
//     let result = newWord === match ? "Matched" : "Not Matched";
//     console.log(result);
// }
// rightPlace('Str_ng', 'I', 'Strong');
// rightPlace('Str_ng', 'i', 'String');


// string.replace(searchValue, newValue) - заменя първия стринг с втория;
// let originalString = "Hello, World!";
// let newString = originalString.replace("World", "Universe");
// console.log(newString); // Извежда: "Hello, Universe!"


// let originalString = "The cat and the cat and the dog.";
// let newString = originalString.replace(/cat/g, "kitten"); //  така заменяме всички "cat" в стринга;
// console.log(newString); // Извежда: "The kitten and the kitten and the dog."





// тернарен оператор:
// true ? "returned true" : "returned false";
// sum % 1 == 0 ? sum += ' - Integer' : sum += ' - Float';
// let result = newWord === word ? "Думите са равни" : "Думите не са равни";
// условие ? израз_ако_условието_е_истина : израз_ако_условието_е_невярно


// супер обяснение на тернарния оператор:
// items = items ? items.split(", ") : [];    // JS Advanced U8-4-Heroic Inventory 2.js;
// items ? items.split(", ") - Това е условен (тернарен) оператор в JavaScript. Той проверява дали items е истина (не е null, undefined, false, 0, NaN или празен низ). Ако items е истина, тогава изразът продължава към следващата част: items.split(", "). Това означава, че ако items е дефинирано и не е празен низ, ще използва split(", "), за да го раздели на елементи на масив, използвайки запетайки като разделител.
// : [] - Това е алтернативна стойност, която се използва, ако първата част на тернарния оператор не е истина. В случай че items не е истина, в този случай празен низ или null, изразът ще върне празен масив [].
// Изразът съчетава тези две части, за да създаде масив от елементи, разделени по запетайки, ако items е дефинирано и не е празен низ, иначе връща празен масив.


// let isVqrno = sum % 1 == 0;
// console.log(`${sum} - ${isVqrno ? "Integer" : "Float"}`);


// можем да разделим на 0 - получаваме Infinity;

// Number.MAX_SAFE_INTEGER е най-голямото безопасно цяло число, което можем да съхраним в number;
// ако съхраним по-големи, ще има дупки;
// имаме цяла част, наречена manitssa и exponent; 
// mantissa са значещите цифри, експонентата е на коя степен да го вдигнем;
// 3.14 има мантиса 314 и експонента -2; 314 * 10^-2;
// IEEE754(?) стандарт - не е 10, а е 2; двуична експонента и мантиса;
// но не всички стойности могат да бъдат представени като степени на 2, затова имаме и дупки;
// Number.MIN_VALUE и Number.MAX_VALUE - те са за числа с плаваща запетая;


// NaN == NaN -> това е false, защото например:
// Number("p") == Number("s"); - и двете са NaN, но са различни NaN;
// Number("p") == Math.sqrt(-1); - false. Отново и двете са NaN, но различни;
// Number.isNaN(Number("p")); - дава true; проверка дали е NaN;
// a = 5;
// isNan(a); -> това си дава false;


// let a = 1; let a = neshtoSi;
// if (a) { числата имат стойност, без 0 (при 0 получаваме undefined), думите имат стойност, приема се за true и влизаме}; - true;
// let a; let a = 0; 
// if (a) - undefined;

// Boolean(undefined); - false;
// Boolean(0); - false;
// Boolean(-0); - false;
// Boolean(""); - false;
// Boolean(false); - false;
// Boolean(null); - false;
// Boolean(NaN); - false;
// всичко останало е true;

// Boolean([]); - true; празния масив е обект; съответно празния обект е true;
// Boolean({}); - true;


// let sumAsString = String(sum);
// let isAmazing = sumAsString.includes("9"); дава true or false; - includes("neshto si") проверява дали стринга съдържа нещо си; проверява дали съществува такъв текст в стринга;
// let isAmazing = sum.toString().includes("9"); // - това може да замени горните 2 реда;


// Undefined & Null 
// Undefined - не съществува; Null - празно;
// undefined интерпретаторът задава по подразбиране на всички променливи, които сме създали, но не сме им задали стойност;
// let a; -> undefined;
// ако дадена променлива има стойност undefined, означава, че тя никога не е ползвана;
// ако дадена променлива има стойност null, значи някой я е ползвал и я е занулил;
// typeof null -> Object; typeof undefined -> undefined;
// let a = null; - ако някой го е направил, си казваме ахаа, тука ще влезе някакъв обект;
// null е стойност, която е сложена. Някой някъде я е задал.
// и двете са false ако ги сложим в if;
// еднакви са по стойност, но са различни по тип;
// null != undefined -> false;
// null !== undefined -> true;
// null == undefined -> true;


// Data types: 7 
// Number;
// String;
// Symbol;
// null;
// undefined;
// Object;
// Boolean;

// променливи - наричат се идентификатор, трябва да започват с буква, _ или $;
// дефинираме ги с let - има block scope; var има function scope (затова и не го използваме);


// let letter1 = String.fromCharCode(96+i); - за i = 1 дава a; съответно за i = 2 дава b и т.н.;

// letter1.toUpperCase() - това прави буквата а -> А;
// letter2.toLowerCase() - A -> a;
// if(letter === letter.toUpperCase()) проверяваме дали е главна;

// ето как можем да вземем дума и да направим само първата буква главна:   !!!!!
// color = `${color.charAt(0).toUpperCase()}${color.slice(1)}`,



// ASCII table; "a".charCodeAt() - това ни дава кой номер е този символ - 97;
// "abc".charCodeAt(0) = 97 -> a; "abc".charCodeAt(1) = 98 -> b; "abc".charCodeAt(2) = 99 -> c;
// console.log(String.fromCharCode(i)) - така отпечатваме определени символи от ASCII;

// .reverse() - обръща наобратно;




// Arrays

// референтен тип данни; самата променлива държи адреса на данните в паметта, а не самите данни; както на шофьорската книжка и личната карта, адреса е един и същ. Няма значение откъде ще прочетеш адреса, ще стигнеш на едно и също място;
// плътен масив - няма дупки между елементите;
// Mutator - мутатори- методи които променят съдържанието на масива;
// Accessor - аксесори - методи, които връщат нов масив (или стойност от него) без да модифицират масива;
// итератори, които обхождат масива;
// reducer - може да редуцира масива до 1 стойност; може и много стойности; можем с него да реализираме всички останали методи;
// array of arrays = matrix; ако не са с еднаква дължина го наричаме назъбен масив;


// let arr = [10, 20, 30, 40, 50];
// let [a, b, ...arr2] -> a = 10, b = 20, arr2 = [30, 40, 50];

// let numbers = [3, 5, 8];
// numbers[0] = 9; - можем да променяме данните в array;
// numbers -> [9, 5, 8]; 
// numbers[0] + numbers[2] = 17;
// console.log(numbers.length) = 3;
// console.log(numbers) = [9, 5, 8];

// можем да добавяме към масив:
// let arr = [10, 20, 30];
// arr[length] = 40;
// console.log(arr) -> [10, 20, 30, 40];
// arr.push(50);
// console.log(arr) -> [10, 20, 30, 40, 50];
// arr.push(60, 70, 80);
// console.log(arr) -> [10, 20, 30, 40, 50, 60, 70, 80];

// масивите са по-бързи от стринговите операции;
// индекс на невалидна позиция - индекс, зад който не стои нищо; получаваме undefined ако искаме да го достъпим, можем да съхраним стойност на него;
// ако имаме arr = [10, 20, 30], можем да направим така:
// arr[5] = 60;
// arr = [10, 20, 30, <2 empty slots>, 60];
// arr.length = 6;
// arr[3] -> получаваме undefined;

// невалиден индекс:
// arr[-4] -> undefined, но не добавя нищо към arr-то;
// но можем да го ползваме: arr[-4] = 1;
// Array(6) [ 10, 20, 30, <2 empty slots>, 60 ]
// "-4": 1  - като стринг излиза 4-ката; като обхождаме масива, не го хващаме;
// 0: 10
// 1: 20
// 2: 30
// 5: 60
// length: 6

// let arrAsString = arr.toString();
// console.log(arr); -> [10, 20, 30, …, 60, 1, …];
// console.log(arrAsString); -> 10,20,30,,,60

// console.log(arr.includes(10)); -> печата true; - пита дали има 10 в масива;
// console.log(arr.includes("10")); -> false;
// console.log(arr.includes(15)); -> печата false;

// arr.join() -> добавя символ между елементите на масива; -> печата 10,20,30,,,60  ;
// arr.join(999) -> 10999209993099999999960 ;
// console.log(arr.join(" neshto si ")) -> 10 neshto si 20 neshto si 30 neshto si  neshto si  neshto si 60  ;
// console.log(arr1.join("\n")); - това ще отпечата всеки елемент от масива на нов ред;


// console.log("length =", arr.length); - тук не е нужно да добавяме интервал след = ;
// console.log("length = " + arr.length);


// let arr = []; -> създаваме празен масив;
// let arr1 = new Array(); -> също създаваме празен масив, има малко разлика;
// let arr1 = new Array(2); -> създаваме празен масив с дължина 2;
// let arr2 = new Array(5).fill(3);
// console.log(arr2); -> [3, 3, 3, 3, 3];


// .fill  
// let arr = [1, 2, 3, 4];
// arr.fill(0, 2, 4) -> [1, 2, 0, 0];
// запълва с нули от позиция 2 до позиция 4. 4 е извън масива и го игнорира. Ако не подадем крайния индекс, пълни целия масив. Ако не подадем никакъв индекс, само някаква стойност, пълни целия масив с тази стойност.


// събиране на масиви:   .concat
// let allGuests = vipList.concat(regularList); - събира елементите на двата масива в един общ масив;
// let arr1 = [1, 3, 5];
// let arr2 = [4, 8, 15];
// let total = arr1.concat(arr2); // -> [1, 3, 5, 4, 8, 15];
// let total2 = [...arr1, ...arr2]; //-> прави същото;



// slice:    - не манипулираме основния масив;
// let arr = [5, 6, 7, 8, 9];
// console.log(arr.slice(1, 3)); -> [6, 7]; - взима елемента на първия индекс, но не взима елемента на втория индекс!!!;
// arr остава непроменен.
// console.log(arr.slice(2)); -> [7, 8, 9]; - взима всички елементи след 2-рия, до края на масива;
// console.log(arr.slice(2, 50)); -> [7, 8, 9]; ако индекса е много голям, връща до края на масива;
// console.log(arr.slice(-2, 4)); -> [8]; -1 е отзад напред, демек 9-ката; до 4-ти, което реално пак е тя;
// console.log(arr.slice(-2, -1)); -> [8];
// console.log(arr.slice(-2)); -> [8, 9];
// console.log(arr.slice(-1)); -> [9]; - това можем да си го ползваме, за да взимаме последния елемент от масива;
// let newArr - arr.slice(); - това прави плитко копие на масива; вече newArr си е отделен масив; arr остава непроменен;

// let arr = [[1,2], [3, 4], [5, 6]];
//     let newArr = arr.slice();  // копието е само по външните референции - плитко копие; затова и arr се променя; На първото ниво се губи референцията, но на вътрешните нива референцията я има и тя сочи на същите места в паметта;
//     newArr[0].push(10);     
//     console.log(arr[0]);  -> [1, 2, 10];
//     console.log(newArr[0]);   -> [1, 2, 10];

// let arr = [1, 3, 4, 5, 7, 11];
// console.log(arr.slice(0, 2)); // -> [1, 3]
// console.log(arr.slice(0, -2)); // -> [1, 3, 4, 5]
// console.log(arr.slice(-2)); // -> [7, 11]
// console.log(arr.slice(-4, 5)); // -> [4, 5, 7]
// броим индексите от дясно наляво, но вземаме елементите отляво надясно;



// splice:    - манипулираме основния масив; връща нов масив, let result = arr.splice(1) -> result = [5];
// let arr = [5, 6, 7, 8, 9, 10];
//     console.log(arr.splice(2, 3)); -> [7, 8, 9]; - изрязва от [2-ря елемент, 3 елемента; променя оригиналния масив!;
//     console.log(arr); -> [5, 6, 10];

// let arr = [5, 6, 7, 8, 9, 10];
//     console.log(arr.splice(2)) -> [7, 8, 9, 10] - от втория елемент, до края;
//     console.log(arr); -> [5, 6]; 

// let arr = [5, 6, 7, 8, 9, 10];
//     console.log(arr.splice(2, 2, 20, 30, 40, 50)); -> [7, 8]; освен да реже, splice може и да добавя елементи в масива;
//     console.log(arr); -> [5, 6, 20, 30, 40, 50, 9, 10]; 

// let arr = [5, 6, 7, 8, 9, 10];
//     console.log(arr.splice(-2)); -> [9, 10];
//     console.log(arr); -> [5, 6, 7, 8];

// let arr = [5, 6, 7, 8, 9, 10];
//     console.log(arr.splice(-4, 2)); -> [7, 8];
//     console.log(arr); -> [5, 6, 9, 10];

// let arr = [5, 6, 7, 8, 9, 10];
//     console.log(arr.splice(2, 0, 30, 40, 50)); -> [];
//     console.log(arr); -> [5, 6, 30, 40, 50, 7, 8, 9, 10];

// .splice() - служи за премахване на елемент от масив;
// let arr = [5, 6, 7, 8];
// let toRemove = 2; - това е индексът;
// arr.splice(toRemove, 1); - премахваме 1 елемент от индекс toRemove; съответно можем да премахнем повече от 1, от индекса нататък;

// .splice() - служи и за добавяне на елемент в масив;
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 0, 100); // На индекс 2, без премахване на елементи, добавете 100
// console.log(arr); // Извежда: [1, 2, 100, 3, 4, 5]

// .splice()  може да вкара масив в масива, може да го вкара и като елементи:
// let arr = [10, 20, 30, 40];
// let arr2 = [5, 6, 7];
// let result = arr.splice(1, 0, myArr); -> result = [10, [5, 6, 7], 20, 30, 40];
// и ето как да го вкараме като елементи:
// let result = arr.splice(1, 0, ...myArr) -> result = [10, 5, 6, 7, 20, 30, 40];


// .toSpliced() - има я в новите версии, не променя оригиналния масив; mdn за повече инфо; node версия 20;





// .map     - map връща нов масив, който е трансформиран в нещо;
// .map съдържа 3 неща: първо, текущият елемент. Второ, индексът на който се намира и третото е референция към себе си, демек референция към масива, който итерирам; C:\Users\mitev\Desktop\JS Advanced\U4-3-Same Numbers 2.js
// let arr = ["1", "2", "3", "4", "5"];
// arr.map((a) => console.log(a)); -> печата на нов ред 1, 2, 3, 4, 5; но arr си остава същия. Просто като минаваме през този ред, тогава се печатат цифрите на нов ред; тази функция се прилага на всеки един от елементите;

// arr.map((a) => Number(a));
// console.log(arr); -> ['1', '2', '3', '4', '5'] - остава си същия масив, но:

// let arrNumber = arr.map((a) => Number(a));
// console.log(arr); -> ['1', '2', '3', '4', '5'];
// console.log(arrNumber); -> [1, 2, 3, 4, 5]; 

// let arrNumber = arr.map((a) => Number(a) + 1);
// console.log(arrNumber); -> [2, 3, 4, 5, 6];

// let arr = ["1", "2", "3", "4", "5"];
//     let newArr = arr.map(Number); // Number e конструктор функция; очаква да получи една стойност и да я върне като число. Затова е възможно да подадем само Number, защото той реално си е функция;
//     console.log(newArr); -> [1, 2, 3, 4, 5];

// скобичките при ламбда функциите не са задължителни. Стават задължителни ако имаме повече от един параметър;
// let newArr = arr.map(a => Number(a)); - ок е;
// let newArr = arr.map(a, i => Number(a)); - не е ок, ще върне i is not defined;
// let newArr = arr.map((a, i) => Number(a)); - ок е вече. Имаме повече от един параметър, така че слагаме в скоби;

// let arr = ["one", "two", "three", "four", "five"];
//     let arrLengths = arr.map(a => a.length);
//     console.log(arrLengths); -> [3, 3, 5, 4, 4];


// let arr = ["Gosho", "Tosho", "Pesho"];
//     let newArr = arr.map((a) => a + 1);
//     console.log(newArr); ->  ['Gosho1', 'Tosho1', 'Pesho1'];

// let newArr = arr.map(function(a) { return "new" + a;}); - прилагаме една и съща логика върху всеки елемент на масива;
// console.log(newArr); -> ['newGosho', 'newTosho', 'newPesho'];

// let arr = ["Gosho", "Tosho", "Pesho"];
//     let newArr = arr.map(function (a, i) {
//         console.log(i);
//         return "new " + a;
//     }); // печата на нов ред 0, 1 ,2 - индексите на масивите;
//     console.log(newArr); -> ['new Gosho', 'new Tosho', 'new Pesho'];

// let arr = ["Gosho", "Tosho", "Pesho"];
//     let newArr = arr.map(function (a, i, self) {
//         console.log(self);  // self означава референция към оригиналния масив; може да се правят някакви неща с тях във функцията;
//         return "new " + a;
//     }); -> връща 3 пъти ['Gosho', 'Tosho', 'Pesho'];
// console.log(newArr); -> ['new Gosho', 'new Tosho', 'new Pesho']

// map(element => Number(element)); - това може и .map(Number); - едно и също е;

// Predicate is a function returning a boolean value (true or false);




// .some   - проверява дали някой от елементите отговаря на някакво условие.
// пример: търсим дали някой от елементите е четен:
// let arr1 = [3, 5, 1, 7, 6, 8];
// console.log(arr1.some(e => e % 2 ==0)); // -> true;


// .every   - проверява дали условие е вярно за всички елементи;
// console.log(arr1.every(e => e % 2 == 0)); // -> false



// find   
// let arr1 = [3, 5, 1, 7, 6, 8];
// console.log(arr1.find(e => e % 2 == 0)); // -> 6
// console.log(arr1.findIndex(e => e % 2 == 0)); // -> 4, индекса на 6-цата;



// filter   - връща масив с елементи, само които отговарят на условие; find връща първия, filter връща всички;
// let arr1 = [3, 5, 1, 7, 6, 8];
// console.log(arr1.filter(e => e % 2 == 0)); // -> [6, 8];


// .filter   - връща нов масив; предикат - приема conditional; приема условие на всеки един от елементите;
// .filter съдържа 3 неща: първо, текущият елемент. Второ, индексът на който се намира и третото е референция към себе си, демек референция към масива, който итерирам
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//     let newArr = arr.filter(a => a > 4);
//     console.log(arr); -> [1, 2, 3, 4, 5, 6, 7, 8]; 
//     console.log(newArr); -> [5, 6, 7, 8]; 

// let arr = [1, 3, 7, 4, 1, 8, 9];
//     arr = arr.filter(a => a != 1);
//     console.log(arr); -> [3, 7, 4, 8, 9];

// let arr = ["aa","aaa", "aaaaa", "aaaaaaaaaaa"];
//     let newArr = arr.filter(a => a.length > 4);
//     console.log(arr);  -> ['aa', 'aaa', 'aaaaa', 'aaaaaaaaaaa']
//     console.log(newArr); -> ['aaaaa', 'aaaaaaaaaaa'];
//     console.log(newArr.reverse()); -> ['aaaaaaaaaaa', 'aaaaa'];




// .sort();   - променя масива; работи върху масива, връща себе си; sort() работи с ASCII стойностите; по дефолт има малко непредвидимо поведение;  

// ето как да сортираме масив от стойности:
// let arr = [20, 40, 10, 30, 100, 5];
// arr.sort((a, b) => a - b); // когато a, b съвпада с a - b имаме нарастващо. ако беше b - a щеше да е намалящо;
// console.log(arr); // -> [5, 10, 20, 30, 40, 100]

// ето как да сортираме масив от стойности: + по втори критерий
// let arr = [1, 5, 4, 11, 7, 3];
// function compare(a, b) { return a - b || тук слагаме втория критерий;}  // ако a - b = 0, става falsy, съответно тогава гледа втория критерий; може някакви if-ове, важното е да ретърнем някакво число;
// arr.sort(compare);
// console.log(arr); // -> [1, 3, 4, 5, 7, 11]


// let arr = [1, 5, 7, 3, 8, 10, 20, 30];
//     console.log(arr.sort()); -> [1, 10, 20, 3, 30, 5, 7, 8]; 
//     console.log(arr.sort((a, b) => a - b)); -> [1, 3, 5, 7, 8, 10, 20, 30];
// използваме compare функция: получаваме 2 елемента, (a, b) => отиват в някакъв conditional; ако искаме от малко към голямо пишем a - b; резултатът от a - b се свежда до отрицателно, 0 , положително число. Ако резултатът е 0 или отрицателно, елементите в масива не се разместват; ако резултата е положителен, двата елемента се разменят: а отива след b;
// console.log(arr.sort((a, b) => b - a)); -> [30, 20, 10, 8, 7, 5, 3, 1];


// let arr = ["Gosho", "Pesho", "Stamat"];
//     arr.sort((a, b) => a.localeCompare(b));
//     console.log(arr);  -> ['Gosho', 'Pesho', 'Stamat'];
//     arr.sort((a, b) => b.localeCompare(a));
//     console.log(arr);  -> ['Stamat', 'Pesho', 'Gosho'];


// .localeCompare - когато искаме да подреждаме стрингове и не искаме да са зависими от ASCII стойностите го използваме;

// let arr = ["aas", "ac", "Aaw"];
// arr.sort((a, b) => a.localeCompare(b)); // ['aas', 'Aaw', 'ac'];
// arr.sort(); // ['Aaw', 'aas', 'ac'];
// A е по-напред от а в таблицата, затова на долния ред нарежда Aaw пред aas;


// let arr = ['Jack', 'john', 'jake', 'Ivo', 'Ico'];
//     arr.sort((a, b) => a.length - b.length || a.localeCompare(b));  - това е начин да подредим масив по 2 критерия. Първия е основен, после е вторичния. Първо ги подреждаме по дължина на стринга, после и по азбучен ред. Ако в лявата част получим стойност 0(a.length - b.length = 4 - 4 = 0), тогава преминаваме към втория критерий. Реално ако първата проверка върне true или false, ние не минаваме към втората проверка. Ама ако даде 0, ние нямаме реално отговор и преминава към втората.
//     console.log(arr); -> ['Ico', 'Ivo', 'Jack', 'jake', 'john'];



// let i = arr.indexOf(name); - това ще ни даде индекса на който стои name;





// reduce()  
// arr.reduce(reducer, acc) - имаме 2 параметъра, reducer е функцията, която прави каквото трябва; acc е акумулатора, демек кофичката, в която събираме това, което функцията прави;
// reducer(acc, current, i, arr) - 4 параметъра; (ползваме предимно първите два); първо приема акумулатор (кофичката), втория е текущия елемент; третия е индекса и четвъртия е масива;
// sum = arr1.reduce((acc, value) => acc + value); - това е сума от елементите в масив; замества един for цикъл;

// ето пример:
// let arr3 = [3, 4, 5, 6];
// let reducer1 = (accumulator1, currentValue) => accumulator1 + currentValue;
// console.log(arr3.reduce(reducer1)); // -> 18, ако няма "кофичка", той приема първия елемент за кофичка;
// console.log(arr3.reduce(reducer1, 10)); // -> 28;

// почти същия пример:
// let arr3 = [3, 4, 5, 6];
// let reducedArr3 = arr3.reduce((a, current) => a + current);
// console.log(reducedArr3); // -> 18; 

// още един пример:
// let arr = [3, 8, 1, 5, 7, 4];
// function reducerche(sum, num, i) {   // reducer-a с 3 от неговите 4 параметъра;
//     console.log(sum, num, i);
//     return sum + num;
// }
// let result = arr.reduce(reducerche, 10);
// console.log(result); // -> 
// 10 3 0
// 13 8 1
// 21 1 2
// 22 5 3
// 27 7 4
// 34 4 5
// 38




// let arr1 = [1, 2, 2, 4, 2, 2, 2, 9];
// let i = arr1.indexOf(2);
// console.log(i); -> 1; печата само първото място;


// масивите са специални обекти; имат вградени методи и свойства;
// свойство значи стойност, метод е функция;
// променливата като самостоятелна със собствено име си е променлива; като е вкарана в обекта става нейно свойство;
// функциите като ги вкараме в обекта ги наричаме метод; пишем ги с точка след името на променливата, пример: arrayche.length;

//  /*  .....  */ - така закоментираме от - до;

// For - of цикъл:
// let arr = [10, 20, 30, 40];
// for (i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     console.log(element);
// }                          същото е това тук:
// for (element of arr) {   // for (let element of arr)
//     console.log(element);
// }




//    .shift()     - променя масива;
// arr.shift() - премахва първия елемент от масива; променя масива; Пример:
// let arr = [3, 5, 8];
// let firstArr = arr.shift();
// -> firstArr = 3;
// -> arr = [5, 8];

// .split() превръща string в array;
//  let arr = arrToString.split("|"); - на местата на всички | разделя стринга на масив;




//      .pop()  премахва последния елемент от масива;   - променя масива;
// let arr = [1, 2, 3, 4, 5];
// arr.pop(); // -> премахва последния елемент от масива;
// console.log(arr); //-> [1, 2, 3, 4];
// console.log(arr.pop()) -> това ще изведе последния елемент от стринга и ще го е премахнал от него!;

// let posleden = arr.pop(); // - това вече ще даде 4
// console.log(arr); // - вече ще е [1, 2, 3];
// console.log(posleden); // -> дава 4;


//  .unshift() - поставя елемента най-отпред на масива;
// let arr = [1, 2, 3, 4]
// let lastElement = arr.pop(); -> lastElement = 4; arr = [1, 2, 3];
// arr.unshift(lastElement); -> arr = [4, 1, 2, 3];


// arr.includes() - проверява дали елемент се съдържа в масива;
// let arr = [1, 2, 3, 4];
// console.log(arr.includes(4)); -> true;
// console.log(arr.includes(1, 2)); -> false, защото сме му задали да търси 1 от 2-рия индекс нататък;


// arr.indexOf(1); - показва индекса на търсеният елемент в масива;
// let arr = [1, 2, 3, 4];
// console.log(arr.indexOf(1)); -> това ще върне 0;

// let arr = [2, 1, 1, 2, 3, 4, 2];
// console.log(arr.indexOf(2, 1)); -> това ще даде 3, защото започва да търси след 1-вия елемент;

// let arr = [1, 2, 3, 4];
// console.log(arr.indexOf(1, 1)); -> това ми даде -1, защото ако не намери елемента, просто връща -1;




// Arrayche.filter(); arr = [1, 2, 3, 4, 5];
// newArr = arr.filter(function(num) {return num % 2 === 0;}); // - това директно създава нов масив;
// console.log(newArr); -> [2, 4]; - връща четните;

// if (petersGames.includes(game)){
//     petersGames = petersGames.filter(function(element) {return element !== game;});
// }  - това премахва game от масива petersGames. Примерно game = "Yuri", вече я няма в масива;


// Alt + Z - пренася текста на нов ред, без реално да е на нов ред;

// Settings -> Keyboard shortcuts -> пишем cursorEnd и си го променяме на Shift + Space;

// Ctrl + Shift + P - пишем Toggle Word Wrap - равносилно на Alt+Z; пренася на нов ред;

// goto 20 -> програмата скача на 20-ти ред;

// идентификатор - заглавието, името на нещото, с което работим: променливи, функции 
// списъкът с параметрите е в скобите; списъкът с параметрите създава променливите;

// retunr се използва, за да върне стойност от функция. Когато дадена функция изпълни оператора return, изпълнението на фукнцията се спира и стойността, която е върната от return се предава като резултат от функцията. Това позволява на кода да получи и използва резултата, генериран от функцията;

// return - прекратяваме изпълнението на фукнцията и връщаме това, което е в израза след return;

// няма функция, която да не връща никакъв резултат! Така че ако не сме сложили някакъв return вътре, просто ще ни изкара undefined; L14-test5; 
// щом сме минали през тази функция, независимо къде е, тя ще си даде undefined; така че рандом функции някъде оставени няма как да бъдат незабелязани;
// наричат се void функции;
// в браузъра се вижда доста добре; браузъра винаги накрая връща резултат от извикването на функцията;

// независимо, че функцията е извадена навън, ние получаваме резултатите; кода ще се прочете 2 пъти, първия път интерпретатора минава и взима всички функции и техните имена; създава регистър и слага имената на функциите в регистъра; така че можем да изпълняваме функциите преди тяхното деклариране; L14-test5 5;

// рекурсия - извикване на функция в себе си;
// рекурсията трябва да има дъно, за да бъде прекъсната;
// по-добре е да използваме while цикъл и да избегнем рекурсията. Можем ли - избягваме я, тя е по-бавна; тя чака резултата от себе си. 


// function neshtoSi(a) {   
//     console.log(a);     a - параметър;
// }                       5 - аргумент;
// neshtosi(5);


// function printCertificate(grade, arrName) {  // Fundamentals L14-test10
//     if (!didYouPass(grade)) {    // това се нарича pattern;
//         return console.log(`Student does not qualify`);
//     }


//  Arrow Functions: - виж Fundamentals L14-5-Simple Calculator

// function solve1() {
//     let sum = (a, b) => a + b;   
//     let res = sum(3, 5);
//     return res;
// }
// console.log(solve1());

// function solve2() {
//     let sum = a => a * 2;   // ако е един параметърът, не е нужно да ползваме скоби;
//     let res = sum(3);
//     return res;
// }
// console.log(solve2());

// function solve3() {
//     let sum = (a, b) => {
//       return a + b
//     }  // ако е на повече от 1 ред, използваме {} като вътре задължително използваме return. Иначе връща undefined;
//     let res = sum(3, 5);
//     return res;
// }
// console.log(solve3());

// function solve4() {
//     let sum = arr => arr.length;  // може да го ползваме и за масив;
//     let res = sum([3, 5, 5, 8]);
//     return res;
// }
// console.log(solve4());



// (e) => console.log(e) - ако вкараш това в judje, той изкарва входните данни. Може от там да ги копираме.

// =>  да си го представям като думичката "прави". Еди кое си прави еди какво си;



// .flat();
// let arr5 = [[1, 2], [7, 8], [10, 11]];
// let arr6 = arr5.flat();
// console.log(arr6); // -> [1, 2, 7, 8, 10, 11];





//  find    find    find 

// let isThereMovie = movieArr.find(isThereMovie => isThereMovie.name == movieName); // от наличните филми намери този филм, чието име (има свойство name) е същото като movieName; методът find ако намери нещо, ще върне индекса на първото, което е намерил; ама тук така като гледам си връща true; isThereMovie е обект; той променя свойствата си на същия ред докато търси филма, но ако не намери нищо си остава undefined; докато търси първо е "Fast and Furious", после става "Godfather" и т.н.; в крайна сметка ако намери филма, isThereMovie става същия обект като movieObj и можем да добавяме към него, защото е референтен и като променяме единия, съответно променяме всички обекти;

// for (movie of movieArr) {
//     if (movie.name && movie.director && movie.date) { // проверяваме дали в обекта има и трите key-я;
//         console.log(JSON.stringify(movie));
//     }


// function solve() {
//     let arr = ["Ivan", "Stamat", "Kurti", "Pesho", "Tosho"];
//     let searchPerson = arr.find(person => person == "Tosho");
//     console.log(searchPerson);  // -> Tosho
// }
// solve();

// function solve2() {
//     let arr = ["Ivan", "Stamat", "Kurti", "Pesho", "Tosho"];
//     let searchPerson = arr.find(person => person == "Dancho");
//     console.log(searchPerson);  // -> undefined
// }
// solve2();

// function solve3() {
//     let arr = ["Ivan", "Stamat", "Kurti", "Pesho", "Tosho"];
//     let searchPerson = arr.find(searchPerson => searchPerson == "Tosho");
//     console.log(searchPerson);  // -> Tosho
// }
// solve3();

// function solve4() {
//     let arrObj = [
//         { name: "Ivan", age: 21 },
//         { name: "Stamat", age: 22 },
//         { name: "Kurti", age: 27 },
//         { name: "Pesho", age: 28 },
//         { name: "Tosho", age: 31 },
//     ]

//     let searchPerson = arrObj.find(person => person.name == "Stamat");
//     console.log(searchPerson);  // -> {name: 'Stamat', age: 22}
// }
// solve4();

// function solve5() {
//     let arrObj = [
//         { name: "Ivan", age: 21 },
//         { name: "Stamat", age: 22 },
//         { name: "Kurti", age: 27 },
//         { name: "Pesho", age: 28 },
//         { name: "Tosho", age: 31 },
//     ]
//     let searchPerson = arrObj.find(searchPerson => searchPerson.name == "Stamat"); // демек това ни намира обекта в който е името и ни дава него;
//     console.log(searchPerson);  // -> {name: 'Stamat', age: 22}
// }
// solve5();



// forEach  
// forEach() може да приеме до 3 параметъра; първия е елемента, втория е индекса, третия параметър е самият масив; не връща резултат; изпълнява; не може да бъде прекратена;
// for ([company, id] of arrSorted) {
//     console.log(company);
//     id.forEach(idid => console.log(`-- ${idid}`)); // forEach - за всеки елемент на масива прави еди какво си;

// allGuests.forEach(a => console.log(a)); // демек отпечатай всеки елемент;

// пример:
// let arr1 = [3, 5, 1, 7, 6];
// arr1.forEach((c, i, theArr) => {
//     console.log(i, c, theArr);
// });   
// това ще върне:
// 0 3 (5) [3, 5, 1, 7, 6]
// 1 5 (5) [3, 5, 1, 7, 6]
// 2 1 (5) [3, 5, 1, 7, 6]
// 3 7 (5) [3, 5, 1, 7, 6]
// 4 6 (5) [3, 5, 1, 7, 6]




// горното и долното са едно и също;

// for (el of arrSorted) {
//     console.log(el[0]);
//     for (elel of el[1]) {
//         console.log(`-- ${elel}`);
//     }
// }




// --------------------------------------------------------




// Objects
// Обекти и класове

// Обектите са структура от взаимно свързани данни и/или функционалност; съдържа стойности, които ги достъпваме със стрингов ключ; може да съдържа 2 вида стойности - данни (свойства) и функции (методи); можем да добавяме и премахваме свойства;
// важат си правилата за литералите - ако искаме стринг си го слагаме в кавички, числата са си числа, ако искаме булева - true или false, може да имаме масив и обект;
// можем да създадем празен обект и после да го достъпваме с . или [" "];
// обектите имат свойства - променливи, които имат име (ключ) и стойност (също като променлива);
// променливи, закачени за обекта. Доста по-добре, отколкото да си хвърчат;
// асоциативен масив - можем да го разглеждаме като колекция от еднотипни данни; ако имаме person с някакви неща за него, няма много голям смисъл да го ползваме за асоциативен масив; Но ако е примерно имена на хора с техните адреси - това вече можем да го наречем асоциативен масив;
// разликата между обект и асоциативен масив -> разликата е начина по който ги използваме;
// сортиране на обект - стандарта екма казва, че имат ред - реда на създаване или добавяне; няма как да сортираме обект; можем да изтрием ключовете и да ги добавим в желания ред; може да превърнем обекта в масив и вече да сортираме масива;
// референтен тип данни - вътре в променливата съхраняваме адреса, а данните са съхранени някъде в паметта. 2 адреса сочат към едни данни в паметта; Пример:
// let x = {name: "John"};
// let y = x;
// y.name = "Steve";
// console.log(x.name); // -> Steve;

// достъпваме на променливата става с . и името на променливата: console.log(person.name); - реално цялото име на променливата е person.name; 
// за ключовете не важат правилата за имена на променливи?; в името на ключа може да се съдържат всякакви символи;
// ако примерно имаме интервал в ключа, трябва да го напишем в кавички; достъпваме го с индексиращия оператор:
// ако достъпим ключ, който го няма, ще получим undefined;


// let person = {
//     name: "Peter",
//     age: 27,
//     "last name": "Jackson", // -> когато има интервал в ключа, слагаме кавички;
// };
// console.log(person);
// console.log(person.name);
// console.log(person["last name"]); -> когато има интервал, не може с . да достъпим ключа;


// сменяне на стойност на ключ в обект:
// person.name = "Jakob";  // ето така сменяме стойността на ключа;
// person["last name"] = "Ivanovich"; // ето така сменяме стойността на ключа; ако има интервал или специален символ в името, само това е начина;

// към по-горния пример:
// let keykey = "last name";
// console.log(person[keykey]); // -> Ivanovich
// console.log(person.keykey); // -> undefined, така че не ги бъркай;

// person.keykey === person["keykey"]; това е добре да го запомня;


// ето как да трием от обекта:
// person.height = 180; // - добавихме височина
// delete person.height;  // изтрихме височината;
// delete person["height"]; // - същото, трие височината;
// delete не проверява дали има такъв ключ със стойност, ако няма - просто си продължава изпълнението;


// ето как да добавяме към обекта:    !!!!!!!!!!!!!!!!
// person.car = "Suzuki";
// person["car hp"] = 60;
// console.log(person); // -> {name: 'Jakob', age: 27, last name: 'Ivanovich', car: 'Suzuki', car hp: 60}

// let color = "white";
// person.carColor = color;
// console.log(person.carColor); // -> white



// създаваме променлива, със същото име като в обекта:
// let { age } = person;
// console.log(age); // -> 27; 
// създаваме променлива, с различно име от в обекта:
// let { age: somePromenliva } = person;
// console.log(somePromenliva); // => 27



// ... в обект:  всичко, което не сме изредили влиза в нов обект; прави плитко копие;
// let someObj = { a: 1, b: 2, c: 3};
// let {a, ...propertiies} = someObj;
// console.log(a); // -> 1
// console.log(propertiies); // -> {b: 2, c: 3}
// let modifiedObj = {...propertiies, c: 15};
// console.log(modifiedObj);  // -> {b: 2, c: 15}




// динамичен ключ:
// let dynamicKeyche = "proffesion";
// let personDynamicKey = {
//     name: "Peter",
//     age: 27,
//     [dynamicKeyche]: "junior developer",
// };
// console.log(personDynamicKey); // -> {name: 'Peter', age: 27, proffesion: 'junior developer'}



// обхождане на обект:
// for ... in 
// let person3 = {
//     name: "Peter",
//     age: 27,
//     "last name": "Jackson",
// };
// for (let kk in person3) { // обхождане на ключовете;
//     console.log(kk); // -> name; age; last name;
//     console.log(person3[kk]); // -> Peter; 27; Jackson;
// }  

// пак обхождане на същия обект: имаме Object.keys() - вадим ключовете на обекта:
// let keycheta = Object.keys(person3);
// console.log(keycheta);  // -> ['name', 'age', 'last name'];
// for (kk of keycheta) {
//     console.log(kk, person3[kk]);  
// }   // -> name Peter; age 27; last name Jackson;

// обхождане на стойностите на ключовете: Object.values()
// let vv = Object.values(person3);
// console.log(vv); // -> ['Peter', 27, 'Jackson']

// обхождане на всичко: Object.entries()
// let allThings = Object.entries(person3);
// console.log(allThings);  // -> масив от масиви [Array(2), Array(2), Array(2)] знаеш защо така го вади; [["name", "Peter"], [...], [...]];




// сортиране: трябва да превърнем обекта в масив:
// let person3 = {
//     name: "Peter",
//     age: 27,
//     "last name": "Jackson",
// };
// let allThings = Object.entries(person3);
// allThings.sort(sortirovka);
// function sortirovka(a, b) {
//     console.log(a[0], b[0], a[0].localeCompare(b[0]));
//     return 0;  // демек не сортирай, не пипай нищо; тук все още не сортираме, вадим ключовете и показваме, че ще сортираме по тях;
// }
//    // console.log тук е: age name -1; last name age 1;

// allThings.sort(sortirovka2);
// function sortirovka2(a, b) {
//     return a[0].localeCompare(b[0]); // демек връщай ей онова горе - 1 или 1; щом не е 0, това вече сортира;
// }
// console.log(allThings[0]); // -> ['age', 27]
// console.log(allThings[1]); // -> ['last name', 'Jackson']
// console.log(allThings[2]); // -> ['name', 'Peter']
// // готово, масива от масиви вече е сортиран; нарочно така съм го console.log-нал;
// // сега остава да превърнем масива от масиви в обект. Ето как: (превръщане на масив в обект:)
// let sortedArrAsObj = Object.fromEntries(allThings);
// console.log(sortedArrAsObj);  // -> {age: 27, last name: 'Jackson', name: 'Peter'}



// проверка дали в обекта има някакво property
// obj.hasOwnProperty();







// Object Methods
// функция, която е в обект;
// викаме я с иметоНаОбекта.иметоНаФункцията(параметри);


// така изглежда и така я викаме:   тук тя return-ва нещо си:
// let person2 = {
//     firstName: "Stan",
//     lastName: "Miller",
//     printAge: function(theAge) {    // можем да не пишем function тук, интерпретатора си знае, че в обект имаме или стойност, или функция. Така че си слагаме името и кръгли скоби;
//         return `My age is ${theAge}`;
//     }
// };
// console.log(person2.printAge(33)); // -> My age is 33


// така изглежда, така я викаме:  (тук са повечето неща)
// let person = {
//     firstName: "Stan",
//     lastName: "Miller",
//     printAge(theAge) {
//         console.log(`My age is ${theAge}`);
//     }
// };
// person.printAge(34); // -> My age is 34 

// можем да извадим функция от обект: (ползваме обект person от няколко реда по-нагоре);
// let functionFromObj = person.printAge;
// functionFromObj(27); // -> My age is 27

// можем и да го деструктурираме:
// let { printAge } = person;
// printAge(21);  // -> My age is 21
// и не само можем да извадим функцията, но можем и да я вложим в друг обект:
// let person3 = {
//     firstName: "Stan",
//     lastName: "Miller",
//     printAge,
// };
// person3.printAge(19);  // => My age is 19
// към това -> можем да извадим функцията и да я съхраним в друга функция с друго име. Ето как:
// let { printAge: fnForPrintingAge } = person;  // вече имаме нова функция, същата като printAge;




// ето как можем да ползваме обект с различни функции, например за калкулатор:
// тук бях написал return a++, ама тогава ми връщаше 5; предполагам защото изпълнява ++ след изпълнението на return-a;
// let num = 5;
// let myCalculator = {
//     increment(a) { return a + 1 ;},
//     decrement(a) { return a - 1; },
//     reset(a) { return a = 0; },
// }
// console.log(myCalculator.increment(num));  // -> 6
// console.log(myCalculator.decrement(num));  // -> 4
// console.log(myCalculator.reset(num));  // -> 0





// this   this   this
// this сочи към инстанцията в която е дефиниран обекта;


// let person4 = {
//     firstName: "Stan",
//     lastName: "Miller",
//     printAge() {
//         console.log(`My name is ${this.firstName}`);
//     }
// };
// person4.printAge();  // -> My name is Stan
// this сочи към това, което е отляво на точката(функцията) на горния ред;





// в следващите редове показваме как this работи при вадене на функция от обект и вкарването ѝ в друг обект:
// let person4 = {
//     firstName: "Stan",
//     lastName: "Miller",
//     printAge2() {
//         console.log(`My name is ${this.firstName}`);
//     }
// };
// person4.printAge2();  // -> My name is Stan

// let {printAge2} = person4;
// let person5 = {
//     firstName: "Dan",
//     lastName: "Petrov",
//     printAge2
// };
// person5.printAge2();  // -> My name is Dan
// // демек this си сочи към това, което е преди точката;

// printAge2(); // -> My name is undefined





// Object Composition   
// или обект в обекта:

// let person = {
//     name: "Seth",
//     age: 27,
//     location: { lat: 43.45, lng: 21.55}
// };
// console.log(person.location.lat); // -> 43.45




// OOP  -  Object-oriented programming
// обектно-ориентирано програмиране има 4 основни принципа:
// Encapsulation, Abstraction, Inheritance, Polymorphism
// 1. Наследяване - Inheritance ; 2.Капсулация - наричано още "скриване на данните" ; 3. Полиморфизъм - Polymorphism ; 4. Абстракция - Abstraction.




// JSON   
// универсален формат за обмен на данни, по HTTP протокол;
// language independent;
// кавичките са задължителни и то двойни;
// не можем да запазваме методи, защото се сериализира;
// не можем да имаме кръгова референция, някое свойство има връзка към друго свойство - не става; parsing error
// не можем да имаме свойство с undefined стойност; сериализатора го изтрива;
// имаме двойки ключ и стойност; обекти, масиви [] {}; true, false, null; число или стринг;
// JSON.parse(); -> прави го на обект
// JSON.stringify(); -> прави го JSON формат



// Factory functions with reference:
// без this; това не бачка както очаквам, някой ден дано разбера какво се случва тук;
// function createRectangular(width, height) {
//     let rectangular = { width, height };
//     rectangular.getArea = () => {
//         return rectangular.width * rectangular.height;
//     };
//     return rectangular;
// }
// console.log(createRectangular(5, 4));








//  let person = {};
//  person.name = "Peter";
//  person.age = 20;
//  person.hairColor = "black";
//  person["lastName"] = "Parker" 




// let objPeter = {
//     name: "Peter",
//     age: 20,
//     height: 180,
//     sayHello: function () {
//         console.log("Hello");
//     },
//     sayZdraweiOtnowo: () => {
//         console.log("Zdrawei otnowo");
//     },
//     sayHelloAgain() {       // това е най-удобно за запис;
//         console.log("Hello again");
//     },
// }

// function printDetails(person) {
//     console.log(person);   // -> {name: 'Peter', age: 20, height: 180}
//     console.log(person.name);  // -> Peter  // person.name може да си го представяме като цялото име на променливата;
//     console.log(objPeter.age);  // -> 20  // може, ама..
//     console.log(person.height); // -> 180
//     person.age = 21;  // тук вече променяме обекта;
//     console.log(person.age);  // -> 21
//     console.log(person["name"]);    // -> Peter
// }

// printDetails(objPeter);

// objPeter.hairColor = "brown";  // така добавяме свойство на обекта;
// console.log(objPeter);  // -> {name: 'Peter', age: 21, height: 180, hairColor: 'brown'}  // реда на свойствата е гарантиран до тук, но ако минем през някоя сериализация, то там вече реда може да се загуби.
// console.log(objPeter["name"]); // -> Peter

// let neshtoSi = "name";  // то няма смисъл да го описвам;
// console.log(objPeter[neshtoSi]);    // -> Peter

// objPeter.sayHello();  // -> Hello; 
// // свойствата, които са стойности са в синьо, а които са функции са в златисто;

// // можем да добавяме функция в обекта:   добавяме и търсим с . ; ако търсим в него [""];  когато ползваме това, просто трябва да мислим какво ползваме - ако имаме някоя променлива, то реално тя може да "идва" като стринг с кавички. И от там може да имаме някакви обърквания. В [] можем да сложим всичко, което интерпретатора може да го обърне на стринг - променлива в която е стринга, самия стринг като литерал, функция която като я викнем връща стринг;
// objPeter.sayHi = function () {
//     console.log("Hi");
// }
// objPeter.sayHi(); // -> Hi;

// // може да е arrow функция
// objPeter.sayZdrawei = () => {
//     console.log("Zdrawei");
// }
// objPeter.sayZdrawei(); // -> Zdrawei;

// // можем да извадим всички ключове
// let keykey = Object.keys(objPeter);
// console.log(keykey); // -> (9) ['name', 'age', 'height', 'sayHello', 'sayZdraweiOtnowo', 'sayHelloAgain', 'hairColor', 'sayHi', 'sayZdrawei']
// console.log(keykey[0]); // -> name => съответно на долния ред може да стане
// console.log(objPeter[keykey[0]]); // -> Peter

// let valuevalue = Object.values(objPeter);
// console.log(valuevalue);    // -> (9) ['Peter', 21, 180, ƒ, ƒ, ƒ, 'brown', ƒ, ƒ]

// let entriesentries = Object.entries(objPeter);
// console.log(entriesentries);  // -> връща масив
// console.log(entriesentries[0]); // -> (2) ['name', 'Peter']
// console.log(entriesentries[0][1]);  // -> Peter

// console.log("----------");

// // for-of
// for (let keyche of Object.keys(objPeter)) {
//     console.log(`${keyche}: ${objPeter[keyche]}`);
// }  // name: Peter; age: 21  и т.н на нов ред

// console.log("-----   -----");

// // for-in       
// // in автоматично заменя с ключовете в обекта; горния и долния запис са идентични 
// for (let keyche in objPeter) {
//     console.log(`${keyche}: ${objPeter[keyche]}`);
// }

// console.log("-------------");




// function city(obj) {
//     for (keykey of Object.keys(obj)) {
//         console.log(`${keykey} -> ${obj.keykey.}`);  //Тук изглежда че се опитвате да достъпите свойство на обект (obj.keykey), което обаче няма да работи, защото obj.keykey ще опита да намери ключ с име "keykey" в обекта, което не е желаното поведение.
//     }
// }



// Проверка дали има key в обект:    hasOwnProperty
// if (stockObj.hasOwnProperty(product) == true) {     // проверяваме дали го има
//     stockObj[product] += quantity;                  // ако го има, в случая добавяме количество към него
// } else {
//     stockObj[product] = quantity;                   // ако го няма, добавяме го със съответното количество
// }

// горното и долното са равносилни: 
// if (product in stockObj) {
//     stockObj[product] += quantity;
// } else {
//     stockObj[product] = quantity;
// }



// let myObj = {
//     name = "Peter"
// }
// console.log(Object.hasOwn(myObj, "name")); // -> true;
// console.log(myObj.hasOwnProperty("name")); // -> true;



// let a = 5;
// let b = a;
// let a = 8;
// b? b = 5; защото = всъщност е copy. Същото е и : в обекта;
// = прави копие; поставя го в регистъра на паметта и там си е като нова стойност, в отделни клетки в паметта;
// let myObj = otherObj - тук не копираме, а правим връзка с регистъра в паметта. Обектите може да са много големи, по-ефективно е. Така че тук копираме адреса. Референтен тип.
// Референтни данни - 3 вида: обект, масив, фукнция:
// това, което стои вътре в променливата е адреса, а данните са някъде другаде.

















// -------------------------------------------------------




// обектите са структура от данни, съхранява двойка ключ и стойност; с фигурални скоби {}; създаваме двойки, първо ключ; няма let; не е нужно да слагаме ключовете в кавички; то си е стринг, JS знае; 

// let myObject = {
//     name: "Kiril",  // - това е property на обекта;
//     age: 30,  // - изреждаме със запетая а не с точка и запетая;
// }

// console.log(myObject);  -> {name: 'Kiril', age: 34}
// console.log(myObject.name); -> Kiril
// console.log(myObject.age); -> 34

// myObject.ageFirstCar = 24; - можем да си добавяме неща към обекта;

// console.log(myObject["age"]); -> 34
// let neshtoSi = "age";
// console.log(myObject[neshtoSi]); -> 34
// console.log(myObject.neshtoSi); -> undefined;


// function solve(key) {
//     let myObject = {
//         name: "Kiril",
//         age: 34
//     }
//     console.log(myObject[key]);
// }
// solve("name"); -> печата Kiril
// solve("age"); -> печата 34
// solve("bla"); -> undefined

// myObject["hairColor"] = "white"; - така също можем да добавяме към обект;
// myObject["hairColor"] = "white" === myObject.hairColor = "white";
// console.log(myObject); -> {name: 'Kiril', age: 34, hairColor: 'white'}
// console.table(myObject); ->
// ┌───────────┬─────────┐
// │  (index)  │ Values  │  по-скоро трябва да е key вместо index
// ├───────────┼─────────┤
// │   name    │ 'Kiril' │
// │    age    │   34    │
// │ hairColor │ 'white' │
// └───────────┴─────────┘


// function solve(key, value) {
//     let myObject = {
//         name: "Kiril",
//     }
//     myObject[key] = value;      // !!! така добавяме в обект, ако трябва да работим с (key, value) от функцията;
//     //myObject.key = value; - това ще даде key = "Yellow"; така че не;
//     console.log(myObject);  // -> {name: 'Kiril', hairColor: 'Yellow'}
//     console.table(myObject);
// }
// solve("hairColor", "Yellow");
// ┌───────────┬──────────┐
// │  (index)  │  Values  │
// ├───────────┼──────────┤
// │   name    │ 'Kiril'  │
// │ hairColor │ 'Yellow' │
// └───────────┴──────────┘



// function solve(key, value) {
//     let myObject = {
//         name: "Kiril",
//         age: 34,
//     }
//     myObject.name = "Vanko";  // тук променяме value на key name;
//     myObject.name1 = "Stanko";  // тук добавяме key;
//     return myObject;
// }
// console.log(solve()); -> {name: 'Vanko', age: 34, name1: 'Stanko'}



// function personInfo(firstName, lastName, age) {
//     let info = {
//         firstName: firstName,  
//         lastName: lastName,
//         age: age,
//     }
//     return info;
// }
// console.log(personInfo("George", "Smith", "18"));

// горното и долното са 1 и също

// function personInfo(firstName, lastName, age) {
//     let info = {
//         firstName,  // ако искаме key-я да се казва по същия начин като променливата, която имаме, може направо така да го зададем;
//         lastName,
//         age,
//     }
//     return info;
// }
// console.log(personInfo("George", "Smith", "18"));



// function personInfo(firstName, lastName, age) {
//     let info = {
//         lastName,
//         age,
//     }
//     info["firstName"] = firstName;
//     return info;
// }
// console.log(personInfo("George", "Smith", "18")) // -> {lastName: 'Smith', age: '18', firstName: 'George'}

// обекта не подрежда key-овете си, запазва ги както сме ги въвели, освен ако key-я не е (положителна) цифра:

// function personInfo(firstName, lastName, age) {
//     let info = {
//         lastName,
//         age,
//     }
//     info["firstName"] = firstName;
//     info[1] = firstName; // на първо място добавя firstName; другото firstName си остава;
//     return info;
// }
// console.log(personInfo("George", "Smith", "18")); // -> {1: 'George', lastName: 'Smith', age: '18', firstName: 'George'}



// function solve(firstName, lastName, age) {
//     let result = {
//         firstName,
//         lastName,
//         age,
//         sayHello: function () {
//             console.log("hello");
//         }
//     }
//     console.log(result.sayHello());
// }
// console.log(solve("George", "Smith", "18"));  

// при изпълнението получаваме 2 undefined, защото функцията sayHello реално не връща нищо като резултат на изпълнението си. И още веднъж undefined от solve, защото реално и тя не връща нищо;


// function solve(firstName, lastName, age) {
//     let result = {
//         firstName,
//         lastName,
//         age,
//         sayHello: function () {         // sayHello e метод;
//             console.log("hello");
//         }
//     }
//     result.sayHello();   // .sayHello е методът;
//     // console.log();    // .log е метод на обекта console.
//     // Math.abs();       // .abs е метод на обекта Math;
// }
// console.log(solve("George", "Smith", "18")); // -> hello; undefined;


// function solve(firstName, lastName, age) {
//     let result = {
//         firstName,
//         lastName,
//         age,
//         sayHello: () => console.log("hello")        // може и така да декларираме функция;
//         }
//     result.sayHello();
// }
// console.log(solve("George", "Smith", "18")); 
// delete result.age; // - така се трие от обект;
// console.log(result.hasOwnProperty("firstName")); -> връща true ако обекта има такова пропърти(ако съществува такъв обект); при наследяване не работи това, ама по-нататък;
// if (product in store) -> !! проверява дали има key product в обекта store. Върши добра работа;




// Object. - можем да видим всичките key-ове. Получаваме масив от тях:
// return Object.keys(result) -> ['firstName', 'lastName', 'age', 'sayHello']
// return Object.values(result) -> ['George', 'Smith', '18', ƒ]
// return Object.entries(result) -> [Array(2), Array(2), Array(2), Array(2)] - връща entry-та, всеки масив е ключ и стойност;


// function solve(firstName, lastName, age) {
//     let result = {
//         firstName,
//         lastName,
//         age,
//     }
//     for (let key of Object.keys(result)) {
//         console.log(key); // връща firstName; lastName; age;
//         console.log(result[key]); // връща George; Smith; 18;
//         console.log(`${key} -> ${result[key]}`); // връща firstName -> George; lastName -> Smith; age -> 18;
//     }
// }
// solve("George", "Smith", "18"); 



// function city(town) {
//     for(let [key, value] of Object.entries(town)) {
//         console.log(`${key} -> ${value}`);
//     }
// }   // това е друг начин да обходим обекта town - Fundamentals L22-2-City 2;
// city({name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000"});

// [key, value] - нарича се деструктуриране и вътре се дават имена, като на променливи; връща масив; абсолютно същото ще се получи ако го заменим с това:
//    for (let arr of Object.entries(town)) {
//        console.log(`${arr[0]} -> ${arr[1]}`);
//    }






// --------------------------------------------------------------------









// Reverence vs Value Types:

// Референтен тип: 
// при Array (Object и Functions също) се запазва адреса на array-я, затова ако променим единия масив, който е "равен" на друг, то ние променяме и двата. По същия начин се държат обектите, по същия начин се държат и функциите.
// Value Type запазва стойността;

// function solve() {
//     let name = "Tosho";
//     let name1 = name; // тук присвояваме стойността; - Value Type;
//     name = "Pesho";
//     let arr = [1, 2, 3];
//     let arr1 = arr;  // тук присвояваме адреса на паметта;
//     arr.push(4);
//     console.log(name);  -> Pesho
//     console.log(name1);   -> Tosho
//     console.log(arr);   ->  [1, 2, 3, 4]
//     console.log(arr1);    ->  [1, 2, 3, 4]
// }  // двата масива сочат към един и същи адрес в паметта;
// solve();



// -----------------------------------------------------------------


// JSON - JavaScript Object Notation

// let text = JSON.stringify(obj); -> превръща обекта в JSON текст;
// let obj = JSON.parse(text); -> превръща JSON текста в обект;
// notation - система за означаване;
// JSON е стандарт за трансфер на данни по мрежа;
// JSON форматира обект или данни в стрингов формат и тези данни са предназначени да бъдат изпращани по мрежата;
// JSON е independent, не е обвързан с конкретна технология, може да се използва и с други езици; JS не е нужно да се намесва;
// JSON е self-describing, лесно е да разберем резултата от него;
// keys са в кавички, задължително; двойни кавички!;
// числата, масивите и другите обекти не са в кавички;
// true и false не са в кавички;
// може да имаме null, но не може да имаме undefined;
// ако имаме обект, който има undefined свойство в него, като го превърнем в JSON parsor-а ще изтрие това свойство;
// в JSON може да има само 1 явление - стойност, стринг; демек обект в двойните кавички + стойност, стринг, масив.. не можем да сложим 2 стойности за едно нещо;
// не можем да имаме функция в JSON;
// не можем да имаме обекти с кръгова референция: не можем да зададем стойност, която я има някъде на друго място в обекта;






// function solve() {
//     let myObject = {
//         name: "Pesho",
//         age: 25,
//         arr: [1, 2, 3, 4, 5]
//     }
//     console.log(myObject);  // ->  {name: 'Pesho', age: 25, arr: Array(5)}
//     console.log(JSON.stringify(myObject));  // ->  {"name":"Pesho","age":25,"arr":[1,2,3,4,5]}
// }

// let myJSON = JSON.stringify(myObject);
// console.log(typeof(myJSON));  // -> string;
// console.log(myJSON);  // -> {"name":"Pesho","age":25,"arr":[1,2,3,4,5]} (преди и след кавичките също реално има кавички, които конзолата скипва);

// let receivedSomething = JSON.parse(myJSON);  // - получаваме обект;
// console.log(receivedSomething);  // -> {name: 'Pesho', age: 25, arr: Array(5)}
// console.log(typeof(receivedSomething)); // -> object;

// let оbjectDeepCopy = JSON.parse(JSON.stringify(myObject)); // ето така правим дълбоко копие на обект !!!;
// console.log(оbjectDeepCopy); // -> {name: 'Pesho', age: 25, arr: Array(5)}

// solve();



// JSON.stringify(myObject) -> дава стринг, който е направен по определен стандарт, за да може да е трансфериран и след това да може да се получи абсолютно същата структура от данни, която е била на входа;


// -------------------------------------------------------------


// Classes     


// class Person {
//     constructor(namename, ageage) {
//         // let this = {};  -> да си представяме, че this работи по този начин.
//         this.name = namename;
//         this.age = ageage;
//         // return this;
//     }
//     sayHello(/*this*/) {        // не може sayHello: function(), трябва да е съкратения синтаксис; this е нещо като скрит параметър и можем да го ползваме във функцията, която е в класа;
//         console.log(`${this.name} says hello!`);
//     }
// }
// let myPerson = new Person("Tosho", 25);  // като кажем new, значи не изпълняваме функция, а правим обект по класа;
// console.log(myPerson); // -> Person {name: 'Tosho', age: 25}

// // без клас, това е същото: нарича се factory функция:
// function createPerson(name1, age1) {
//     let obj = {};
//     obj.name = name1;
//     obj.age = age1;
//     return obj;
// }
// let vankoPerson = createPerson("Vanko", 27);
// console.log(vankoPerson);  // -> {name: 'Vanko', age: 27} // да, ама тук губим класа Person. А това е доста важно, горе интерпретатора знае, че това е Person. Можем да проверим, type checking и да видим данните от какъв тип са. Те и двете са object, обаче при класа можем да извикаме оператора instanceof и той да ни докара до класа. Когато знаем класа, знаем какви свойства има обекта.

// console.log(typeof myPerson);   // -> object
// console.log(typeof vankoPerson);    // -> object
// console.log(myPerson instanceof Person);    // -> true
// console.log(vankoPerson instanceof Person); // -> false
// console.log(myPerson.name); // -> Tosho

// let dankoPerson = new Person("Danko", 25);
// console.log(dankoPerson); // -> Person {name: 'Danko', age: 25} // методът си го има, но не го принтира.
// myPerson.age = 34;  // както всеки друг обект можем да променяме в него;
// console.log(myPerson); // -> Person {name: 'Tosho', age: 34}
// // можем да добавяме нови свойства, не е честа практика, защото променя структурата. 


// // можем да дефинираме методи 
// myPerson.sayHello();    // -> Tosho says hello! // this е равен на това, дето стои преди точката, демек myPerson; скрит параметър, който живее в инстанцията;
// dankoPerson.sayHello(); //-> Danko says hello!

// // можем да имаме клас без конструктор. Като извикаме new, то ще прави празни обекти, които ще имат всички методи, които сме закачили отдолу. По дефиниция той си има празен конструктор + this. 
// // дефиницията на класа трябва да е най-отгоре, не може като функцията да я оставим където си искаме;
// // инстанция се нарича обекта, създаден чрез класа;


// -----------------------------------------------------




// Classes
// ние създаваме обекти по шаблон; дефинираме структура и поведение, което ще имаме; всеки клас има конструктор (то е мястото, където се обработват данните);
// this.name - на този обект, който е създаден сега, ще има пропърти name и тя ще е тази там, която слагаме;
// класовете не могат да бъдат използвани, преди да бъдат инициализирани;
// класа винаги започва с главна буква;



// class Student {
//     constructor(ime, ocenka) { 
//         this.name = ime; 
//         this.grade = ocenka
//     }
//     speak() {
//         console.log(`hello ${this.name}`);
//     }
// }
// let myStudent = new Student("Todor", 3.00); 
// let myStudent2 = new Student("Pesho", 6.00);

// console.log(myStudent); // -> Student {name: 'Todor', grade: 3}
// console.log(myStudent2); // -> Student {name: 'Pesho', grade: 6}
// console.log(myStudent.name); // -> Todor
// console.log(myStudent2.grade); // -> 6
// console.log(myStudent["grade"]); // -> 3

// myStudent.speak(); // -> hello Todor
// myStudent2.speak(); // -> hello Pesho




// class Student {
//     constructor(ime) { // конструктора е специална функция, тя не се извиква;
//         this.name = ime; // на този обект, който е създаден сега, ще има пропърти name и зад него ще стои стойност, която получаваме;
//     }
// }
// let myStudent = new Student("Todor");  // конструктура се извиква автоматично, като се използва думата new;
// console.log(myStudent);  // -> Student {name: 'Todor'} -> излиза Student отпред, за разлика от обекта. Това ни казва по коя структура е направен този обект; Класа е template за създаване на обекти;

// let obj = {
//     name: "Todor"
// }
// console.log(obj);  // -> {name: 'Todor'}

// myStudent.age = 30;
// console.log(myStudent);  // -> Student {name: 'Todor', age: 30} // можем да си добавяме пропъртита; myStudent си е обект, въпреки че е вдигнат през инстанция на класа Student;

// let myStudent2 = new Student("Pesho");
// console.log(myStudent2);
// console.log(myStudent2.name); // -> Pesho; 
// // this сочи към текущата инстанция или извикващия контекст;

// -----------------------------------------------------





// Associative Array   (нещо като речник)

// масив, индексиран със стрингов ключ
// ключа е стринг, стойността може да е всякакъв тип;
// delete myAssociativeArr["keykey key key2"]; - изтрива ключ + стойност; работи си за всички обекти;
// ако искаме да изтрием някоя стойност, просто задаваме на ключа да бъде равен на undefined;
// обектите се съхраняват по реда на тяхното вкарване, но ако ключа е число (което е под формата на стринг), те влизат по големина; ама отрицателните не ги подрежда преди положителните, остават си като стринг;

// let obj = {};
// obj.peter = 43545;
// obj.vanko = 563453;
// console.log(obj);  // -> {peter: 43545, vanko: 563453}
// obj["5"] = 45645;
// obj["2"] = 4596;
// console.log(obj); // -> {2: 4596, 5: 45645, peter: 43545, vanko: 563453}
// obj["0"] = 54634;
// obj["-3"] = 3453;
// console.log(obj); // -> {0: 54634, 2: 4596, 5: 45645, peter: 43545, vanko: 563453, -3: 3453}

// let addressObj = Object.fromEntries(addressArr) -> това превръща масив от масиви [ключ, стойност] директно в обект и няма нужда да обхождаме масива;




// Set

// колекция за съхраняване на уникални елементи;
// нещо като масив от уникални стойности;
// можем да вкарваме всякакви стойности, като обекти, функции;
// те трябва да са уникални по референция; -> ако имаме 2 обекта с еднакво съдържание, но на различно място в паметта, те ще влязат и двата;
// ползваме го когато искаме да филтрираме уникалните стойности;

// създаваме го с new;
// set.add("neshto si"); - това neshto si ще влезе, само ако я няма;
// console.log(set.has(1)); -> true/false; няма индексиране, няма ключове; само проверяваме дали има нещо или го няма;
// Set и Map няма как да ги сериализираме (като JSON), трябва да ги преобразуваме на масив;
// той си е глобален обект от глобалната библиотека, като Object, Date, Map, Number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects


// let setSet = new Set();
// console.log(setSet);  // -> Set(0) {size: 0}
// setSet.add(5);  // добавяме към сет-а;
// console.log(setSet); // Set(1) {size: 1, 5}
// console.log(setSet.size); // -> 1
// setSet.add(3);
// console.log(setSet); // Set(2) {size: 2, 5, 3}
// setSet.delete(5);  // премахваме от сет-а;
// console.log(setSet); //  Set(1) {size: 1, 3}
// setSet.add(8);
// console.log(setSet); //  Set(2) {size: 2, 3, 8}
// console.log(setSet.delete(8)); // -> true; // проверяваме дали е изтрило нещо;
// console.log(setSet.delete(6)); // -> false; // значи елемента не е съществувал;

// set се обхожда с for - of цикъл;
// for (el of setSet) {
//     console.log(el);
// }

// има setSet.keys(), setSet.values() -> връща едно и също;
// има setSet.entries() ->  [3, 3] кой знае дали ще ни потрябва;


// превръщане на сет в масив:
// let parkingLotArr = Array.from(parkingLotSet); 
//     console.log(parkingLotArr);  // (4) ['CA9999TT', 'CA2844AA', 'CA9876HH', 'CA2822UU']



// ------------------------------------------------



// Text Processing

// length;
// 3 вида стрингови литерали:
// let str = "Hello"; let str = 'Hello'; let str = `Hello`;
// събираме (конкатенираме) с "+";
// ако искаме да конкатенираме нещо, което не е стринг към стринг, всичко става стринг. // като .toString();
// стринговете са immutable (read-only), не можем да променим някой си символ из тях;
// str[2] - четем конкретна буква;
// ch = str.charAt(2) - същото като горното, затова и не се ползва;
// можем да ги итерираме - да ги обходим с for-of и примерно да направим някакво сравнение/изчисление с тях;


// indexOf("tyrseniq izraz") -> дава ни число, номера на индекса от който започва търсеният израз. Пример:
// indexOf("string nqkakyw", 5) -> започва да търси след 5-тия символ; има пример малко по-надолу;
// let str = "I am a JavaScript developer";
// console.log(str.indexOf("Java")); -> 7;
// console.log(str.indexOf("java")); -> -1 защото е case sensitive;
// търси от ляво на дясно и спира при първото съвпадение;

// lastIndexOf(substr); -> търси отдясно наляво;
// let str = "Intro to programming";
// let last = str.lastIndexOf("o");
// console.log(last); -> 11;
// indexOf(searchString, position) -> можем да му зададем позицията от която да започнем;
// let str = "hello how are you hello";
// console.log(str.indexOf("hello"));  -> 0
// console.log(str.lastIndexOf("hello"));  -> 18
// console.log(str.indexOf("hello", 5));  -> 18


// .includes(substr) - връща true или false; работи си като indexOf();
// console.log(str.includes("how")); // -> true;



// .substring(a, b) - връща част от стринг, включително а, без b;
// не работи с отрицателни числа; ако му зададем второто число да е по-малко от първото, то просто ги разменя;
// ако подадем отрицателни число, то го прави на 0;
// let str = "hello how are you hello";
// let subsubstring = str.substring(1, 8);
// console.log(subsubstring); // -> ello ho
// console.log(str.substring(8, 1)); // -> ello ho
// console.log(str.substring(8, -5));  // -> hello ho
// console.log(str.slice(1)); // -> ello how are you 



// .slice
// console.log(str.slice(1, 5)); // -> ello
// console.log(str.slice(0, 4)); // -> hell
// console.log(str.slice(4, 1));  // -> нищо не връща
// console.log(str.slice(1, 4));  // -> ell
// console.log(str.slice(-2, 2)); //-> нищо не връща
// console.log(str); // -> hello how are you hello


// ето как да намерим всички повторения на стринг в стринг:
// let str = "hello how are you hello";
// let lastIndex = 0;
// while (str.indexOf("hello", lastIndex) != -1) {
//     console.log("Found match at", str.indexOf("hello", lastIndex));
//     lastIndex += str.indexOf("hello", lastIndex) + 1;
// }
// -> Found match at 0
// -> Found match at 18



// .split()  -> връща си масив
// let words = str.split(" ");
// console.log(words); // -> (5) ['hello', 'how', 'are', 'you', 'hello']

// можем да го ползваме като сложим цяла дума и съответно да я заменим с нещо друго;
// let changeLwithA = str.split("l").join("A");
// console.log(changeLwithA); // -> heAAo how are you heAAo
// .join() реално е реципрочното на .split();



// .repeat()  - повтаря нещо (колко пъти)
// console.log("bla".repeat(3)); // -> blablabla

// for (i = 1; i <= 3; i++) {
//     console.log("bre".repeat(i));   // -> bre; brebre; brebrebre;
// }       




// .replace()
// let strReplaced = str.replace("hello", "hi");
// console.log(strReplaced); // -> hi how are you hello

// .replaceAll(); - не работи в judje;
// let strReplacedAll = str.replaceAll("hello", "hi");
// console.log(strReplacedAll); // -> hi how are you hi




// trim()  trimStart()   trimEnd() изтрива ненужните интервали преди и след текста;
// let text2 = "    Annoying spaces    ";
// console.log(text2.trim());  // -> "Annoying spaces"
// console.log(text2.trimStart());  // -> "Annoying spaces    "
// console.log(text2.trimEnd());  // -> "     Annoying spaces"



// startsWith()  endsWith()  - проверява дали дадения текст започва/завършва с даден стринг; връща true или false; нещо като .includes();
// let text3 = "My name is Mitev";
// console.log(text3.startsWith("My")); // -> true;
// console.log(text3.endsWith("My"));  // -> false;
// console.log(text3.slice(0, 2) == "My"); // -> true;




// .padStart(length, "strstr")   - закачѝ ми символите преди стринга, докато цялата дължина на стринга не стане еди каква си; ако дължината е по-къса от стринга, то нищо не прави;
// let text4 = "hello";
// console.log(text4.padStart(10, "*")); // -> *****hello
// console.log(text4.padStart(3, "*"));  // -> hello
// console.log(text4.padStart(-2, "*"));  // -> hello
// console.log(text4.padStart(20, "Aa-"));  // -> Aa-Aa-Aa-Aa-Aa-hello


// .padEnd(length, "strstr")  - същото, ама закачай след стринга
// let text4 = "hello";
// console.log(text4.padEnd(8, "-"));  // -> hello---





// ------------------------------------------------




// Regular Expressions (RegExp);

// представлява някакъв шаблон с правила за откриване на текст, който отговаря на правилата;
// ние подреждаме шаблони един след друг и regex ще намери всички пасажи в текста, които отговарят на всичките шаблони едновременно;
// ако имаме нещо по-сложно, можем да използваме два или повеч регекса;

// [ast] -> търсѝ един от трите a, s, t;
// [^ast] -> мачни символи, различни от a, s, t;
// [0-9] -> мачни символи в интервала от 0 до 9;
// [^0-9] -> мачни всичко без цифрите;
// [a\-] -> с наклонена черта добавяме тирето "-"" към търсените символи. Така добавяме специални символи;
// [a\-blw] -> търси символи a - b l w;
// [ablw-] -> същото като горното и не се налага да го ескейпваме;
// [\[^] -> търсим [ и ^;
// [Jj]ava -> хваща java и Java;


// [0-9][0-9] в текста "нещо си 289 и 56" -> 28 и 56; когато намери 289 един вид изтрива 28. Затова после не ни изкарва 89.
// [15][0-9] -> ще търси само започващите с 1 и 5, двуцифрени;


//  \w - хваща (a-z,A-Z,0-9,_); хваща един символ;
// \W - хваща всичко останало; с главна буква обикновено значи обратното на правилото;
// \s - хваща всички whitespace; хваща tab, хваща специален space, който не се разделя на нов ред;
// \S - хваща всичко без whitespace;
// \d - хваща всички цифри;
// \d\d\d - това ще хване всички двуцифрени комбинации;
// \D - хваща всичко, което не е цифра;


// Quantifier - quantity/количество

// +   -> хваща всички символи, които са един след друг, които отговарят на това правило; повтаряй правилото, докато имаме съвпадение; НО трябва да хванеш поне един символ! - това е разликата с * ;
// \d+  - хваща всички цифри докато не дойде символ, различен от цифра; тук вече може да върне 1 или повече символи;
// \d+.  -> точката тук е специален символ и значи хвани и следващия символ, независимо какъв е; ако искаме реално да хванем точка трябва да стане така:
// \d+\.  -> вече хваща в текст примерно "1998.";
// \d*  -> почти по същия начин, но тук хваща и празен стринг; хваща празното пространство между стринговете;


// greedy - ако можеш да мачваш, продължавай да мачваш, независимо от следващите правила;
// .*  -> ппц е greedy и ще всичко до края на текста;
// lazy - спри при първия възможен случай;
// .*?<  -> ? го прави lazy; съответно спри при < 


// *  -> matches the previous element zero or more times;
// +  -> matches the previous element one or more times;
// ?  -> matches the previous element zero or one time;
// *?  -> от greedy на lazy, има го малко по-нагоре
// +?  -> 


// тестваме с hi145h
// \d+  ->  1 match: 2-5: 145;
// \d*  ->  5 matches: 0-0 : empty string; 1-1: empty; 2-5: 145; 5-5: empty; 6-6: empty;
// това е полезно, когато го комбинираме с друго правило;

// пример  1982.1.3   1982.01.03   1982.11.3
// \d+.[1]+    \d+.[1]*  (може 1 да не е в [])   regex101.com
// * хвани единицата, ама нея може и да я няма; * нещо като може да го има, може да го няма;
// * хваща и нулата


// ?  означава хвани един или нула символа;
// 1\d?  - мачни започващите с 1; ако след 1 има цифра, мачни и нея; -> може да даде 1, 15, 17 и т.н.;


// {}  -> хвани ми точен брой цифри; хваща правилото и го умножава по броя пъти;
// \d{4}  -> ще хване точно 4 цифри; примерно ако искаме някоя година да изкараме;
// \d{2,4}  -> хвани ми 2, 3, 4 цифри;
// \d{2,}   -> хвани всички, по-дълги от 2;


//  ()  -> изваждат ни в група 
// \d{2}-([A-Za-z]{3})-\d{4}   -> ако имаме някаква дата, това ще ни я извади и ще извади месеца като група:
// match: 15-Nov-2023 group: Jan


// ?:  -> ако искаме да имаме група, но да не ни я изкарва като допълнителна група:
// \d{2}-(?:[A-Za-z]{3})-\d{4}  
// \d{2}-(?:Jan|Nov)-\d{4}   | - или;

// (?:<>)
// (?<day>\d{2})-(?<month>[A-Za-z]{3})-(?<year>\d{4}) - дефинираме група с дадено име; имаме group day, group month, group year;


// ^  $  - котви в началото и в края; хвани, ако е в началото на реда. Преди него не трябва да има нищо друго; хвани ако след израза няма нищо, демек следва нов ред;
// ползвахме го за мачване на имейл:
// ^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$


//  \ backreferences
// ако сме хванали нещо в група, после можем да хванем същото нещо;

// <(\w+)[^>]*>.*?<\/\1>  - хващане на html тагове;
// < ако не е в скоби не е специален символ;
// след нея търсим множество с дължина поне 1 и го слагаме в група;
// вътре в мача не трябва да имаме триъгълна скоба;
// звездичката може и да я няма? ;
// до тук това значи хвани отварящия таг, примерно <div>
// .*  -> хвани всеки символ, колкото си искаш пъти
// *?  -> от greedy на lazy, има го малко по-нагоре;
// .*?<  -> ? го прави lazy; съответно спри при < - отварящата скоба на затварящия таг;
// \/  -> затварящия таг е </div>, трябва ни наклонена черта; ескейпваме я с \;
// \1  -> хвани същото като първата група; това ще погледне (\w+) и ще хване същото; ако то е хванало div, то и тук ще хване div; може да сме хванали друг таг, примерно b;
// >  си хваща последната >


// let regLiteral = /[A-Za-z]/g  -> g означава global; 
// g -> global
// i -> insensitive (case);
// m -> multiline

// let regExp = new RegExp("[A-Za-z]+", "g");







//   JS Advanced

// high-level programming - високо ниво на програмиране, демек далече сме от хардуера; на ниско ниво имаме машинен код (за процесорната архитектура - x86, ARM, Mac); пишейки на високо ниво, пишем за виртуална машина; това ни позволява тя да работи на всички компютри; JS е в браузъра, той е в операционната система.
// JS - една от основните технологии на www - те са 3 - HTML, CSS, JS
// Pages and applications; страницата се консумира пасивно, като списание или вестник; web приложението е динамично, има потребителски вход;
// може да се изпълни на сървър и клиент;
// множество парадигми - демек много подходи за решаване на проблемите; имаме императивна, функционална (данните протичат от единия край до другия), OOP - да си решаваме проблемите като опаковаме данните в някакви обекти;
// Dynamic typing - динамично типизиран - по време на писане на кода ние не задаваме какъв тип данни ще съдържат променливите, а това се определя по време на неговото изпълнение;
// динамичен език, нямаме стъпка на компилиране - JIT (Just in Time) компилатор;
// What is node.js? - Server-side JavaScript runtime



// Primitives and References:

// 7 data types that are primitives:
// примитивите са данни, които се съхраняват директно в променливата (в стека, във функцията); всичко което живее в нея изчезва след изпълнението на функцията;
// string, number, boolean, undefined, null (type of null = object), bigInt (целочислен тип данни с безкрайна прецизност), symbol (системен тип)

// References types - Object (и функция, може би и масива - той също си е обект);



// идентификатор е името на дадено нещо в обекта; това нещо е променлива, функция или стойност (variable, function, property);
// имената са букви, цифри, $, _, в новите версии може и #; не могат да започват с цифри; могат да започват с $, _; name и Name са различни;

// конвенции:
// _something - не са предвидени за публична консумация; 
// camelCase;
// имената на класовете са pascalCase;

// undefined и undeclared са различни неща;
// let a; - undefined, ама е декларирана;

// let, const, var; 
// можем let name;
// ама не можем const name; сещащ се защо;
// ако обекта който сме създали с const е референтен, примерно масив, ние все пак можем да променим неговото съдържание; не можем да променим е стойността на променливата; защото променливата пази адреса, а адреса не можем да го сменим. Това което е на адреса, можем да го сменим;
// var ги прави глобални във функционалния обхват, води до грешки; Няма добра причина да ползваме var. Ever. 

// scope - видимост; къде променливите са видими и къде са достъпни;
// Global scope - всичко което е написано на top level; вижда се навсякъде в нашия файл;
// block == { 
// };
// ако променливата е в блок, тя е блок скоупната (block scope); променливите там, живеят само вътре в блока; можем на много места да си ползваме променлива с едно и също име;
// functional scope - с var; демек ако имаме някаква фукнция и вътре имаме блок, в който декларираме променлива с var, тя ще съществува за цялата функция; но пък стойността ѝ ще бъде достъпна след декларирането ѝ;

// Function declaration
// function walk() {
//     console.log("walking");
// }
// const walk = function () {
//     console.log("walking");
// }
// const walk = () => {
//     console.log("walking");
// }

// Object Methods and Standard Library
// .toLowerCase(), toPrecision(), toFixed() - методи 


// default стойности за функции!
// function printStars(count = 5) {
//     console.log("*".repeat(count));
// }
// printStars();  // -> *****
// printStars(3);   // -> ***

// ако имаме повече параметри; дефолтната стойност може да е накрая - това не го разбрах, трябва да се тества;

// вдигане на степен -> a ** b


// type coerces - "принуждава";
// при условните конструкции if и while, това което сложим в скобите след тях се превръща в Boolean (true или false); имаме 7 false стойности: undefined, null, "", 0, 0n (BigInt), false, NaN;
// - * / % ** -> превръщат това вътре в Number;
// + -> тук трябва да внимаваме, защото може да остане стринг;
// unary + (само един оперант, примерно само а) -> превръща в Number;
// binary + (повече от един оперант, примерно а + б) -> ако една от страните е стринг, превръща всичко в стринг;
// isTrue(3.14) -> true
// isTrue({}) -> true
// isTrue(NaN) -> false
// isTrue("NaN") -> true
// isTrue([]) -> true
// isTrue(null) -> false
// isTrue("") -> false
// isTrue(undefined) -> false
// isTrue(0) -> false  !!


// if ("yes" && null & false) -> ако имаме някъде false, директно се прекратява; ако навсякъде по пътя е true, то връща последното;
// let а = "yes" && null & false;
// console.log(а) -> null - защото най-лявата false стойност е null;
// логическото или е по-интересно. То ще върне първата стойност, която е truthy или връща последната;
// let a = "" || false || 5; -> връща 5;
// let a = null || NaN || undefined; -> undefined;
// let data = getData(neshto) || []; -> ако нямаме данни, връща си празен масив; това би заменило една if-else проверка;

// rest оператор - взима списъка от елементи и го прави на масив; използва се с три точки ... ; spread оператор - същото, само че наобратно, взима масива и го прави на списък с елементи., Пример: 
// function maxNum(...params) {
//     let max = Math.max(...params);
//     console.log(`The largest number is ${max}.`);
// }
// maxNum(5, -3, 16);


// Strict Mode 
// активира се като напишем "use strict";
// не го ползваме, но по подразбиране всички модули в браузъра са в стриктен режим;


// hoisting - хойстинг (вдигане с кран) - вдигане на декларацията до някаква горна позиция. Глобален хойстинг - вдигане на декларацията като глобална, вижда се навсякъде. Може да е функционален;
// Функциите се хойстват глобално. Няма значение къде са декларирани, те са достъпни навсякъде.
// функциите задължително връщат нещо. Ако няма нищо за връщане, връщат undefined;




// дата, дати:
// let myDate = new Date(2024,4,3);
// console.log(myDate); // -> Wed Jan 10 2024 00:00:00 GMT+0200 (Източноевропейско стандартно време)

//  let myDate = new Date(2024,0,10);
//     console.log(myDate.getDate()); // -> 10, 10-и януари;
//     console.log(myDate.getDay()); // -> 3, защото е сряда;
//  myDate.setDate(15);  // setDate() променя датата на myDate на 15-ти;
//     console.log(myDate); // -> Mon Jan 15 2024 00:00:00 GMT+0200 (Източноевропейско стандартно време)


// ето как да променим датата с 1 ден назад:
// let myDate = new Date(2024,0,15);  // by default GMT +2 - моята часова зона; 00:00:00 by default;
// myDate.setDate(myDate.getDate() - 1);
// console.log(myDate); // ->Sun Jan 14 2024 00:00:00 GMT+0200 (Източноевропейско стандартно време)
// console.log(myDate.toISOString()); // -> 2024-01-13T22:00:00.000Z  toISOString дава времето по UTC !!!
// console.log(myDate.toDateString()); // -> Sun Jan 14 2024 // локално време;



// друг начин за създаване на дата, но тук забележѝ, че в стринга месеца 3 отговаря на март!
// let anotherDate = new Date("2024, 3, 7");
//     console.log(anotherDate); // -> Thu Mar 07 2024 00:00:00 GMT+0200 (Източноевропейско стандартно време)
// може и let anotherDate = new Date("2024/3/7"); форматите за дати са много;



