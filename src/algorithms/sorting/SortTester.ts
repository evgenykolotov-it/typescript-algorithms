export default class SortTester {
  private static readonly sorted_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  private static readonly negative_sorted_array = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];

  public static testSort(sort: (array: number[]) => number[]): void {
    const arr: number[] = [];
    expect(sort(arr)).toEqual([]);

    const arr1 = [1];
    expect(sort(arr1)).toEqual([1]);

    const arr2 = [1, 2];
    expect(sort(arr2)).toEqual([1, 2]);

    const arr3 = [2, 1];
    expect(sort(arr3)).toEqual([1, 2]);

    const arr4 = [3, 4, 2, 1, 0, 0, 4, 3, 4, 2];
    expect(sort(arr4)).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);

    const sorted_array = [...SortTester.sorted_array];
    expect(sort(sorted_array)).toEqual(SortTester.sorted_array);

    const reverse_array = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(sort(reverse_array)).toEqual(SortTester.sorted_array);

    const not_sorted_array = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
    expect(sort(not_sorted_array)).toEqual(SortTester.sorted_array);
  }

  public static testNegativeNumbersSort(sort: (array: number[]) => number[]) {
    const negative_array = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
    expect(sort(negative_array)).toEqual(SortTester.negative_sorted_array);
  }

  public static testReturnsSort(sort: (array: number[], a: number, b: number) => number[]) {
    const arr: number[] = [];
    expect(sort(arr, 0, arr.length - 1)).toEqual([]);

    const arr1 = [1];
    expect(sort(arr1, 0, arr1.length - 1)).toEqual([1]);

    const arr2 = [1, 2];
    expect(sort(arr2, 0, arr2.length - 1)).toEqual([1, 2]);

    const arr3 = [2, 1];
    expect(sort(arr3, 0, arr3.length -1)).toEqual([1, 2]);

    const arr4 = [3, 4, 2, 1, 0, 0, 4, 3, 4, 2];
    expect(sort(arr4, 0, arr4.length - 1)).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);

    const sorted_array = [...SortTester.sorted_array];
    expect(sort(sorted_array, 0, sorted_array.length - 1)).toEqual(SortTester.sorted_array);

    const reverse_array = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(sort(reverse_array, 0, reverse_array.length - 1)).toEqual(SortTester.sorted_array);

    const not_sorted_array = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
    expect(sort(not_sorted_array, 0, not_sorted_array.length - 1)).toEqual(SortTester.sorted_array);

    const negative_array = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
    expect(sort(negative_array, 0, negative_array.length - 1)).toEqual(SortTester.negative_sorted_array);
  }
}
