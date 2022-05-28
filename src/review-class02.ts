export {};

class Person {
  constructor(public name: string, protected age: number) {
  }
}

const me = new Person('Ham', 30);
console.log(me);