const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
  isRead: false,
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${
      this.pages
    }, Read: ${this.isRead ? "Yes" : "No"}`;
  },
};
console.log(book.title); // "The Great Gatsby"
console.log(book.summary());

// falsy values => 0, null, undefined, NaN, "", false
// truthy values

// ternary operator
// const isRead = book.isRead ? "Yes" : "No";

// 2. Destructuring
const fruits = ["apple", "banana", "cherry", "date"];

const [fruit1, fruit2] = fruits;
console.log(fruit1); // "apple"
console.log(fruit2); // "banana"

const [item1, , item3] = fruits;
console.log(item1, item3); // "apple" "cherry"


// Initial object
const person = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

const { name, address: {city} } = person;

const firstName = person.name;

console.log(name); // "John Doe"
console.log(city); // { city: "New York", zip: "10001" }

// Initial function
function displayPerson(person) {
  console.log(`"person", Name: ${person.name}, Age: ${person.age}`);
}

displayPerson(person); // "Name: John Doe, Age: 30"

function displayPersonDestructuralize({name, age}) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayPersonDestructuralize(person); // "Name: John Doe, Age: 30"

