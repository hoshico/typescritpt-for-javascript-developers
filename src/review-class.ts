export {};

class Person {
  public name: string;
  //private age: number;
  protected age: number;
  protected nationality: string;

  // constructorは戻り値がないので、戻り値に対して型がいらない。
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
//console.log(taro.profile());

// アクセス修飾子(public/private/protected)
// アクセスできるのかできないのかを制御する
// publicはあまり書かないかも
// 規制したいメンバーにだけ書くことが多い
console.log(taro.name);
// このようにインスタンスに対して呼び出しができる

// サブクラス作成
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // superメソッドを使用することで親クラスの同名メソッド(constructorメソッド)を継承できる
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}