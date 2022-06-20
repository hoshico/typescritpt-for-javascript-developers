export {};

/*
  Parameters
  人が作成した関数(容易に変更できないもの)
  から引数のみの型を取り出したい時に使用する
*/
const debugProfile = (name: string, age: number) => {
  console.log({ name, age })
  //console.log(name)
  //console.log(age)
  //console.log({name})
  //console.log({age})
};

debugProfile('Ham', 43);

type Profile = Parameters<typeof debugProfile>;

// 引数を変数として用意(配列で/タプル型に合わせて)
const profile: Profile = ['Gleoria', 76];

debugProfile(...profile);


type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
  ) => any
   ? P 
   : never;