export function func(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

func.call(new Date(), 'Pedro', 27);
func.apply(new Date(), ['Pedro', 27])
