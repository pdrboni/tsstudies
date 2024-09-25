type Person1 = {
  name: string;
};

interface Person2 {
  name: string;
};

interface Person2 {
  lastName: string;
  readonly enderecos: readonly string[];
};

const pessoa: Person2 = {
  name: 'Luiz',
  lastName: 'Otavio',
  enderecos: ['Av.Brasil', 'Rua Nova']
}

//pessoa.enderecos.push('Rua Velha')
console.log(pessoa)
