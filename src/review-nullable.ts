export {};

/*
  今のままではわからない
  不確定な変数の方を指定したいとき
  nullを設定できるようにしたいときはユニオン型で局所的にnullを設定


  ** tsconfig.jsonの
  strictNullChecks": trueになっていると
  nullはエラーになる
*/
let profile: {name: string, age: number | null } = {
  name: 'Ham',
  age: null
}