export {};

// 初期化処理を簡略化する
class VisaCard {
  constructor(public readonly owner: string) {
  }
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);
//myVisaCard.owner = 'ベーコン';
