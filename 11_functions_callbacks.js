// Функции можно передавать аргументами в другие функции

let kek = (fn) => {
  let res = fn();
  return res;
};

let lil = () => {
  return 228;
};

let result = kek(lil);

console.log(result);
