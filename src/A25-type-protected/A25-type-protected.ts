export class Empresa {
  public readonly name: string // poderia inicializar o atributo da classe assim: = 'Evil Corp Limitada';
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  // ou utilizando constructors
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj
  }

  addColab(colab: Colaborador): void {
    this.colaboradores.push(colab);
  }

  showColabs(): void {
    for (const colab of this.colaboradores) {
      console.log('nome', colab.nome);
      console.log('sobrenome', colab.sobrenome);
    }
  }
}

export class Udemy extends Empresa {

  constructor() {
    super('Udemy', '11.111.111/0001-11')
  }

  popColab(): Colaborador | null {
    const colab = this.colaboradores.pop();
    if (colab) return colab
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {

  }
}

const colab1 = new Colaborador('Pedro', 'Boni');
const colab2 = new Colaborador('Wagner', 'Boni');
const colab3 = new Colaborador('Luis', 'Boni');
const empresa1 = new Udemy();
empresa1.addColab(colab1);
empresa1.addColab(colab2);
empresa1.addColab(colab3);
empresa1.addColab({
  nome: 'Angelo',
  sobrenome: 'Boni'
})
console.log(empresa1)
const removedColab = empresa1.popColab();
console.log(removedColab);
console.log(empresa1);
