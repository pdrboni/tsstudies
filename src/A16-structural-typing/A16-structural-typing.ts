type VerifyUser = (username: User, sentValue: User) => boolean;
type User = { username: string, password: string };

const verifyUser: VerifyUser = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: `joao`, password: `123456` };
const sentUser = { username: `joao`, password: `123456` };

const isLoggedIn = verifyUser(bdUser, sentUser);

console.log(isLoggedIn);

// O TS utiliza uma coisa chamada Structural Typing. Perceba que em nenhum momento passamos o tipo de bdUser ou sentUser. Por que nao deu erro? Pois o TS identifica que em bdUser e sentUser, há a existência de uma chave username e password como strings. O TS olha para a estrutura de bdUser e sentUser, se a estrutura bate com as regras do tipo User, não dará erro. Inclusive poderíamos adicionar mais chaves em bdUser ou sentUser. Mantendo username e password como strings não dará erro.
