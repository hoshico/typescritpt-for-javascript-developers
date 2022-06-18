export {};

/*
  Pick
  必要な型が部分的だった場合に使用
  Pick< 参照するtype, 参照したい型 >

  type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  * keyof T で
    Tのkeyが取れる
    今回の場合は 'name' | 'height' | 'weight'
  * extends で互換性の取れるもの
*/

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type SmallProfile = Omit<DetailedProfile, 'height'>;

/*
  Omit
  必要ない型を除外する時に使用
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
*/

type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;