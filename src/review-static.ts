export {}

// 静的なメンバーの作成

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atushi';
  static lastName: string = 'Ishida';

  static work() {
    //return "Hey, guys! Are you interested in TypeScript? let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? let's dive into TypeScript!`;
  }
}

//let me = new Me();
//console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());