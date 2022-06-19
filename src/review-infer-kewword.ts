export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

/*
  ReturnTypeの中に出てくる『infer』について

  type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
  ・「(...args: any) => any 」は関数を意味している
  ・「○○ ? R : any 」はconditional types
  ・inferは条件の一部としてジェネリクス型を宣言できるようになる
  * 本来ジェネリクスは型の名前の直後に<>を使用して書く(<>は直後にしか使用できない)
  * 「 T extends (...args: any) => any 」と「 T extends (...args: any) => infer R 」は同じ
  * 関数の戻り値が型引数のものと同じ
  * infer ... 推論
*/

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
  ) => infer R 
    ? R 
    : any;