export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

/*
  keyof
  オブジェクトのプロパティ名を文字列レテラル型のunion

  Profileの場合: "name" | "age" 
  を受け取れる
*/
type PropertyTypes = keyof Profile;


/* 
  Partialと同等のtype
  Optionalを作成
*/
type Optional<T> = {
  /* 
    インデックスシグネチャ-の内容
    keyには "in keyof"でtypeのkeyを順番に出す
    optionalの?を追加
    valueには型[key]でvalueを出す
  */
  [P in keyof T]?: T[P];
};

type OptionalProfile = Optional<Profile>;