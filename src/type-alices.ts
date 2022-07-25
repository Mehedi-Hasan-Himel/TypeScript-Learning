// TypeScript: Type Aliases

type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: string | number, user: userType) => {
  console.log(`User id id ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
};
