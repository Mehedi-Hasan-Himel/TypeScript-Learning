// import {isConstructorDeclaration} from `typescript`
abstract class User1 {
  // properties, methods, constructor
  myName: string;
  age: number;
  constructor(myName: string, age: number) {
    this.myName = myName;
    this.age = age;
  }
  abstract display(): void;
}

class Students extends User1 {
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

let student2 = new Student(`Himel`, 22, 143);
student1.display();
