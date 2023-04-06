/** Функция для бинарного поиска элемента в массиве */
export default function binarySearch(array: number[], wanted: number): number {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if ((array[middle] - wanted) === 0) return middle;

    if ((array[middle] - wanted) < 0) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }

  return -1;
}
