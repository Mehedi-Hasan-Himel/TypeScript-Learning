"use strict";
// Array Start
let stringArr = [`one`, `hey`, `dave`];
let guitars = [`Strat`, `Les Paul`, 5150];
let mixData = [`EVH`, 1984, true];
stringArr[0] = `jhon`;
stringArr.push(`hey`);
guitars[0] = 1984;
guitars.unshift(`jim`);
let test = [];
let bands = [];
bands.push(`Van Halen`);
// Array End
// Tuple Start
let myTuple = [`Dave`, 1984, true];
let mixed = [`Jhon`, 1, true];
// myTuple[0] = 42;
// Tuple End
// Objext Start
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: `dave`,
    prop2: true,
};
exampleObj.prop1 = `jhon`;
let evh = {
    name: `Eddie`,
    active: true,
    albums: [1, 2, 3, `ok bye`],
};
let jp = {
    name: `Jimmy`,
    active: true,
    albums: [`I`, `II`, `III`],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return `Hello !`;
};
console.log(greetGuitarist(jp));
