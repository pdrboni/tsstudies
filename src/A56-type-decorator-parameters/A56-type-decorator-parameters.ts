function decorador(classPrototype: any, nomeMethod: string | symbol, index: number): any {
  console.log(
    classPrototype,
    nomeMethod,
    index
  );
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  method(@decorador msg: string): string  {
    return `${this.nome} está dizendo ${msg}`
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Pedro', 'Boni', 30);
const metodo = pessoa.method('Eu sou bonito');

console.log(metodo)
