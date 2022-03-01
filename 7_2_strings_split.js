let string1 = "Попробуйте новую";

let string2 = "Корпорация, Майкрософт";

string1 = string1 + " " + string2;

// К символам строки можно обращаться как к элементам массива по индексу
console.log(string1[5]);

// Также у строки тоже есть длина как и у массива (длина === количество символов)
console.log(string1.length);

let splitArray = string1.split(", ");
console.log(splitArray);

let joinedString = splitArray.join(" kek ");
console.log(joinedString);

