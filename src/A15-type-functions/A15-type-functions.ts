type MapStringsCallBack = (item: string) => string

export function mapStrings(array: string[], callbackfn: MapStringsCallBack): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];

const abcMapped = mapStrings(abc, function(item) {
  return item.toUpperCase();
})

console.log(abcMapped);
