"use strict";
/*
built in data type:
1. number
2. string
3. boolean
4. void
5. undefined
6. null

*/
// let id = [1, 2, 3, 4];
let userId;
let firstName;
let lastName;
let isActive;
userId = 101;
firstName = `Mehedi Hasan `;
lastName = `Himel`;
isActive = true;
let fullName = firstName.concat(lastName);
console.log(`Your Id: ${userId}, User Name: ${fullName}, Account active: ${isActive}`);
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
