const myFunc = (a: string, b: string, c: string = `true`) => {
  return a + b;
};

myFunc(`how`, `are you`);

const myFunction = (a: number, b: number, c: string = `true`) => {
  return a + b;
};

let result = myFunction(5, 6);
console.log(result);
