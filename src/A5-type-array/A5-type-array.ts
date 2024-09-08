function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac*valor, 1);
}

const result = multiplicaArgs(1, 2, 3);

console.log(result)
