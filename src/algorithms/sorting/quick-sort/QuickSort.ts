import Sort from "../Sort";

export default class QuickSort extends Sort {
  public static sort(array: number[], left: number, right: number): number[] {
    if (array.length > 1) {
      const index = QuickSort.partition(array, left, right);
      if (QuickSort.comparator(left, index - 1) < 0) {
        QuickSort.sort(array, left, index - 1);
      }
      if (QuickSort.comparator(index, right) < 0) {
        QuickSort.sort(array, index, right);
      }
    }
    return array;
  }

  private static partition(array: number[], start: number, end: number): number {
    const pivot = array[Math.floor((start + end) / 2)];

    while (start <= end) {
      while (QuickSort.comparator(array[start], pivot) < 0) {
        start++;
      }
      while (QuickSort.comparator(array[end], pivot) > 0) {
        end--;
      }
      if (QuickSort.comparator(start, end) <= 0) {
        QuickSort.swap(array, start, end);
        start++;
        end--;
      }
    }
    return start;
  }

  private static swap(array: number[], i: number, j: number): void {
    [array[i], array[j]] = [array[j], array[i]];
  }

  private static comparator(a: number, b: number): number {
    return a - b;
  }
}
