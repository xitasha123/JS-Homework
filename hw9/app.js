// Задача 2

class Building {
    constructor(name, countOfFloors) {
      this.name = name;
      this.countOfFloors = countOfFloors;
    }
    setCountOfFloors(value) {
      this.countOfFloors = value;
    }
    getCountOfFloors() {
      return this.countOfFloors;
    }
  }
  
  const b1 = new Building('жилстрой1', 12);
  b1.setCountOfFloors(13);
  console.log(b1.getCountOfFloors());
  
  class House extends Building {
    constructor(name, countOfFloors, countOfFlats) {
      super(name, countOfFloors)
      this.countOfFlats = countOfFlats;
    }
    getCountOfFloors() {
      return {
        floors: this.countOfFloors,
        flats: this.countOfFloors * this.countOfFlats
      }
    }
  }
  
  const h1 = new House('дом1', 3, 2);
  console.log(h1.getCountOfFloors())


  class ShoppingMall extends Building {
    constructor(name, countOfFloors, countOfShops) {
      super(name, countOfFloors)
      this.countOfShops = countOfShops;
    }
    getCountOfShops() {
      return {
        floors: this.countOfFloors,
        shops: this.countOfFloors * this.countOfShops
      }
    }
  }
  
  const shop = new ShoppingMall('шоп1', 4, 2);
  console.log(shop.getCountOfShops())


//   Задание 1

  class Planet {
    constructor(name){
        this.name = name;
    }
    getName(){
        return 'Planet name is ' + this.name;
    }
}

class PlanetWithSatellite extends Planet{
    constructor (name, satellite){
        super(name);
        this.satellite = satellite;
    }
    getName() {
        return super.getName() + '. The satellite is ' + this.satellite;
    }
}

let earth = new PlanetWithSatellite('earth', 'moon');

// задание 3

class Mebel {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return this.name + this.price;
    }
}

let justMebel = new Mebel('Комп ', '4');
console.log(justMebel.getInfo())

class OfficeMebel extends Mebel{
    constructor(name, price, countTables) {
        super(name, price)
        this.countTables = countTables;
    }
    getInfo() {
        return super.getInfo() + 'Всего столов ' + this.countTables;
    }
}

let office = new OfficeMebel('Стол ', '34 ', 200);
console.log(office.getInfo())

class HomeMebel extends Mebel{
    constructor(name, price, countSofas) {
        super(name, price)
        this.countSofas = countSofas;
    }
    getInfo() {
        return super.getInfo() + 'Всего диванов ' + this.countSofas;
    }
}

let home = new HomeMebel('Диван ', '345 ', 20);
console.log(home.getInfo())


// Задание 4

class Member {
    constructor(name, dataReg) {
        this.name = name;
        this.dataReg = dataReg;
    }
    getInfo() {
        return this.name + this.dataReg;
    }
}

class Admin extends Member {
    constructor(name, dataReg, superAdmin) {
        super(name, dataReg)
        this._superAdmin = superAdmin;
    }
    getInfo() {
        if(this._superAdmin === true || this._superAdmin === false) {
            return super.getInfo() + ' Статус ' + this._superAdmin;
        } else {
            return console.error('error');
        }
    }
}

let admin = new Admin('Дима', 5.07, false);
console.log(admin.getInfo())


class User extends Member {
    constructor(name, dataReg, validData) {
        super(name, dataReg)
        this.validData = validData;
    }
    getInfo() {
        return super.getInfo() + ' До числа ' + (this.validData + this.dataReg) + '(Неделя после регистрации)';
    }
}

let user = new User('Никита ', 15, 7);
console.log(user.getInfo());

