export {};

class Mahotsukai {}
class souryo {}

/* 
  TypeScriptでは1つのクラスしか継承できない
  複数のinterfaceは継承のようなことをできる(「実装する」という)
*/ 

class Taro extends Mahotsukai {}

interface Kenja {
  // 処理の実態がわからない: シグネチャー
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

/*
  「実装する」は英語でimplements
  extendsの代わりにimplementsを使用する
*/
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();