let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age: number) => string;

userInfo1 = () => {
  console.log(`Mehedi Hasan Himel`);
};

userInfo2 = (name: string) => {
  console.log(` ${name} is a Web Developer`);
};

userInfo3 = (name: string, age: number) => {
  return `${name} is ${age} Years old.`;
};

userInfo1();
userInfo2(`Himel`);
console.log(userInfo3(`Himel`, 22));
