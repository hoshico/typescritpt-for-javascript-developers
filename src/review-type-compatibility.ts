export {};

/* 
  anyに対してstringは代入できる
  互換性がある
*/
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

// any型はstringと互換性がある
fooCompatible = barCompatible;
// strigを代入したので型が変わる
console.log(typeof fooCompatible);

/* 
  stringに対してnumberは代入できない
  互換性がない
*/
let fooIncompatible: string;
let barIncompatible: number = 1;

//fooIncompatible = barIncompatible;

/* 
  stringに対してstringは代入できる
  互換性がある
*/
let fooString: string;
let barString: string = 'string';

fooString = barString;

/* 
  stringに対して文字列リテラル型は代入できる
  文字列リテラル型はstringの一部だから
  互換性がある
*/
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

/* 
  numberに対してnumberリテラル型は代入できる
  numberリテラル型はnumberの一部だから
  互換性がある
*/
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;

fooNumber = fooNumberLiteral;

/* 
  PersonクラスはAnimalとは依存関係がない
  interfaceのメンバーとclassのメンバーは合わせる
  オブジェクト間の互換性
  構造的部分型
*/
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age:number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'HamSan');
