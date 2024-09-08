function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Blabla',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  }
};

semRetorno('Pedro', 'Boni', 'qualquer coisa');

export {pessoa};
