
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
}
module.exports = Person;