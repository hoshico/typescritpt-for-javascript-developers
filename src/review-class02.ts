export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる。
//   * 途中で変更できない。
//   * 参照できる。
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる。
//   * 途中で変更できる。
//   * 参照できない。

class Person {
  constructor(public name: string, protected age: number) {
  }
}

const me = new Person('Ham', 30);
console.log(me);

class MyNumberCard {
  // privateなものは_(アンスコ)で明示的にprivateさせる。
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  // getter(参照するためのメソッド)
  get owner() {
    return this._owner;
  }
  // setter(値を設定するためのメソッド)
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
  // デバッグ用のメソッド
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はむさん', 1234567890);
//card,owner = 'Ham';
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());

// アクセサー
// 参照ができるようにするためのget(今回は参照専用のメソッド ownerを作成したい)
// 書き換えできるようにするためのset