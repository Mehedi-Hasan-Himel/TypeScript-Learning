"use strict";
// import {isConstructorDeclaration} from `typescript`
class User1 {
    constructor(myName, age) {
        this.myName = myName;
        this.age = age;
    }
}
class Students extends User1 {
    constructor(myName, age, studentId) {
        super(myName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`myName: ${this.myName}, age: ${this.age},id:${this.studentId}`);
    }
}
let student2 = new Student(`Himel`, 22, 143);
student1.display();
