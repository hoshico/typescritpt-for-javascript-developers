export {};

// 抽象クラスの中で抽象メソッド
abstract class Animal {
  abstract cry(): string;
}

// 抽象クラスを継承してLionクラス
class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}