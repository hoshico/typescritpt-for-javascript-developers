export {};

// object型(極力{}のアノテーションをする)
// {}を使用してオブジェクトのプロパティに対して型制約する
let profile: { name: string } = { name: 'Ham'};

// 型エイリアス型
// エイリアスとは、「別名を持たせる」という意味
// type(別名)は頭文字
type Mojiretsu = string;
const fooString: string = 'Hello';
const fooMojirestu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const Example: Profile = {
  name: 'Ham',
  age: 43,
};
// example1のデータの型を別の型として設定したい時"typeof""
// typeofの方はexample1の構造の変化にも追従できる
type Profile2 = typeof example1;
