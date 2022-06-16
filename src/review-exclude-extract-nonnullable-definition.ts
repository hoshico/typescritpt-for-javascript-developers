export {};


/*
  conditionalType
  ○ ? △ : □;

  type Exclude<T, U> = T extends U ? never : T;
*/

// Tには全体 Uには除外したいもの
type MyExclude = 
  /*
    Distributive Conditional Types
    extendsの左と右で互換性があるかを確認
    互換性があればnever
  */
  | (string extends string | number ? never : string)
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType);

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

/* 
  exclude(ユーティリティ型)
  除外する
  Exclude<全体,除外したいもの>
*/

type FunctionType = Exclude<SomeTypes, string | number>;

// MyExcludeを使用して
type MyfunctionType = MyExclude;




/*
  extract
  抽出する
  Extract<全体,抽出したいもの>
*/

// DebugTypeのみ抽出
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

/*
  NonNullableタイプ
  nullとundefinedを除外
  NonNullable<nullとiundefinedを除外したいもの>
*/
type Nullabletypes = string | number | null | undefined;
type NonNulableTypes = NonNullable<Nullabletypes>;