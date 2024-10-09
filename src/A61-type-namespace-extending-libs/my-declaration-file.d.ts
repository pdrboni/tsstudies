// Declaration files it's all about types.

// Lets make a merge of our namespace with the namespace of lodash to make our .mul function works with the lodash lib.

declare namespace _ {
  // importamos a interface do lodash mesmo.
  // assim o TS sabe que no namespace "_" (que 'e o lodash) tem uma interface que se chama LoDashStatic (dessa forma, cada biblioteca ser'a de um jeito, será precisa estudar como está sendo feito a declaração de tipos de cada uma). E dentro da interface LoDashStatic estou criando uma funcao mul;
  interface LoDashStatic {
    mul(array: number[]): number;
    // aqui nós criamos um bla mas não assumimos um valor para ele. assim, devemos tomar cuidado pois o TS não vai reclamar por isso.
    bla: string;
  }
}

declare var MYGLOBAL: string;
