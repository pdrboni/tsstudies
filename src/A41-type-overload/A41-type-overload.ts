//type Adder = (x: number) => number
//Além de receber o x. quero que tb seja possível ela receber vários números, ou seja, fazer um overload da função.

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
}

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1))
console.log(adder(1, 2))
console.log(adder(1, 2, 3, 4))
