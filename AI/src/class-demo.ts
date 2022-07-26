// import {isConstructorDeclaration} from `typescript`
class User {
  // properties, methods, constructor
  myName: string;
  age: number;
  constructor(myName: string, age: number) {
    this.myName = myName;
    this.age = age;
  }
  display(): void {
    console.log(`myName: ${this.myName}, age: ${this.age}`);
  }
}

class Student extends User {
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

let student1 = new Student(`Himel`, 22, 143);
student1.display();
// class object.
// user1: name: Mehedi Hasan Himel, age: 22
// user2: name: Monuiruzzaman Monir, age: 23

// let user_a = new User(`Mehedi Hasan Himel`, 22);
// user_a.display();
