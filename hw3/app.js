// Задачи по функциям. Задача номер 1

function multiply() {
  let arrayNum = arguments.length;
  let multiplyResult = 1;
  if ( arrayNum ) {
    for (let i = 0; i<arrayNum; i++) {
      multiplyResult *= arguments[i];
    }
    return multiplyResult;
  } else {
    return 0;
  }
}

console.log(multiply(2, 5, 7, 2, 5, 7, 2, 5, 7, 2, 5, 7, 2, 5, 7, 2, 5, 7, 2, 5, 7, 2, 5, 7));

// Задание 2

function reverseString(str) {
  let newStr = '';
  for ( let i=str.length - 1; i > -1 ; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString('Помогите, мне нужно учить JavaScript'));


// Задание 3

var sssstr = "HELLO WORLD";
var n = sssstr.charCodeAt(0);

function getCodeStringFromText(text) {
  let codeStrinResult = '';
  for (let i = 0; i<text.length; i++) {
    codeStrinResult += text.charCodeAt(i) + ' ';
  }
  return codeStrinResult;
}

console.log(getCodeStringFromText('hello'));

// Задание 4

function tryNumber(num = 0) {
  let random = Math.floor(Math.random() * 10 + 1);

  if (num < 10 && num > 0) {
    if (num === random) {
      return console.log('Вы выиграли!')
    } else {
      return console.log(`Вы проиграли! Ваше число ${num}, а выпало число ${random}`)
    }
  } else {
    return console.log('Хоть вам никто и не сказал, что нужно вводить числа от 1 до 10, но вы невнимательны')
  }
}

tryNumber(11); // Я аж залип играя в эту "игрушку", обновляя браузер))

// Задание 5

function getArray(n) {
  let nArray = [];
  for (let i = 1; i<n + 1; i++) {
    nArray.push(i);
  }
  return nArray;
}

console.log(getArray(10))

// Задание 6

function doubleArray(array) {
  let nextArray = array.concat(array);
  return nextArray;
}

console.log(doubleArray([1, 2, 3]))

// Задание 7

function deleteFirst() {
  let newArray = [];
  for (let i = 0; i < arguments.length; i++) {
      arguments[i].shift();
      newArray.push(arguments[i]);    
  }
  return newArray;
}

console.log(deleteFirst([1, 2], [1, 2, 3, 4]));


// Задание 8

let userArray = [{name: 'Denis', age: '29', gender: 'male'} , {name: 'Ivan', age: '20', gender: 'male'} , {name: "Sveta", age: '15', gender: 'female'} ]

function getUsers(userArray, gender, male) {
  let filterArray = [];
  for (let i=0; i<userArray.length; i++) {
    if (userArray[i][gender] === male ) {
      filterArray.push(userArray[i]);
    }
  }

  return filterArray;

}

console.log(getUsers(userArray, 'gender', 'male'))

// Задания не из презентации на массивы

// Задание 1

function getPosNeg() {
  let posNegArray = [-2, 3, 4, -5, -6, 2, 4, -56];
  let posArray = [];
  let negArray = [];

  for (let i=0; i < posNegArray.length; i++) {
    if (posNegArray[i] > 0) {
      posArray.push(i);
    } else if (posNegArray[i] < 0 ) {
      negArray.push(i);
    }
  } return `pos = ${posArray.length} min = ${negArray.length}` ;

}
console.log(getPosNeg());

// Задание 2

// На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности: [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]



function oddArray(arr) {
  let newArray = [];

  for (let i of arr) {
    newArray.push({
      digit: i,
      odd: !!(i % 2)
    });
  }
  
  return newArray;
  }


console.log(oddArray([1, 2, 3, 5, 8, 9, 10]))