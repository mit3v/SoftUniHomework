function matchFullName(input) {
let regexp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
let result = input.match(regexp);
console.log(result.join(" ")); 
}
matchFullName("ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov");
