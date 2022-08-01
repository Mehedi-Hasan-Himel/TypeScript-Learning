"use strict";
let uses = [];
let use1 = {
    id: 1,
    name: `Mehedi`,
    age: 22,
};
let use2 = {
    id: 2,
    name: `Hasan`,
    age: 23,
};
uses.push(use1);
uses.push(use2);
const printUserInfo = (uses) => {
    console.log(`usesId = ${uses.id}, name = ${uses.name}, age = ${uses.age}`);
};
uses.forEach((use) => printUserInfo(use));
