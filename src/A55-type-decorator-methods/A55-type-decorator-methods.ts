function decorador(classPrototype: any, nomeMethod: string, descriptor: PropertyDescriptor): any {
  // descriptor.writable = false; INTERESSANTE, se eu estiver retornando algo nessa função, será o novo property descriptor. Portanto, se eu atribuir writable como false diretamente no descriptor (como no inicio desse comentário), ainda assim, posso alterar a função method pela instancia da classe (se eu estiver retornando um {}, por exemplo). se eu retornar {writable: false}, não;
  // Se eu não retornar nada e expressar descriptor.writable = false, não poderei alterar a função method pela instancia da classe. Claro, estou alterando o descriptor sem retornar um novo.
  console.log(
    classPrototype,
    nomeMethod,
    descriptor
  );
  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase(); //alterando o que a função que decorou vai retornar.
    }
  }
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

  @decorador
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
//pessoa.method = () => 'EIOEIOEIOEIO' //Alterando metodo na classe. Não vai funcionar se a descriptor do método for writable = false.
const metodo = pessoa.method('Eu sou bonito')

console.log(metodo)
