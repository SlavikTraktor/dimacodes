let string1 = "Попробуйте новую";

let string2 = 'Корпорация Майкрософт';

string1 = string1 + " " + string2;

let partOfString1 = string1.slice(5);
console.log(partOfString1);

let partOfString2 = string1.slice(5, 12);
console.log(partOfString2);

let partOfString3 = string1.slice(-15);
console.log(partOfString3);

let partOfString4 = string1.slice(4, -5);
console.log(partOfString4);

let partOfString5 = string1.slice(5, 3);
console.log(partOfString5); // будет пустая строка

