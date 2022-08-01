"use strict";
let users;
users = [];
let user1;
user1 = {
    userName: `Mehedi Hasan Himel`,
    userId: 143,
};
users.push(user1);
let user2;
user2 = {
    userName: `Kuhok`,
    userId: 43,
};
users.push(user2);
console.log(users);
for (const key in users) {
    console.log(users[key]);
}
