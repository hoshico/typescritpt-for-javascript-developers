export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

/* 
  Partial
  オプショナルにするため
  Partial<>の型引数で渡す
  Profileを破壊しない
*/

type PartialType = Partial<Profile>;

/*
  Required
  全てのプロパティを必須なものにする
  Profileを破壊しない
*/

type RequiredType = Required<Profile>;
