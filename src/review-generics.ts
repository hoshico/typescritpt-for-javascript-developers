export {};

/*
  ジェネリクス
  引数()の中の方は引数
  引数()の後ろは戻り値
  引数()の前の<T>はジェネリクスの宣言
  「型引数」という
*/

const echo = <T>(arg: T): T => {
  return arg
};

/*
  使用する際は
  func<具体的な型>()
  の形で使用
*/
console.log(echo<number>(100));
console.log(echo<string>('Hello'));
