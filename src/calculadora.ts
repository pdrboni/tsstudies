import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let x: number;
let y: number;

// Ask the user for input
rl.question('Diga um número: ', (num1) => {
  x = Number(num1);

  rl.question('Diga outro número: ', (num2) => {
    y = Number(num2);

    console.log(`A soma de ${x} + ${y} é ${Number(x) + Number(y)}`);
    rl.close();  // Close the interface after both inputs
  });
});
