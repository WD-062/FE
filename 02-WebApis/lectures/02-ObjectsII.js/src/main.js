class Cat {
  constructor(name, age, color, breed) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.breed = breed;
    this.isHungry = 0;
  }
  // Getter methods
  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get getColor() {
    return this.color;
  }
  get getBreed() {
    return this.breed;
  }
  get getIsHungry() {
    return this.isHungry;
  }
  // Setter methods
  set setName(name) {
    this.name = name;
  }
  set setAge(age) {
    this.age = age;
  }
  set setColor(color) {
    this.color = color;
  }
  set setBreed(breed) {
    this.breed = breed;
  }
  set setIsHungry(isHungry) {
    this.isHungry = isHungry;
  }
  // Other methods
  feed() {
    return (this.isHungry += 10);
  }
}

const cat1 = new Cat("Mittens", 2, "black", "Siamese");

const cat2 = new Cat("Bolita", 4, "black", "Siamese");

const cat3 = new Cat("Tim", 4, "black", "Siamese");

const cat4 = new Cat("Tony", 4, "black", "Siamese");

const cat5 = new Cat("Pepita", 4, "black", "Siamese");

