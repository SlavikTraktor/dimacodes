// Функции можно создавать несколькими способами, предпочтительнее с помощью знака =>.

// function kek() {
//   return 5;
// }
// let kek = function () {
//   return 5;
// };

// Это будет то же самое, что и в комментарии выше
let kek = () => {
  return 5;
};

let a = kek();
console.log(a);

let lul = (x) => 5 * x;

let kek2 = (x) => x(2);


console.log(kek2(lul));
let res = kek2((x) => x + 228);
console.log(res);
console.log(kek2((x) => !x));
