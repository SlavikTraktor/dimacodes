let arr = [2, 8, 5, 19, 322, 6];
//         0  1  2   3    4  5
console.log(arr);

let c = arr.length; // длина массива

arr[1] = 1488;
arr[4] = arr[1] + arr[3];
arr[2] = c;
arr[2] = arr[4];
arr[c-1] = 7;

console.log(arr);
console.log(arr.length); // длина массива
