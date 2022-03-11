let arr1 = [1, 2, 4];

let arr2 = arr1;

arr2[1] = 322;

console.log(arr1, arr2);

let arr4 = [1, 2, 4];

// let arr5 = [];
// for(let i = 0; i < arr4.length; i++) {
//     arr5.push(arr4[i]);
// }
// То же самое, но короче, ниже

let arr5 = [...arr4];

console.log(arr4, arr5, arr4 === arr5);

let arr6 = [1, ...arr4, 5, ...arr5, 8, ...arr4, 1234];

console.log(arr6);
