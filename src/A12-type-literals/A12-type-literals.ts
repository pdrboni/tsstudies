let x = 10;
x = 0b1010;
const y = 10;
const a = 100;

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: `Boni`,
};

function escolhaCor(cor: `Vermelho` | 'Amarelo' | `Azul`): string {
  return cor;
}

console.log(typeof escolhaCor('Vermelho'));

export default 1
