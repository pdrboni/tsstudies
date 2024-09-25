export function add(a: unknown, b: unknown) {
  return typeof a === 'number' && b === 'number' ? a+b : `${a}${b}`
}

console.log(add(1, 5));
console.log(add('b', 'a'));

type Pessoa = {tipo: 'pessoa', nome: string};
type Animal = {tipo: 'animal', cor: string};
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor (
    public nome: string
  ) {}
}

function mostraObjeto(obj: PessoaOuAnimal): void {
  //if ('nome' in obj) console.log(obj.nome);
  //if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return
    case "animal":
      console.log('isso e um animal', obj.cor);
      return
  }
}

mostraObjeto(new Aluno('Joao'));
mostraObjeto({ tipo: 'animal', cor: 'Rosa'});
