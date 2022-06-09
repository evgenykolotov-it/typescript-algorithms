import Sort from "../Sort";

export default class InsertionSort extends Sort {
  public static sort(array: number[]): void {
    for (let partIndex = 1; partIndex < array.length; partIndex++) {
      let current = partIndex;
      while (
        array[current - 1] !== undefined
        && InsertionSort.comparator(array[current], array[current - 1]) < 0
      ) {
        InsertionSort.swap(array, current - 1, current);
        current--;
      }
    }
  }

  private static swap(array: number[], i: number, j: number): void {
    [array[i], array[j]] = [array[j], array[i]];
  }

  private static comparator(a: number, b: number): number {
    return a - b;
  }
}
