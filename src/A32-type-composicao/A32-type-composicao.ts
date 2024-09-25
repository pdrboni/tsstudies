export class Human {

  private readonly heart: Organ = new Organ('Heart');
  private readonly lungs: Organ = new Organ('Lungs');

  vitalSignal(): void {
    this.heart.vitalSignal();
    this.lungs.vitalSignal();
  }

  ansietySignal(): void {
    this.heart.ansietySignal();
    this.lungs.ansietySignal();
  }

  stopSignal(): void {
    this.heart.stopSignal();
    this.lungs.stopSignal();
  }

}

export class Organ {

  constructor(
    public name: string,
  ) {}

  vitalSignal(): void {
    console.log(`${this.name} it's giving vital signals`)
  }

  ansietySignal(): void {
    console.log(`${this.name} it's giving ansiety signals`)
  }

  stopSignal(): void {
    console.log(`OMG, ${this.name} stops!!!`)
  }
}

const human = new Human();

human.vitalSignal();
human.ansietySignal();
human.stopSignal();
