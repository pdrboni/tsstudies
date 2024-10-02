// Record
const obj1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Luiz',
  idade: 30,
}
console.log(obj1)


// Required
type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
}
type PessoaRequired = Required<PessoaProtocol>;
const obj2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Luiz',
  idade: 30,
}
console.log(obj2)


// Partial
type PessoaPartial = Partial<PessoaRequired>;
const obj3: PessoaPartial = {
  nome: 'Luiz',
}
obj3.nome = 'Pedro'
console.log(obj3)


// Readonly
type PessoaReadonly = Readonly<PessoaPartial>;
const obj4: PessoaReadonly = {
  nome: 'Luiz',
  sobrenome: 'Luiz',
  idade: 30,
}
obj4.nome = 'Pedro'
console.log(obj4)


// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;
const obj5: PessoaPick = {
  nome: 'Luiz',
  sobrenome: 'Luiz',
  //idade: 30,
}
console.log(obj5)


// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; // Vai ter todos os tipos que estão em ABC que NÃO estão em CDE. Ou seja, AB.
type TipoExtract = Extract<ABC, CDE>; // Vai ter todos os tipos em ABC que PODEM ser atribuídos em CDE. Ou seja, C.


// Exemplo MongoDB API:
// Geralmente no mongo DB temos o id com um underline na frente. Isso pode ser desinteresasnte dependendo do sistema que estamos utilizando.
// Vamos criar um sistema que transforma esse _id em apenas id.
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
}

type AccountApi = {
  id: string;
  nome: string;
  idade: number;
}

const accountMongo: AccountMongo = {
  _id: 'hd238gfd7346gf43f34f34fsdv',
  nome: 'Pedro',
  idade: 27
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// Porém concordas que há muuuuito código envolvido?? vamos fazer de uma forma mais clean.

// Aqui vamos utilizar o Pick, o Exclude e uma intersection. O Pick vai pegar o tipo modelo (esquerda) e devolver apenas os tipos no modelo que estou mandando ele devolver (direita). O Exclude, vai me dar todos os tipos em AccountMongo que NÃO estão na direita ('_id').
type AccountApi2 = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {id: string}

function mapAccount2(accountMongo: AccountMongo): AccountApi2 {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi2 = mapAccount2(accountMongo);

console.log(accountApi2);


export default 1;
