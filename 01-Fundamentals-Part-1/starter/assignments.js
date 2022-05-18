let country = 'Philippines';
const continent = 'Asia';
let population = 100000000;

const isIsland = false;
const language = 'Tagalog'

console.log(country, continent, population, isIsland, language)


let x = 1;
++x;

console.log(x)



// Type Conversion and Type Coersion *************************

//Type conversion – manually convert from one type to another.
// JS does Type Coerccion automatically.

// type conversion
const inputYear='1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear)+18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23),23);

// type coercion
console.log('I am ' + 23 + 'years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n= '1' + 1;
n = n-1;
console.log(n)

//Truthy and Falsy *************************

//What are 5 falsy values?

// 5 falsy values: 0, ‘’, undefined, null, NaN

// So, falsy values are values that are not exactly false,
// but will become false when we try to convert them into a boolean.

// Truthy values
// -any number that is not zero or any string that is not an
// empty string will be converted to true when we attempt to convert them to a boolean.