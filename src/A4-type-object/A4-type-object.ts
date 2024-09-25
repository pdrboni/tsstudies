const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

//objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Outro valor ainda';
objetoA.chaveD = 'Outro valor ainda ainda';

console.log(objetoA.chaveD);
