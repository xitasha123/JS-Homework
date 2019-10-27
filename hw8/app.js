// задача 1

function minus(x = 0) {
    return function(y = 0) {
       return x - y;
    }
}

console.log(minus(5)(2));

function multiplyMaker(initValue) {
    let result = initValue;
    return function(num) {
        return result *=  num;
    }
}

const multiply = multiplyMaker(2);
console.log(multiply(3));
console.log(multiply(4));