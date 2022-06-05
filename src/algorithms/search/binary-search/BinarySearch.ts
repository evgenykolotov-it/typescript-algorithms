export default class BinarySearch {
  public static search(array: number[], wanted: number): number {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
      const middle = Math.floor((start + end) / 2);
      if (BinarySearch.comparator(array[middle], wanted) === 0) {
        return middle;
      }
      if (BinarySearch.comparator(array[middle], wanted) < 0) {
        start = middle + 1;
      } else {
        end = middle;
      }
    }

    return -1;
  }

  private static comparator(a: number, b: number): number {
    return a - b;
  }
}
