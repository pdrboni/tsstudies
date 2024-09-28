interface PessoaProtocolo<T=string, U=number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 27
}

interface PessoaProtocolo2<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno2: PessoaProtocolo2<string, number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 27
}

const aluno3: PessoaProtocolo2<number, number> = {
  nome: 123,
  sobrenome: 321,
  idade: 27
}
