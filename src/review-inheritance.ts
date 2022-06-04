export {};

// 継承のベースとなる親クラス
class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    // superメソッドは親のconstructorメソッドそのもの
    super(name);

    this.speed = speed;
  }
  run(): string {
    // 親クラスの同名メソッドをsuperで呼び出す
    const parentMessage = super.run();
    return `${parentMessage} ${this.speed}km/h.`
  }
}

//let animal = new Animal();
//console.log(animal.run());
//let lion = new Lion();
//console.log(lion.run());
console.log(new Animal('Mickey').run())
console.log(new Lion('Simba', 80).run())