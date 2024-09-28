export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

// Observe as inferencias dos tipos em caa objeto criado
const pessoa1 = new Pessoa('Luiz', 30);
const pessoa2 = new Pessoa(['Luiz'], 30);
const pessoa3 = new Pessoa(['Luiz'], {idade: 30});

// Há algum caso onde o TS NÃO consiga inferir os tipos?
// vamos implementar pilhas

export class Stack<T> {
  private counter = 0;
  private elements: {[k: number]: T} = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  pop(): T | void {
    if (this.isEmpty()) return;
    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  tamanho(): number {
    return this.counter;
  }

  mostrarPilha(): void {
    for (const key in this.elements) {
      console.log(this.elements[key])
    }
  }
}

const stack = new Stack<number | string>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push('4');
console.log('aaa', stack.tamanho());
stack.push('string');
stack.push(5);
stack.push(6);
stack.mostrarPilha();


while (!stack.isEmpty()) {
  console.log(stack.pop())
}
