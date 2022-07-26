type Users = {
  userName: string;
  userId: number;
};
let myUsers: Users[];
myUsers = [];

let user3: Users;
user3 = { userName: `Sahinur Islam`, userId: 103 };
myUsers.push(user3);

let user4: Users;
user4 = { userName: `Monirruzzaman Monir`, userId: 104 };
myUsers.push(user4);

let user5: Users;
user5 = { userName: `Asif Hasan`, userId: 105 };
myUsers.push(user5);

for (const key in myUsers) {
  console.log(myUsers[key]);
}

type RequestTypes = `GET` | `POST`;
let getRequest: RequestTypes;
getRequest = `GET`;

function requestHandler(requestType: RequestTypes) {
  console.log(requestType);
}
requestHandler(`GET`);
