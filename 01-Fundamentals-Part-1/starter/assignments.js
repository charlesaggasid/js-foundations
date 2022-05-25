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

/*

//Truthy and Falsy *************************

What are 5 falsy values?

5 falsy values: 0, ‘’, undefined, null, NaN

So, falsy values are values that are not exactly false,
but will become false when we try to convert them into a boolean.

Truthy values
-any number that is not zero or any string that is not an
empty string will be converted to true when we attempt to convert them to a boolean.

// Switch Statements *************************

switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}

Example-

const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

ABOVE CODE IS SAME AS BELOW-

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

-END

////////////////////////////////////
// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////

*/

////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 15;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


////////////////////////////////////