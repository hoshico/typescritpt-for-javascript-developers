export {};

/* 
  インデックスシグネチャ
  objectのインデックス(key)に該当する箇所をアノーテーションするための署名
  添字アクセス 
  汎用性がある
*/

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
} 

let profile: Profile = { name: 'Ham', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';