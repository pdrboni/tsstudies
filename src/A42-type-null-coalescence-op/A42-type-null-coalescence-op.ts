type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
}

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  //data: new Date(),
}

// se a nossa operação der null ou undefined, com ?? o lado direito é executado:
console.log(documento.data?.toDateString() ?? 'vishi, nao existe data');
console.log(null ?? 'vishi, nao existe data');
console.log(undefined ?? 'vishi, nao existe data');
console.log(false ?? 'vishi, nao existe data');
console.log(0 ?? 'vishi, nao existe data');
console.log('' ?? 'vishi, nao existe data');
