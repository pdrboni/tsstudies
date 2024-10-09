function decorador(classPrototype: any, nomeMethod: string | symbol): any {
  let valueProperty: any;
  return {
    get: () => valueProperty,
    set: (value: any) => {
      if (typeof value === 'string') {
        valueProperty = value.split('').reverse().join('');
        return;
      }
      valueProperty = value;

    },
  }
}

export class UmaPessoa {
  @decorador
  nome: string;
  @decorador
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  method(msg: string): string  {
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
const metodo = pessoa.method('Eu sou bonito')

console.log(metodo)
