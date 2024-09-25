/*
*/
type Veiculo = {
  marca: string;
  ano: string;
}

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string
};

// funcao construtora que cria um carro para nós
function createCar(brand: string, year: string, name: string): Car {
  return { brand, year, name };
}

const carro: Car = {
  brand: 'Ford',
  year: '2020',
  name: 'Nome',
};

console.log(carro);


/*
Por que eu não poderia utilizar const carro = new Car('Ford', '2020', 'Nome'); ?

Por que Car é um type, não uma class. quando utilizamos 'new' estamos chamando o constructor da classe. Veja a seguir:

class Car {
  brand: string;
  year: string;
  name: string;

  constructor(brand: string, year: string, name: string) {
    this.brand = brand;
    this.year = year;
    this.name = name;
  }
}

const carro = new Car('Ford', '2020', 'Nome');
*/

////////////////////////////////////////////////////////

/*
E se eu quisesse utilizar classes E os types criados?

type Veiculo = {
  marca: string;
  ano: string;
};

class Car {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;

  constructor(brand: Veiculo['marca'], year: Veiculo['ano'], name: string) {
    this.brand = brand;
    this.year = year;
    this.name = name;
  }

  displayInfo(): void {
    console.log(`Marca: ${this.brand}, Ano: ${this.year}, Nome: ${this.name}`);
  }
}

const carro = new Car('Ford', '2020', 'Nome');
carro.displayInfo();

OU

type Veiculo = {
  marca: string;
  ano: string;
};

class Car {
  private veiculo: Veiculo;
  name: string;

  constructor(veiculo: Veiculo, name: string) {
    this.veiculo = veiculo;
    this.name = name;
  }

  displayInfo(): void {
    console.log(`Marca: ${this.veiculo.marca}, Ano: ${this.veiculo.ano}, Nome: ${this.name}`);
  }
}

const veiculoData: Veiculo = { marca: 'Ford', ano: '2020' };
const carro = new Car(veiculoData, 'Nome');
carro.displayInfo();
*/

/*

Utilizando tipos com herança e espelhamento de chaves:

type Veiculo = {
  marca: string;
  ano: string;
};

type CarroEsportivo = Veiculo & {
  potencia: number;
};

class Car {
  brand: string;
  year: string;

  constructor(veiculo: Veiculo) {
    this.brand = veiculo.marca;
    this.year = veiculo.ano;
  }
}

class SportsCar extends Car {
  power: number;

  constructor(veiculo: CarroEsportivo) {
    super(veiculo);
    this.power = veiculo.potencia;
  }

  displayInfo(): void {
    console.log(`Marca: ${this.brand}, Ano: ${this.year}, Potência: ${this.power} HP`);
  }
}

const esportivo = { marca: 'Ferrari', ano: '2022', potencia: 670 };
const carroEsportivo = new SportsCar(esportivo);
carroEsportivo.displayInfo();
console.log(carroEsportivo);

*/

/*
Note que é preciso explicitar as propriedades que o objeto (a classe) terá (me refiro as atribuiçoes antes do constructor). Pois é a partir dessas propriedades que o constructor consegue se localizar e atribuir valores a essas propriedades. (lembre que você pode utilizar os modificadores de acesso no constructor. Assim o TS já entende que aquilo são propriedades do objeto da classe.)
*/
