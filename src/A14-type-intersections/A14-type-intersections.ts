type HasName = { name: string };
type HasLastName = { lastname: string };
type HasAge = { age: number };

// Using union types, you have the possibility to NOT atribute the name, age, etc. So it's recommended to use intersection types (&).
// type Person = HasAge | HasLastName | HasName;

type Person = HasAge & HasLastName & HasName;

const pessoa: Person = {
  age: 27,
  name: 'Pedro',
  lastname: 'Boni',
};

console.log(pessoa);

type AB = `A` | `B`;
type AC = `A` | `C`;
type AD = `D` | `A`;
type Intersection = AB & AC & AD;

export {}
