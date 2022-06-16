export {};

/*
  ジェネリクス
  引数()の中の方は引数
  引数()の後ろは戻り値
  引数()の前の<T>はジェネリクスの宣言
  「型引数」という

  ()の前のジェネリクス型の型引数と
  同様の型の制約が
  引数()と
  戻り値に
  かかるecho
*/

const echo = <T>(arg: T): T => {
  return arg
};

/*
  使用する際は
  func<具体的な型>()
  の形で使用

  下のようにどの型を引数にとっても同様の型を返す
  関数ができる
*/
console.log(echo<number>(100));
console.log(echo<string>('Hello'));
console.log(echo<boolean>(true));



/* 
  クラスを使用したver
  class クラス名<型引数> {}
  ・constructorの引数にもTを使用
*/
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
};

console.log(new Mirror<number>(123).echo());

