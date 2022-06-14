export {};

/*
  Record型は2つのジェネリクス方の型引数をに持つ
  共通のデータ型を持たせたいとき

  Record<K, T>
  Kにはユニオン型を
  
  const ○○ = {
    AAA: { △△ : ~~, □□: ~~};
    BBB: { △△ : ~~, □□: ~~};
    CCC: { △△ : ~~, □□: ~~};
  }
  のようなオブジェクトの中にオブジェクトが入ってるものに有効
*/

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
}