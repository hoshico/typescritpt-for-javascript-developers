export {};

/* 
  型アサーション
  as を使用する方法と
  <>を使用する方法がある
*/

let name: any = 'Ham';

//let length = name.length as number;
//let length = (name as string).length;
let length = (<string>name).length;

length = 'foo';