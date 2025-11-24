class Animal {
  constructor(name, type, age, color) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.color = color;
  }
  isSleeping() {
    console.log(`${this.name} is sleeping... ZZZZ`);
  }
  isAwake() {
    console.log(`${this.name} is awake ! WOUF !`);
  }
}

const animal1 = new Animal("AliFuer", "Dog", 13, "blonde");
const animal2 = new Animal("CuiCui", "Bird", 25, "Red");

console.log(animal1);
console.log(animal2);

animal1.isSleeping();
animal2.isSleeping();

animal1.isAwake();
animal2.isAwake();

// ******* Extends ********** //
class Dog extends Animal {
  constructor(name = "Fuer", age, color, owner, type) {
    // order is important here
    super(name, type, age, color); // must respect the previous class order
    this.owner = "Josh";
    this.toys = [];
  }
  speak() {
    console.log(`${this.name} says... I can speak, wtf !`);
  }
  hasABirthday() {
    this.age++;
    console.log(`${this.name} had a birthday and is now... ${this.age} !`);
  }
}

const Ragnar = new Dog(undefined, 4, "white", undefined, "Dog");
console.log(Ragnar);

const Havane = new Dog("Havane", 7, "Brown", "Mass", "Cat");
console.log(Havane);

Ragnar.speak();
Havane.speak();

Ragnar.hasABirthday();
console.log(Ragnar.age);
Ragnar.hasABirthday();
console.log(Ragnar.age);

// Making a cat class //
class Cat extends Animal {
  constructor(name = "Bidouille", age, color, type, owner) {
    super(name, type, age, color);
    this.owner = owner;
    this.toys = [];
  }
  giveToy(toy) {
    this.toys.push(toy);
  }
}

const myCat = new Cat(undefined, 3, "black", "typeCat", "Bode");
myCat.giveToy("mouse");
myCat.giveToy("ball");

console.log(myCat);
