// public, private, protected, readonly.
class User2 {
  // properties, methods, constructor
  public myName: string;
  public age: number;
  constructor(myName: string, age: number) {
    this.myName = myName;
    this.age = age;
  }
  display(): void {
    console.log(
      // `myName: ${this.myName}, age: ${this.age},id:${this.studentId}`
    );
  }
}

class Students1 extends User2 {
  studentId: number;
  constructor(myName: string, age: number, studentId: number) {
    super(myName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `myName: ${this.myName}, age: ${this.age},id:${this.studentId}`
    );
  }
}

let student3 = new Students1(`Himel`, 22, 143);
// student3.display();

let user6 = new User2(`Himel`, 22);
user6.myName = `kuhok `;
// user6.display() = `kuhok `;
