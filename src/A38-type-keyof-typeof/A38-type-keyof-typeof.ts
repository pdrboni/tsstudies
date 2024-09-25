/*
type CoresObj = {
  vermelho: string;
  verde: string;
  azul: string;
}

const coresObj: CoresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  }
  */

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
}

export function translateColor(cor: CoresChaves, cores: CoresObj): string {
  return cores[cor];
}

console.log(translateColor('vermelho', coresObj));
console.log(translateColor('azul', coresObj));
