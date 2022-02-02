// let i1 = 0;
// while(i1 < 10) {
//     console.log(i1);
//     i1++;
// }

let arr = [2, 5, 8, 19, 322, 6];
//         0  1  2   3    4  5

// arr[0] = arr[0] * arr[0];
// arr[1] = arr[1] * arr[1];
// arr[2] = arr[2] * arr[2];
// arr[3] = arr[3] * arr[3];
// arr[4] = arr[4] * arr[4];
// arr[5] = arr[5] * arr[5];

// let i = arr.length - 1;
// while (i > -1) {
//   arr[i] = arr[i] * arr[i];

//   // i = i - 1;
//   i--;
// }

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * arr[i];
}

console.log(arr);
