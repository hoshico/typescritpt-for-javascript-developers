export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Shigetu',
  age: 40,
};

//friend.age++;

type YomitoriSenyou<T> = {
  readonly [P in keyof T]: T[P];
};