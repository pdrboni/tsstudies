// classes abstratas funcionam apenas como um molde. vc não pode instanciar uma classe abstrata, apenas instanciar classes concretas que extendem a classe abstrata.
export abstract class Personagem {

  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.nome} atacou ${personagem.nome}`)
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida`)
  }

  // um método abstrato faz com que vc precise sobrescrever em cada subclasse.
  abstract bordao(): void;
}

export class Guerreira extends Personagem {

  protected emoji = '\u{1F9DD}';

  bordao(): void {
      console.log(this.emoji + 'ATAQUE DA GUERREIRAAAAAA')
  }
};
export class Monstro extends Personagem {

  protected emoji= '\u{1F9DF}';

  bordao(): void {
      console.log(this.emoji + 'RAAAAAAAAAAWRRRRRR MONSTERRRRR!!!')
  }
};


const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 50, 500);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
