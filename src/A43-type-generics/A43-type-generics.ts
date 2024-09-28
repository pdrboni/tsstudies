/*
export function filtroMaiorQue(arr: number[], n: number): number[] {
  const newArray: number[] = []
  for(const num of arr) {
    if (num > n) {
      newArray.push(num);
    }
  }
  return newArray;
}
*/

//Aqui estamos utilizando tipos Generics com <T> ou <U>. Se passamos como parâmetro para a funcao myFilter um array de numbers, o TS consegue inferir, quando explicitamos que queremos usar o tipo genérico para aquele parâmetro, o tipo do parâmetro.
type FilterCallBack<U> = (
  value: U,
  index?: number,
  array?: U[],
) => boolean;

export function myFilter<T>(arr: T[], cbfunc: FilterCallBack<T>): T[] {
  const newArray = []
  for(let i = 0; i < arr.length; i++) {
    if (cbfunc(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const arrayFilterOriginal = array.filter((value) => value < 5);
console.log(arrayFilterOriginal);

const arrayFunc = myFilter(array, (value) => value < 5);
console.log(arrayFunc);

