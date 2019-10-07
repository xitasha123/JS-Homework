// Задачи по обьектам

let productObj = {
  product: 'iphone'
}

productObj.price = 1000;
productObj.currency = 'dollar'
productObj.details = {model: '3GS', color: 'black'};

console.log(productObj);

//  Cвич кейсы 

// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }

let a = 'block';

switch (a) {
  case 'block': console.log('block'); break;
  case 'none': console.log('none'); break;
  case 'inline': console.log('inline'); break;
  default: console.log('other');
}

// Задачи на тернарник

// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let x = 'hidden' ? 'visible' : 'hidden';
console.log(x);

// 2. если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let z = 5;
z > 0 ? z *= 10 : z < 0 ? z === 'less then zero' : z === 1;
console.log(z);


//3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
//Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };

car.age > 5 ? car.needRepair = true : car.needRepair = false;
car.age > 5 ? console.log('Need repair') : console.log('You dont need repair');
console.log(car);

// Задания на циклы

// Задание 1

let str = 'i am in the easycode';
let newStr = '';
for (i=0; i<str.length; i++) {
  if (str[i] !== ' ' && str[i - 1] === ' '){
        newStr += str[i].toUpperCase();
    } else {
        newStr +=str[i];
    }
}
console.log(newStr);

// Задание 2

let string = 'tseb eht ma i';
let newString = '';

for ( i=string.length - 1; i > -1 ; i--) {
  newString += string[i];
}
console.log(newString);

// Задание 3

let factorial = 1;
for (i=10; i>0; i--) {
  factorial *= [i];
}

console.log(factorial);

// Задание 4

str = 'JavaScript is a pretty good language';
newStr = '';
for (i=0; i<str.length; i++) {
  if (str[i] !== ' ' && str[i - 1] === ' '){
        newStr += str[i].toUpperCase();
    } else if(str[i] !== ' ') {
        newStr +=str[i];
    }
}
console.log(newStr);

// Задание 5

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (const i of numberArray) {
  if (i % 2 === 1) {
      console.log(i);
  }
}

// Задание 5

let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
}

for (let key in list) {
    if (typeof list[key] === 'string') {
        list[key] = list[key].toUpperCase();
    }
}
console.log(list)
 
