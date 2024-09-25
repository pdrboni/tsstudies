// Um carrinho de compras AGREGA produtos

export class Cart {
  private readonly products: Product[] = [];

  insertProducts(...products: Product[]): void {
    this.products.push(...products);
  }

  productsQuant(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((ac, prod, index) => ac + prod.price, 0)
  }
}

export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

const prod1 = new Product('Camiseta', 49.9);
console.log(prod1.name)

const cart = new Cart();
cart.insertProducts(prod1, prod1);
cart.insertProducts(prod1);
cart.insertProducts(prod1);
console.log(cart)
console.log(cart.productsQuant())
console.log(cart.totalValue())
