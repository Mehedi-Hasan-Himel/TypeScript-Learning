"use strict";
let myUsers;
myUsers = [];
let user3;
user3 = { userName: `Sahinur Islam`, userId: 103 };
myUsers.push(user3);
let user4;
user4 = { userName: `Monirruzzaman Monir`, userId: 104 };
myUsers.push(user4);
let user5;
user5 = { userName: `Asif Hasan`, userId: 105 };
myUsers.push(user5);
for (const key in myUsers) {
    console.log(myUsers[key]);
}
let getRequest;
getRequest = `GET`;
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler(`GET`);
