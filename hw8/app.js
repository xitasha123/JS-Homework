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

// Задача 3

class StringTransform {
    constructor() {
        this.outputStr = '';
    }

    setStr(strValue) {
        if(strValue === undefined) {
            this.outputStr;
        } else {
            this.outputStr = strValue.toString()
        };
    }

    getStr() {
        return this.outputStr;
    }
    getLengthStr() {
        return this.outputStr.length;
    }
    getReversStr() {
        this.outputStr = Array.from(this.outputStr).reverse().join('');
    }
}


newStr = new StringTransform();

newStr.setStr('Hello world');
console.log(newStr.getStr());
console.log(newStr.getLengthStr());
newStr.getReversStr();
console.log(newStr.getStr());

newStr.setStr(54);
console.log(newStr.getStr());
console.log(newStr.getLengthStr());
newStr.getReversStr();
console.log(newStr.getStr());


newStr.setStr('');
console.log(newStr.getStr());
console.log(newStr.getLengthStr());
newStr.getReversStr();
console.log(newStr.getStr());

// Задание 4

let Calculator = function () {
    let result = 0;
    return {
        setValue: function(value) {
            result = value;
            return this;
        },
        getResult: function() {
            console.log(result.toFixed(2));
            return this;
        },
        plusValue: function(value) {
            result += value;
            return this;
        },
        minusValue: function(value) {
            result -= value;
            return this;
        },
        multiply: function(value) {
            result *= value;
            return this;
        },
        pow: function(value) {
            result = Math.pow(result, value);
            return this;
        },
        reset: function() {
            result = 0;
            return this;
        },
    };
};

calc = new Calculator;
calc.setValue(4);
calc.minusValue(2);
calc.plusValue(6);
calc.pow(4);
calc.getResult();

calc.reset();
calc.setValue(4).plusValue(4).multiply(8).pow(22).getResult();