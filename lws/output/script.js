"use strict";
// Generics 
/*
const addID = <T extends {
    name: string
    age: number
}>(obj:T) =>{
    let id= Math.floor(Math.random()*100)
    return { ...obj,id}
}
 
let user = addID({
    name:`Mashrafi`,
    age:40,
    country:`Bangladesh`
})

addID(user)

// generics in interface

interface APIResponse<T>{
    status:number;
    type:string;
    data:T;
}

const response1: APIResponse<object> = {
    status:200,
    type:`good`,
    data: {
        name:`Test`,
        something:300
    }
}

// enums

enum RType{
    SUCCESS,FAILURE, UNAUTHENTICATED,FORBIDDEN
}
interface APIResponse<T>{
    status:number;
    type:RType;
    data:T;
}

const response1: APIResponse<object> = {
    status:200,
    type:RType.SUCCESS,
    data: {
        name:`Test`,
        something:300
    }
}

console.log(response1);
*/
