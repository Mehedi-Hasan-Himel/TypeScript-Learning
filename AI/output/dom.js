"use strict";
const userForm = document.querySelector(".user-form");
// console.log(userForm);
const UserName = document.querySelector("#name");
// console.log(UserName);
const UserEmail = document.querySelector("#email");
// console.log(UserName);
const UserCountry = document.querySelector("#country");
// console.log(UserName);
const UserFeedback = document.querySelector("#feedback");
// console.log(UserName);
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        username: UserName.value,
        useremail: UserEmail.value,
        UserCountry: UserCountry.value,
        UserFeedback: UserFeedback.value
    };
    console.log(data);
});
