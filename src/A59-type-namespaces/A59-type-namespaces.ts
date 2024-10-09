// Namespaces são módulos
namespace MyNamespace {
  export const nameFromNamespace = `pessoa`

  export class NamespacePerson {
    constructor (public name: string) {}
  }
  const person = new NamespacePerson(`Pedro`);

  console.log(person)

  export namespace OtherNamespace {
    export const nameFromOtherNamespace = "Name from OtherNamespace"
  }
}

const person = new MyNamespace.NamespacePerson(`Pedro`);

console.log(person)
console.log(person.name)
console.log(MyNamespace.nameFromNamespace)
console.log(MyNamespace.OtherNamespace.nameFromOtherNamespace)


