// fazendo a classe Animal decorar a funcao decoradora, estamos passando o constructor a classe animal como parametro para a funcao decorator.
@decorator
export class Animal {
  constructor(public cor: string, public name: string) {}
}

// Decorators e classe fingem ser a sua classe. Eles decoram a forma da sua classe. Recebem como parametro a classe que voce quer decorar. A funcao decoradora espra receber o contructor da classe, por isso precisamos tipar O CONTRUTOR da classe. Para fazer isso, colocamos um NEW antes da funcao construtora:

// aqui abaixo, é uma funcao decoradora
function decorator<T extends new (...args: any[]) => any>(target: T) {
  //console.log('OI DO DECORATOR')
  //return target;

  //no codigo abaixo vamos operar na classe que estamos passando para a funcao:
  return class extends target {
    name: string;
    cor: string
    //como estamos extendendo uma classe, precisamos receber os argumentos do super.
    constructor(...args: any[]) {
      super(...args);
      //this.cor = 'Qualquer coisa';
      this.cor = this.inverse(args[1]);
      this.name = this.inverse(args[0]);
    }

    inverse(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}


// Agora que construímos nossa função decoradora, não precisamos escrever esse código abaixo. podemos fazer a nossa própria classe Animal decorar a funcao decoradora.
//const AnimalDecorated = decorator(Animal);
//const animal = new AnimalDecorated('Cachorro','roxo');
//console.log(animal);

const animal = new Animal('Cachorro','roxo');
console.log(animal);

