"use strict";
// import {isConstructorDeclaration} from `typescript`
class User {
    constructor(myName, age) {
        this.myName = myName;
        this.age = age;
    }
    display() {
        console.log(`myName: ${this.myName}, age: ${this.age}`);
    }
}
class Student extends User {
    constructor(myName, age, studentId) {
        super(myName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`myName: ${this.myName}, age: ${this.age},id:${this.studentId}`);
    }
}
let student1 = new Student(`Himel`, 22, 143);
student1.display();
// class object.
// user1: name: Mehedi Hasan Himel, age: 22
// user2: name: Monuiruzzaman Monir, age: 23
// let user_a = new User(`Mehedi Hasan Himel`, 22);
// user_a.display();
