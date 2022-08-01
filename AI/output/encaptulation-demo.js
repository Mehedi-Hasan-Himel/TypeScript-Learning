"use strict";
// public, private, protected, readonly.
class User2 {
    constructor(myName, age) {
        this.myName = myName;
        this.age = age;
    }
    display() {
        console.log(
        // `myName: ${this.myName}, age: ${this.age},id:${this.studentId}`
        );
    }
}
class Students1 extends User2 {
    constructor(myName, age, studentId) {
        super(myName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`myName: ${this.myName}, age: ${this.age},id:${this.studentId}`);
    }
}
let student3 = new Students1(`Himel`, 22, 143);
// student3.display();
let user6 = new User2(`Himel`, 22);
user6.myName = `kuhok `;
// user6.display() = `kuhok `;
