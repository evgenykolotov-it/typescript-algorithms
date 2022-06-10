import Sort from "./Sort";

export default class SortTester {
  private static readonly sorted_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  private static readonly negative_sorted_array = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];

  public static testSort(SortingClass: typeof Sort): void {
    const arr: number[] = [];
    SortingClass.sort(arr);
    expect(arr).toEqual([]);

    const arr1 = [1];
    SortingClass.sort(arr1);
    expect(arr1).toEqual([1]);

    const arr2 = [1, 2];
    SortingClass.sort(arr2);
    expect(arr2).toEqual([1, 2]);

    const arr3 = [2, 1];
    SortingClass.sort(arr3);
    expect(arr3).toEqual([1, 2]);

    const arr4 = [3, 4, 2, 1, 0, 0, 4, 3, 4, 2];
    SortingClass.sort(arr4);
    expect(arr4).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);

    const sorted_array = [...SortTester.sorted_array];
    SortingClass.sort(sorted_array);
    expect(sorted_array).toEqual(SortTester.sorted_array);

    const reverse_array = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    SortingClass.sort(reverse_array);
    expect(reverse_array).toEqual(SortTester.sorted_array);

    const not_sorted_array = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
    SortingClass.sort(not_sorted_array);
    expect(not_sorted_array).toEqual(SortTester.sorted_array);
  }

  public static testNegativeNumbersSort(SortingClass: typeof Sort) {
    const negative_array = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
    SortingClass.sort(negative_array);
    expect(negative_array).toEqual(SortTester.negative_sorted_array);
  }

  public static testReturnsSort(SortingClass: typeof Sort) {
    const arr: number[] = [];
    expect(SortingClass.sort(arr)).toEqual([]);

    const arr1 = [1];
    expect(SortingClass.sort(arr1)).toEqual([1]);

    const arr2 = [1, 2];
    expect(SortingClass.sort(arr2)).toEqual([1, 2]);

    const arr3 = [2, 1];
    expect(SortingClass.sort(arr3)).toEqual([1, 2]);

    const arr4 = [3, 4, 2, 1, 0, 0, 4, 3, 4, 2];
    expect(SortingClass.sort(arr4)).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);

    const sorted_array = [...SortTester.sorted_array];
    expect(SortingClass.sort(sorted_array)).toEqual(SortTester.sorted_array);

    const reverse_array = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(SortingClass.sort(reverse_array)).toEqual(SortTester.sorted_array);

    const not_sorted_array = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
    expect(SortingClass.sort(not_sorted_array)).toEqual(SortTester.sorted_array);

    const negative_array = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
    expect(SortingClass.sort(negative_array)).toEqual(SortTester.negative_sorted_array);
  }
}
