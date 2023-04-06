/** Функция алгоритма быстрая сортировка */
export default function quickSort(array: number[], left: number, right: number): number[] {
  if (array.length > 1) {
    const index = partition(array, left, right);
      if (left - (index - 1) < 0) {
        quickSort(array, left, index - 1);
      }
      if (index - right < 0) {
        quickSort(array, index, right);
      }
  }
  return array;
}

/** Функция получения разделителя */
function partition(array: number[], start: number, end: number): number {
  /** Получение среднего элемента в массиве */
  const pivot = array[Math.floor((start + end) / 2)];

  while (start <= end) {
    /** Вычисление указателя на минимальный элемент относительно среднего */
    while (array[start] - pivot < 0) {
      start++;
    }
    /** Вычисление указателя на максимальный элемент относительно среднего */
    while (array[end] - pivot > 0) {
      end--;
    }
    /** Проверяем не пересеклись ли указатели и перемещаем местами */
    if (start - end <= 0) {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end--;
    }
  }
  return start;
}