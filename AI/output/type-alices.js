"use strict";
// TypeScript: Type Aliases
const userDetails = (id, user) => {
    console.log(`User id id ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
};
