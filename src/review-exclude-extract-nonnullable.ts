export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

/* 
  exclude(ユーティリティ型)
  除外する
  Exclude<全体,除外したいもの>
*/

// stringとnumberを除外
type FunctionType = Exclude<SomeTypes, string | number>;

// 関数の型を除外
type NunFunctionType = Exclude<SomeTypes, DebugType>;

/* 
  "Function"で除外する方法
  関数の型をひっくるめて除外できる
*/
type TypeExcludeingType = Exclude<SomeTypes, Function>


/*
  extract
  抽出する
  Extract<全体,抽出したいもの>
*/

// DebugTypeのみ抽出
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
// "Function"で抽出する方法
type FunctionTypeByExtractingfunction = Extract<SomeTypes, Function>;

// number | stringのみ抽出
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;


/*
  NonNullableタイプ
  nullとundefinedを除外
  NonNullable<nullとiundefinedを除外したいもの>
*/
type Nullabletypes = string | number | null | undefined;
type NonNulableTypes = NonNullable<Nullabletypes>;