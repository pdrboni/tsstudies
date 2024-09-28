export class Calculadora {
  constructor(public number: number) {}

    add(n: number): this {
      this.number += n;
      return this;
    }

    sub(n: number): this {
      this.number -= n;
      return this;
    }

    mult(n: number): this {
      this.number *= n;
      return this;
    }

    div(n: number): this {
      this.number /= n;
      return this;
    }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(10);

console.log(calculadora.add(5).mult(2).div(2).sub(5).pow(2));

// Builder - GoF
export class RequestBuilder {
  private method: 'post' | 'get' | null = null;
  private url: string | null = null;

  //aqui eu não poderia tipar o method como string pois string é um tipo mais amplo que 'get' | 'post'. Se colocássemos string, o tipo poderia ser infinitas outras coisas além de 'get' | 'post'.
  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this;
  }

  //aqui no setUrl, eu poderia utilizar 'get' | 'post' na tipagem pois 'get' | 'post' são subtipos de string.
  setUrl(url: string): this {
    this.url = url
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`)
  }
}

const request = new RequestBuilder(); //Builder
request.setUrl('https://www.google.com').setMethod('post').send();

request.setMethod('get')
request.send();
