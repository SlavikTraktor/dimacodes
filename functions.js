function summAndPlusOne(x, y) {
  let var1 = x * y;
  if (x === y) {
    console.log("kek");
  } else {
    var1 = x - y;
  }
  return var1 + 1;
}

let a1 = 5;
let x1 = summAndPlusOne(a1, 5);
console.log(x1);

function determ() {
  console.log("Считаем.");
  console.log("Считаем..");
  console.log("Считаем...");
  let k = 114 * 2; // *******

  if (k === 228) {
    return k;
    // Этот код не выполнится
    console.log("kek");
    console.log("kek");
  }

  console.log("kek");

  return 0;
  // Этот код тоже не выполнится
  let lll = 3434;
  console.log("kek");
}

let a = determ();
//  a = 228;

console.log(a);

function noReturnFunc() {
  console.log("kek");

  return;
  console.log("kek");
}

noReturnFunc();

function countSumm(a, summ = 0) {
  if (a <= 0) {
    return summ;
  }
  let nextStep = a - 1;
  let newSum = summ + a;
  return countSumm(nextStep, newSum);
}

console.log(countSumm(4));
