// We can pass parameters to our decorator function;
function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T) {
    console.log('Sou o decorador e recebi', target)
    //console.log('OI DO DECORATOR')
    //return target;

    //essa classe só será retornada se instanciarmos a classe.
    return class extends target {
      name: string;
      cor: string
      //como estamos extendendo uma classe, precisamos receber os argumentos do super.
      constructor(...args: any[]) {
        console.log('sou o constructor do decorator')
        super(...args);
        //this.cor = 'Qualquer coisa';
        this.cor = this.inverse(args[1]);
        this.name = this.inverse(args[0]);
      }

      inverse(value: string): string {
        return value.split('').reverse().join('') + ` ` + param1 + ` ` + param2;
      }
    };
  }
}

@inverteNomeECor('Value1', 'Value2')
export class Animal {
  constructor(public cor: string, public name: string) {
    console.log('Sou a classe');
  }
}

// Observe que antes mesmo de instanciar a classe Animal, o decorador já é chamado.



// Agora que construímos nossa função decoradora, não precisamos escrever esse código abaixo. podemos fazer a nossa própria classe Animal decorar a funcao decoradora.
//const AnimalDecorated = decorator(Animal);
//const animal = new AnimalDecorated('Cachorro','roxo');
//console.log(animal);

const animal = new Animal('Cachorro','roxo');
console.log(animal);

