type TypePerson = TypeName & TypeLastName & TypeFullName;
interface TypePerson2 extends TypeFullName, TypeLastName, TypeName, HasFeet {}

interface TypeName {
  name: string;
}

interface TypeLastName {
  lastName: string;
}

interface TypeFullName {
  fullName(): string;
}

type HasFeet = {
  numberFeets: number;
}

type HasHand = {
  numberHands: number;
}

export class Person implements TypePerson2, HasFeet, HasHand {

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

const pessoaObj: TypePerson2 = {
  fullName() {
    return this.name + ' ' + this.lastName;
  },
  name: 'Peter',
  lastName: 'Jordan',
  numberFeets: 2
}

console.log(pessoa.fullName());
console.log(pessoa.numberFeets);
console.log(pessoaObj.fullName());

