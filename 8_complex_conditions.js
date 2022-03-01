if (true) {
  console.log("выполнится");
}
if (false) {
  console.log("не выполнится");
}

// И &&
let isMachineExists = true;
let isEnoughMoney = true;

if (isEnoughMoney && isMachineExists) {
  console.log("Купить");
} else {
  console.log("Не купить");
}

// ИЛИ ||
let isBosh = false;
let isPanasonic = true;
let isEnoughMoney2 = true;

if ((isBosh || isPanasonic) && isEnoughMoney2) {
  console.log("Купить");
} else {
  console.log("Не купить");
}


// НЕ ! - противоположное значение (ИНВЕРСИЯ)
let isRed = true;

if ((isBosh || isPanasonic) && isEnoughMoney2 && !isRed) {
  console.log("Купить");
} else {
  console.log("Не купить");
}
