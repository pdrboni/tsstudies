type Age = number;
type Person = {
  nome: string,
  idade: Age,
  salario: number,
  corPreferida?: string;
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Person = {
  idade: 27,
  nome: `Pedro`,
  salario: 10_000,
};

export function setPreferedColor(person: Person, cor: CorPreferida): Person {
  return {...person, corPreferida: cor};
}

console.log(setPreferedColor(pessoa, `Azul`));
