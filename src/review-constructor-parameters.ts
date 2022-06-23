export {};

class Person {
  name: string;
  age: number;

  constructor(naem: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro',30);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['Ham', 43];
const ham = new Person(...profile);
console.log(ham);

/*
  ConstructorParameters
  classと互換性のあるTじゃないとだめ
*/
type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;