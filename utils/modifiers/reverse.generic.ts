export function reverse<T>(items: T[]): T[] {
  const toReturn: T[] = [];

  for(let i: number = items.length - 1; i>=0; i--) {
      toReturn.push(items[i]);
  }
  return toReturn;
}