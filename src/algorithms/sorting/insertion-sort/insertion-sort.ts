/** Функция алгоритма сортировка вставками */
export default function insertionSort(array: number[]): number[] {
  /** Пробегаем по массиву с 1 элемента до конца */
  for (let partIndex = 1; partIndex < array.length; partIndex++) {

    /** Указатель на индекс текущего элемента в цикле */
    let current = partIndex;

    /**
     * В цикле проверяем, что текущий элемент не первый в массиве
     * и что он меньше, чем предыдущий элемент массива.
     * */
    while (
        array[current - 1] !== undefined
        && array[current] - array[current - 1] < 0
    ) {
      /** Меняем элементы местами и уменьшаем указатель на единицу */
      [array[current - 1], array[current]] = [array[current], array[current - 1]];
      current--;
    }
  }

  return array;
}
