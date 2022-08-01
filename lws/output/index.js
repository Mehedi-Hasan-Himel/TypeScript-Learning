"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is plying`);
    }
}
const mashrafi = new Player(`Mashrafi`, 40, `Bangladesh`);
const sakib = new Player(`Sakib`, 38, `Bangladesh`);
console.log(mashrafi);
const players = [];
players.push(sakib);
players.push(mashrafi);
