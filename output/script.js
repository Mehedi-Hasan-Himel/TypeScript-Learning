"use strict";
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
function multiply1(a, b) {
    return a * b;
}
console.log(multiply1(3, 4));
// right code
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4));
// Function End
// Array Start
// wrong code
let fruits = [`apple`, `banana`, `orange`];
fruits.push(3);
console.log(fruits);
// right code
let fruits1 = [`apple`, `banana`, `orange`];
fruits1.push(`mango`);
console.log(fruits1);
// wrong code
let mixed1 = [`apple`, 3, true];
mixed1.push({
    name: `Mehedi Hasan Himel`,
});
console.log(mixed1);
// right code
let mixed = [`apple`, 3, true];
mixed.push();
console.log(mixed);
// Array End
