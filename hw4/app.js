
// Задачи на высшие функции

// Задача 1

function doPolymorphArray(array, fn) {
  return `New value: ${fn(array)}`;
}

function upperWithoutSpaces(array) {
  let newStr = '';
  for (i=0; i<array.length; i++) {
    newStr += array[i][0].toUpperCase() + array[i].slice(1, array[i].length);
  }
  return newStr;
}

const arrayOfWords = ['my', 'name', 'is', 'Trinity'];

console.log(doPolymorphArray(arrayOfWords, upperWithoutSpaces));

function getMath(array) {
  let newArray = [];
  for (i=0; i<array.length; i++) {
    newArray.push(array[i] * 10);
  }
  return newArray;
}

const arrayMath = [4, 55, 6];

console.log(doPolymorphArray(arrayMath, getMath));

function getNamesAges(array) {
  let newArray = [];
  for (i=0; i<array.length; i++) {
    newArray.push(`${array[i].name} is ${array[i].age}`);
  }
  return newArray;
}
const userArray = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];

console.log(doPolymorphArray(userArray, getNamesAges));

function doReverse(array) {
  let newArray = [];
  for(i=0; i<array.length; i++) {
    let newString = ''; 
    for(let k = array[i].length -1; k > -1; k--) {
      newString += array[i][k];
    }
    newArray.push(newString)
  }
  return newArray;

}
const arrayReverse = ['abc', '123'];

console.log(doPolymorphArray(arrayReverse, doReverse));

// Задача 2

arrPlaceboFirst = [1, 3, 0, 6, 7];
arrPlaceboSecond = [8, 7, 6];

function everyPlacebo (array, fn) {
  if (Array.isArray) {
    if(typeof fn === 'function') {
      for (let i = 0; i < array.length; i++) {
        if (fn(array[i]) === false) {
          return false;
        } else {
          return true;
        }
      } 
    } else {
      return 'Неверный тип данных, не является функцией'
    }
  } else {
    return 'Неверный тип данных, не является массивом'
  }
}

function customFunction (num) {
  return num > 5 ? true : false;
}

console.log(everyPlacebo(arrPlaceboSecond, customFunction));


// Задачи на методы массивов

// Задание 1

function getNumberStatus(array) {
  return array.map((num) => {
    let oddStatus = num % 2 === 0 ? false : true;
    return {digit: num, odd: oddStatus};
   });
}

console.log(getNumberStatus([1,2,3,5,8,9,10]))

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

// Задача 2

function checkNull(array) {
  return array.every((num) => {
    return num !== 0;
  })
}

console.log(checkNull([12, 4, 50, 1, 0, 18, 40]));

// Задание 3

function checkLength(array) {
 return array.some((word) => {
    return word.length > 3;
  })
}

console.log(checkLength(['yes', 'hello', 'no', 'easycode', 'what']));


// Задание 4

const objArray = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

function buildSentence (array) {
  array.sort((a, b) => {
    return a.index - b.index;
  });
  
  return array.reduce((acc, object) => {
    return acc + object.char;
  }, '')
}

console.log(buildSentence(objArray));

// Задачи на сорт

// Задание 1

function lengthSort(array) {
  return array.sort((a, b) => {
    return a.length - b.length;
  });
}

console.log(lengthSort([ [14, 45],  [1],  ['a', 'c', 'd'] ]));

// Задание 2

const productsArray = [
  {cpu: 'intel', info: {cores:2, сache: 3}},
  {cpu: 'intel', info: {cores:4, сache: 4}},
  {cpu: 'amd', info: {cores:1, сache: 1}},
  {cpu: 'intel', info: {cores:3, сache: 2}},
  {cpu: 'amd', info: {cores:4, сache: 2}}
];


function productSort(array) {
  return array.sort((a, b) => {
    return a.info.cores - b.info.cores;
  });
}

console.log(productSort(productsArray))

// Задание 3

let products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection(array, start, end) {
  const filterArr = array.filter((product) => {
    return product.price >= start && product.price <= end;
  })
  return filterArr.sort((a, b) => {
    return a.price - b.price;
  })
} 


console.log(filterCollection(products, 4, 24));