import { Player } from './classes/Player.js';
const mashrafi = new Player(`Mashrafi`, 40, `Bangladesh`);
let sakib;
sakib = new Player(`Sakib`, 35, `Bangladesh`);
console.log(sakib.country);
// console.log(mashrafi);
const players = [];
players.push(sakib);
players.push(mashrafi);
/*
interface RectangleOptions{
    width:number,
    length:number,

}
function drawRectangle(options:RectangleOptions){
    let width = options.width
    let length = options.length
}

let threeDOptoions ={
    width:30,
    length:40,
    height:10,
}
drawRectangle(threeDOptoions)
*/ 
