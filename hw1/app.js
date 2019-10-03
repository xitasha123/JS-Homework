
// Домашнее задание 

// Слайд 10, презентация 1

let string = `some test string`;

// задание 1

let firstLetter;
firstLetter = string[0];
console.log(firstLetter);

let lastLetter;
lastLetter = string[string.length - 1];
console.log(lastLetter);

// задание 2

let stringCaps;
stringCaps = string[0].toUpperCase() + string.slice(1,string.length - 1) + string[string.length-1].toUpperCase();
console.log(stringCaps);

// задание 3

let wordPos;
wordPos = string.indexOf('string');
console.log(wordPos);

// Задание 4
function spaceFind (x = String, counter = Number) {
    let finder, lastIndex = 0;
    for (let i = 0; i < counter; i++) {
      finder = x.indexOf(' ', lastIndex);
      lastIndex = finder + 1;
    }
    return finder;
  }
  
 console.log(spaceFind(string, 2));

// Задание 5
let shortStr;
shortStr = string.substr(5, 4);
console.log(shortStr);
// Задание 6

let shortString;
shortString = string.slice(5, 9);
console.log(shortString);

// Задание 7 
let cutString;
cutString = string.slice(0, -6);
console.log(cutString);

// ЗАдание 8 
let a = 20;
let b = 16;
let toString; 
toString = (String(a) + b); 
console.log(toString);



// Слайд 13, презентация 1

// Задание 1

let pi;
pi = +(Math.PI.toFixed(2));
console.log(pi);

// Задание 2

let highNumber = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let lessNumber = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

console.log(highNumber, lessNumber);

// Задание 3 

let randomFix; 
randomFix = Math.random().toFixed(2);
console.log(randomFix);

let randomTen;
randomTen = Math.floor(Math.random() * 10 + 1);
console.log(randomTen);

// Задание 4 

let clearFraction;
clearFraction = ( 0.6 * 10 + 0.7 * 10 ) / 10;
console.log(clearFraction); 
// Также есть способ через Парсфлоат, но я посчитал, что этот удобнее.

// Задание 5

let toNumber;
toNumber = parseInt('100$');
console.log(toNumber);



// Слайд 12, презентация 2

// Задание 1

a = 0 || 'string'; // ‘string’;  0 - false, ‘string’ - true
a = 1 && 'string'; // string - последнее значение, т.к оба тру
a = null || 25; // 25, потому что нал - это фолс
a = null && 25; // нулл, потому что он фолс, а 25 тру
a = null || 0 || 35; // 35, так как нул и 0 - фолс, а 35 тру
a = null && 0 && 35; // нулл, т.к это первое значение с фолс в данной ситуации.
console.log(a);

// Задание 2

let numberValue;
numberValue = (12 + 14 + '12'); 
// Cначала складываются числа, а потом прибавляется строка образуя строку, ибо оператор +  (=2612)

numberValue = (3 + 2 - '1');
// Строка превращается в число, так как после чисел идет вычетание 4

numberValue = ('3' + 2 - 1);
// Cначала образуется строка, а затем, благодаря вычетанию, образуется число с вычетом единицы = 31

numberValue = (true + 2);
// 3, так как Тру = 1

numberValue = (+'10' + 1);
// Так как перед строкой был оператор +, это образовало число. На выходе 11

numberValue = (undefined + 2);
// Нан, потому, что андефайнед. Он действен лишь в сложении со строками

numberValue = (null + 5);
// 5, потому, что нул = 0

numberValue = (true + undefined);
// Нан, потому, что андефайнед. Он действен лишь в сложении со строками

console.log(numberValue);


// Cлайд 16, презентация 2

// Задание 1

let valueChange = 'hidden';
if(valueChange = 'hidden') {
  valueChange = 'visible';
} else {
  valueChange = 'hidden';
}

console.log(valueChange);

// Задание 2

let numberChange = 0;

if (numberChange === 0) {
  numberChange = 1;
} else if (numberChange < 0) {
  numberChange = 'less then zero';
} else {
  numberChange *= 10;
}

console.log(numberChange);


// Задание 3

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

if (car.age > 5) {
  console.log('Need repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}

// Задание 4 

let item = { name: 'Intel core i7', price: '100$', discount: '15%' }

if (item.discount) {
  item.priceWithDiscount = parseFloat(item.price) - (parseFloat(item.discount) * parseFloat(item.price) / 100);
  console.log(item.priceWithDiscount);
} else {
  console.log(item.price);
}

// Задание 5

let product = {
  name: 'Яблоко',
  price: '10$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseFloat(product.price) >= min && parseFloat(product.price) <= max) {
  console.log(product.name);
} else {
  console.log('товаров не найдено');
}