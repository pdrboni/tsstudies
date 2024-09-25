// Métodos ou atributos estáticos são aqueles que vc não precisa instanciar a classe para ter acesso a eles. não precisa criar uma pessoa para acessar os metodos ou atributos.

export class Pessoa {

  static standardAge = 0;
  static standardCpf = '000.000.000-44'

  public readonly name: string;
  public lastName: string;
  public readonly age: number;
  public cpf: string;

  constructor(name: string, lastName: string, age: number, cpf: string) {
    this.name = name;
    this.cpf = cpf;
    this.lastName = lastName;
    this.age = age;
  }

  static criaPessoa(name: string, lastName: string): Pessoa {
    return new Pessoa(name, lastName, Pessoa.standardAge, Pessoa.standardCpf);
  }
}

const pessoa = new Pessoa('Pedro', 'Boni', 27, '000.000.000-00')
pessoa.lastName = 'Gasparotto'

const pessoa2 = Pessoa.criaPessoa('Luiz', 'Miranda');

console.log(pessoa)
console.log(pessoa2)
