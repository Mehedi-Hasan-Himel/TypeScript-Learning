// Variable Start
/*
const country = `Bangladesh`;
console.log(country);

let playerName = `Masrafi`;
let age = 22
console.log(playerName);

playerName = 34;
console.log(playerName);

let playerName;

playerName = `Masrafi`;
playerName = 34;
playerName = 55;
console.log(playerName);
*/
// Variable End

// Function Start
// wrong code
// function multiply1(a, b) {
  // return a * b;
// }
// console.log(multiply1(3, 4));

// right code
function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(3, 4));
// Function End

// Array Start
// wrong code
let fruits = [`apple`, `banana`, `orange`];
// fruits.push(3);
console.log(fruits);

// right code
let fruits1 = [`apple`, `banana`, `orange`];
fruits1.push(`mango`);
console.log(fruits1);

// wrong code
let mixed1 = [`apple`, 3, true];
// mixed1.push({
  // name: `Mehedi Hasan Himel`,
// });
console.log(mixed1);

// right code
let mixed = [`apple`, 3, true];
mixed.push();
console.log(mixed);

// Array End

// object start
let person1 = {
  name: `Mehedi Hasan Himel`,
  age: 35,
  isCaption: true,
};
console.log(person1);
// object end

// Explicit & Union Types Start

// variable Start
let a: string;
let b: number;

// wrong code.
// a = 5;
// b = `hi`;

// right code.
a = `hello`;
b = 5;
// variable End

// Array Start
let c: (string | number)[] = [];
let d: string | number;

c.push(`himel`);
c.push(143);

d = `Mehedi`;
d = 143;
console.log(c);
console.log(d);

// Array End

// object start
let e: {
  name: string;
  number: number;
  adult: boolean;
};

e = {
  name: `Mehedi Hasan Himel`,
  number: +8801969038472,
  adult: true,
};

let f: object;
f = [1, 2, 3];
// object end



// Explicit & Union Types End
