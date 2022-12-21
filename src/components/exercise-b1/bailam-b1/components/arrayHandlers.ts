export function countChiaHetCho3(numbers: number[]): number {
  const filter = numbers.filter((number) => number % 3 === 0);
  return filter.length;
}

export function sum(numbers: number[]): number {
  const reduce = numbers.reduce((sum, number) => sum + number, 0);
  return reduce;
}

export function hasNumber10(numbers: number[]): boolean {
  const find = numbers.find((number) => number === 10);
  return find ? true : false;
}

export function filterChiaHetCho7(numbers: number[]): number[] {
  const filterList = numbers.filter((number) => number % 7 === 0);
  return filterList;
}
