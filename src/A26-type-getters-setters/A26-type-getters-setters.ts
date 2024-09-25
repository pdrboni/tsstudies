export class Pessoa {
  private readonly name: string;
  private _lastName: string;
  private readonly age: number;
  private cpf: string;

  constructor(name: string, lastName: string, age: number, cpf: string) {
    this.name = name;
    this.cpf = cpf;
    this._lastName = lastName;
    this.age = age;
  }

  getIdade(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.lastName;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(lastName: string) {
    this._lastName = lastName;
  }

  setCpf(valor: string): void {
    this.cpf = valor;
  }
}

const pessoa = new Pessoa('Pedro', 'Boni', 27, '000.000.000-00')
pessoa.setCpf('000.000.000-22')
pessoa.lastName = 'Gasparotto'


console.log(pessoa.lastName)
