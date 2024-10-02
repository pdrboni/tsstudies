// observe o retorno da função isNumber. poderíamos colocar o retorno como um boolean, isso faria com que nossa função retornasse true ou false. Porém, estamos utilizando essa função como type guardian na funcao soma, funçao essa que recebe um array com valores de tipos genericos.
// Na funcao soma, apesar de isNumber checar se sum e value sao numeros, esses valores estao fora de isNumber, estao dentro de soma. E dentro de soma nao há nada que cheque se sum e value sao numeros.
// Para resolver isso podemos nao retornar um boolean em isNumber, mas retornar value is number. Com isso, estamos dizendo que quando o retorno for verdadeiro, value is a number.

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

//console.log(isNumber('123'))
//console.log(isNumber(123))

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0)

  return retorno;
}

console.log(soma(1, 2, 3));
console.log(soma('1', '2', '3'));
// Se passarmos os parametros como está abaixo, o TS nao consegue inferir que o tipo <T> em soma será string | number, gerando um erro.
//console.log(soma(1, 2, 3, '2'));

// Para o TS conseguir inferir que o T em soma pode ser tanto number quanto string, precisamos colocar tudo em um Array e explicitando que os tipos recebidos em soma podem ser tanto number quanto string. Assim o TS infere que os tipos dentro desse array podem ser number | string. Dizendo, assim que o T pode ser number | string.
console.log(soma<number | string>(...[1, 2, 3, 'a', 2, 2]));

