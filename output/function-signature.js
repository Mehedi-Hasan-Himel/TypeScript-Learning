"use strict";
let userInfo1;
let userInfo2;
let userInfo3;
userInfo1 = () => {
    console.log(`Mehedi Hasan Himel`);
};
userInfo2 = (name) => {
    console.log(` ${name} is a Web Developer`);
};
userInfo3 = (name, age) => {
    return `${name} is ${age} Years old.`;
};
userInfo1();
userInfo2(`Himel`);
console.log(userInfo3(`Himel`, 22));
