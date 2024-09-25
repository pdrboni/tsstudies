export class Pessoa {
  public readonly name: string;
  public readonly lastName: string;
  private readonly age: number;
  protected readonly cpf: string;

  constructor(name: string, lastName: string, age: number, cpf: string) {
    this.name = name;
    this.cpf = cpf;
    this.lastName = lastName;
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
}

export class Aluno extends Pessoa {

  //sala: string

  constructor (
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public sala: string,
  ) {
    super(name, lastName, age, cpf);
    //this.sala = sala;
  }


  getFullName(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getFullName();
    return result + ' OLAAAA'
  }
}

export class Cliente extends Pessoa {
  getFullName(): string {
    return 'This came from the Cliente: ' + this.name + ' ' + this.lastName;
  }
}

const pessoa = new Pessoa('Pedro', 'Boni', 27, '000.000.000-00')
const aluno = new Aluno('Pedro', 'Boni', 27, '000.000.000-00', '0001')
const cliente = new Cliente('Pedro', 'Boni', 27, '000.000.000-00')

console.log(pessoa.getFullName());
console.log(aluno.getFullName());
console.log(cliente.getFullName());
console.log(aluno)
