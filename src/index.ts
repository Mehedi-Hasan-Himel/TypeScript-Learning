interface IUses {
  id: number;
  name: string;
  age: number;
}

let uses: IUses[] = [];

let use1: IUses = {
  id: 1,
  name: `Mehedi`,
  age: 22,
};

let use2: IUses = {
  id: 2,
  name: `Hasan`,
  age: 23,
};

uses.push(use1);
uses.push(use2);

const printUserInfo = (uses: IUses) => {
  console.log(`usesId = ${uses.id}, name = ${uses.name}, age = ${uses.age}`);
};

uses.forEach((use) => printUserInfo(use));
