import Sort from "../Sort";

export default class MergeSort extends Sort {
  public static sort(array: number[]): number[] {
    if (array.length <= 1) return array;

    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    return MergeSort.merge(MergeSort.sort(leftArray), MergeSort.sort(rightArray));
  }

  private static merge(firstArray: number[], secondArray: number[]): number[] {
    const sortedArray: number[] = [];
    let i = 0; let j = 0;

    while (i < firstArray.length && j < secondArray.length) {
      sortedArray.push(
        firstArray[i] < secondArray[j] ? firstArray[i++] : secondArray[j++],
      );
    }

    return [...sortedArray, ...firstArray.slice(i), ...secondArray.slice(j)];
  }
}
