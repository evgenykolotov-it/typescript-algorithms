import Sort from "../Sort";

export default class SelectionSort extends Sort {
  public static sort(array: number[]): void {
    for (let partIndex = array.length - 1; partIndex > 0; partIndex--) {
      let largestAt = 0;
      for (let i = 0; i <= partIndex; i++) {
        if (SelectionSort.comparator(array[i], array[largestAt]) > 0) {
          largestAt = i;
        }
      }
      SelectionSort.swap(array, largestAt, partIndex);
    }
  }

  private static swap(array: number[], i: number, j: number): void {
    [array[i], array[j]] = [array[j], array[i]];
  }

  private static comparator(a: number, b: number): number {
    return a - b;
  }
}
