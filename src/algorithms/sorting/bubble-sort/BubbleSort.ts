import Sort from "../Sort";

export default class BubbleSort implements Sort {
  public sort(array: number[]): void {
    for (let partIndex = array.length - 1; partIndex > 0; partIndex--) {
      for (let i = 0; i < partIndex; i++) {
        if (BubbleSort.comparator(array[i], array[i + 1]) > 0) {
          BubbleSort.swap(array, i, i + 1);
        }
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
