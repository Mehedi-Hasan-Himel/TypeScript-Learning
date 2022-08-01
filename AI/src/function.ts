const myFunc = (a: string, b: string, c: string = `true`) => {
  return a + b;
};

myFunc(`how`, `are you`);

const myFunction = (a: number, b: number, c: string = `true`) => {
  return a + b;
};

let result = myFunction(5, 6);
// console.log(result);

let myFunction1: (x: string, y: string) => void;

let add: (x: number, y: number) => number;

add = (a: number, b: number) => {
  return a + b;
};

let calculation: (x: number, y: number, z: string) => number;
calculation = (a: number, b: number, c: string) => {
  if (c === `add`) {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(calculation(5, 6, `minus`));

