"use strict";
const myFunc = (a, b, c = `true`) => {
    return a + b;
};
myFunc(`how`, `are you`);
const myFunction = (a, b, c = `true`) => {
    return a + b;
};
let result = myFunction(5, 6);
// console.log(result);
let myFunction1;
let add;
add = (a, b) => {
    return a + b;
};
let calculation;
calculation = (a, b, c) => {
    if (c === `add`) {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, `minus`));
