// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Guitarist {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
}

type UserId = stringOrNumber;

// literal types
let myName: `Dave`;

let userName: `Dave` | `John` | `Amy`;

userName = `Amy`;

// function

const add = (a: number, b: number) => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg(`Hello World`);
logMsg(add(3, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

// type mathFunction = (a: number, b: number) => number;

interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== `undefined`) {
    return a + b + c;
  }
  return a + b;
};

// default param value
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(10, 2, 3));
logMsg(sumAll(2, 3));

// rest param
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 2, 3));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

const inNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This soould never happen!");
};


