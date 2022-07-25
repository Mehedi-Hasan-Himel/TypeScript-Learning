const userDetails = (
  id: string | number,
  user: { name: string; age: number }
) => {
  console.log(`User id id ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: { name: string; age: number }) => {
  console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
};
