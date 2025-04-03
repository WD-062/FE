const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1

const person = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: {
      cityName: "New York",
      zip: "10001",
    },
  },
  car: {
    brand: "Toyota",
    model: "Corolla",
  },
  hobbies: [
    {
      hobbiName: "reading",
      type: "leisure",
    },
    "gaming",
    "coding",
  ],
  greet: function (greeting) {
    return `${greeting}, my name is ${this.name}`;
  },
  getAge: function () {
    return this.age;
  },
  increaseAge: function () {
    this.age += 1;
    return this.age;
  },
};


// console.log(person);
// console.log(person.name);
// console.log(person.address);
// console.log(person.address.city);
// console.log(person.address.city.name);
// console.log(person.hobbies);
// console.log(person.hobbies[0].type);

person.getAge();
// console.log(person.getAge());
// console.log(person.increaseAge());
// console.log(person.getAge());

person.age = 35;
// console.log(person.age);

console.log(person.greet("Hi"));

// Desctructuring
const {
  name,
  age,
  address: {
    city: { cityName },
  },
} = person;

console.log("name", name);
console.log("age", age);
console.log("address", cityName);



