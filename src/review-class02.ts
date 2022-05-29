export {};

class Person {
  constructor(public name: string, protected age: number) {
  }
}

const me = new Person('Ham', 30);
console.log(me);

class MyNumberCard {
  owner: string;
  secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this.owner = owner;
    this.secretNumber = secretNumber;
  }
}