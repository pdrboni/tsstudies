const dadosCliente1: [number, string] = [1, 'Pedro'];
const dadosCliente2: [number, string?] = [1];
const dadosCliente3: [number, string, ...string[]] = [1, 'Pedro', 'Boni', 'Gasparotto'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Pedrooo'

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
