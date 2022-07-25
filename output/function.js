"use strict";
const myFunc = (a, b, c = `true`) => {
    return a + b;
};
myFunc(`how`, `are you`);
const myFunction = (a, b, c = `true`) => {
    return a + b;
};
let result = myFunction(5, 6);
console.log(result);
