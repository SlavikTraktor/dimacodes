let num = 5;
let num2 = 3.5;
let num3 = -8;

console.log(typeof num); // number
console.log(typeof num2); // number
console.log(typeof num3); // number

let str1 = "gfdsgfdsg fdgs fdsg fdsg fdsg d";
let str2 = "строка номер 2";

console.log(typeof str1); // string
console.log(typeof str2); // string

let bool1 = true;
let bool2 = false;
console.log(typeof bool1); // boolean
console.log(typeof bool2); // boolean

let keklul = typeof num2; // "number"

console.log(keklul); // number
console.log(typeof keklul); // string

function summPlease(a, b) {
  return a + b;
}

let functType = typeof summPlease; // "function"
console.log(functType === "function"); // true
console.log(functType !== "function"); // false

let null1 = null;
let obj1 = {
  kek: 2,
  kek1: 3,
};
let arr1 = [1, 4, 65];
console.log(typeof null1); // object
console.log(typeof obj1); // object
console.log(typeof arr1); // object


let noType = undefined; // === let noType;

console.log(typeof noType); // undefined
