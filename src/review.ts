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


// interfaceについて

// typeは型エイリアス(別名)なので
type ObjectType = {
  name: string;
  age: number;
};

// interfaceは「＝」はいらない
interface objectInterface {
  name: string;
  age: number;
};

let object: objectInterface = {
  name: 'Ham-san',
  age: 43
};


// 型安全
let isFinsished: boolean = true;

// Unknown
const kansu = () => {
  return 43;
}

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();
// typeof 型を取得できる
// unknownなので数値じゃないかもしれない。計算できないかもしれない。
// 型ガードのnumberは""で囲う。numberは
let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

// intersection型
type Pitcher1 = {
  throwingAverage: number;
};
type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingAverage: 154
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
};
// 既存の型を組み合わせる
type TwoWayPlayer = Pitcher1 & Batter1;

const ohtanishouhei: TwoWayPlayer = {
  throwingAverage: 165,
  battingAverage: 0.286
};

// ユニオン型
let value: number | string = 1;
value = 'foo';
