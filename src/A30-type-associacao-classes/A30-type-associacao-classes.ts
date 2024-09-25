export class Escritor {

  private _ferramenta: Ferramenta | null = null;

  constructor(
    private _nome: string
  ) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  get nome(): string {
    return this._nome;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Nao posso escrever sem ferramenta...')
      return
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {

  constructor(
    private _nome: string
  ) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(this.nome + ' está escrevendo...')
  };
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(this.nome + ' está digitando...')
  };
}

const escritor = new Escritor('Pedro');
const caneta = new Caneta('Bic');
const maquina = new MaquinaEscrever('Máquina');

console.log(escritor.nome);
escritor.escrever();
console.log(caneta.nome);
escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = maquina;
escritor.escrever();
escritor.ferramenta = null;
escritor.escrever();
