type TypePerson = {
  name: string;
  lastName: string;
  fullName(): string;
}

type HasFeet = {
  numberFeets: number;
}

type HasHand = {
  numberHands: number;
}

export class Person implements TypePerson, HasFeet, HasHand {

  public name: string;
  public lastName: string;
  public numberFeets: number;
  public numberHands: number;

  constructor (name: string, lastName: string, numberFeets: number, numberHands: number) {
    this.name = name;
    this.lastName = lastName;
    this.numberFeets = numberFeets;
    this.numberHands = numberHands;
  }

  fullName(): string {
      return this.name + ' ' + this.lastName;
  }
}

const pessoa = new Person('Pedro', 'Boni', 2, 3);
console.log(pessoa.fullName());
console.log(pessoa.numberFeets);

