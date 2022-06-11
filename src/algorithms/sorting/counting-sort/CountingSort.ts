import Sort from "../Sort";

export default class CountingSort extends Sort {
  public static sort(array: number[]): void {
    if (array.length <= 1) return;

    let minimum = array[0];
    let maximum = array[0];

    for (let i = 0; i < array.length; i++) {
      if (array[i] > maximum) maximum = array[i];
      if (array[i] < minimum) minimum = array[i];
    }

    const bucket = new Array(maximum - minimum + 1).fill(0);
    for (let i = 0; i < array.length; i++) {
      bucket[array[i] - minimum]++;
    }
    array.length = 0;
    for (let i = 0; i < bucket.length; i++) {
      const count = bucket[i];
      for (let j = 0; j < count; j++) {
        array.push(i + minimum);
      }
    }
  }
}

// const reverse_array = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// CountingSort.sort(reverse_array);
// console.log(reverse_array);