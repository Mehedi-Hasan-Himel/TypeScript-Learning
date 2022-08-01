// Union Type Data

let myId: string | number | boolean;
myId = `111`;
myId = 111;
myId = true;

// console.log(myId);

function displayUserInfo(userId: string | number) {
  console.log(userId);
}
displayUserInfo(`101`);
displayUserInfo(101);
