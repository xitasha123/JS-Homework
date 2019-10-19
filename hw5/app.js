
// Задачи на зис

// Задание 1

const rectagle = {
  width: 3,
  height: 40,
  getSquare: function () {
    return (this.width * this.height);
  } 
}
console.log(rectagle.getSquare());

// Задание 2

const price = {
  price: 10,
  discount: '15%',
  getPrice: function() {
    return this.price;
  },
  getPriceWithDiscount: function() {
    return (this.price - (parseFloat(this.discount) * this.price) / 100);
  }
}

console.log(price.getPriceWithDiscount())

// Задание 3

const object = {
  height: 10,
  getPlusOne: function() {
    return this.height ++;
  }
}
object.getPlusOne();
console.log(object.height);

// Задание 4

const numerator = {
  value: 1,
  double: function() {
    this.value *= 2;
    return this;
  },
  plusOne: function() {
    this.value ++;
    return this;
  },
  minusOne: function() {
    this.value --;
    return this;
  }
}

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

// Задача на конструктор 

function Calculator() {
  this.read = function() {
    this.a = +prompt('Укажите первое число', 0);
    this.b = +prompt('Укажите второе число', 0);
  };
  this.sum = function() {
    return this.a + this.b;
  }
  this.mul = function() {
    return this.a * this.b;
  }
}

let calc = new Calculator();
calc.read();

alert("Sum= " + calc.sum());
alert("Mul= " + calc.mul());