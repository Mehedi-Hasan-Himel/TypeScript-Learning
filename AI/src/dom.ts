const userForm = document.querySelector(".user-form") as HTMLFormElement;
// console.log(userForm);

const UserName = document.querySelector("#name") as HTMLInputElement;
// console.log(UserName);

const UserEmail = document.querySelector("#email") as HTMLInputElement;
// console.log(UserName);

const UserCountry = document.querySelector("#country") as HTMLSelectElement;
// console.log(UserName);

const UserFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;
// console.log(UserName);

userForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const data = {
    username: UserName.value,
    useremail: UserEmail.value,
     UserCountry: UserCountry.value,
    UserFeedback: UserFeedback.value
  };
  console.log(data);
});
