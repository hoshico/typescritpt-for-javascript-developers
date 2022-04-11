export {};

class Person {
  
  constructor(public name: string, protected age: number) {
    

  }
}

const me = new Person('ハムさん', 43);
console.log(me);