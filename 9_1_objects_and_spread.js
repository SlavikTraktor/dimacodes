// let dimaName = "Dima";
// let dimaHeight = 183;
// let dimaBirthYear = 1998;

let human = {
  legsCount: 2,
  handsCount: 2,
  head: true,
};

let dima = {
  name: "Dima",
  height: 183,
  birthYear: 1998,
  ...human,
};

let slava = {
  name: "Slava",
  height: 178,
  birthYear: 1990,
  car: true,
};

let anton = { ...slava, ...dima };

console.log(anton);
