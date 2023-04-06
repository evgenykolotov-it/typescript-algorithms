/** Функция алгоритма сортировка вставками */
export default function selectionSort(array: number[]): number[] {
  /** Цикл с конца для фильтрации уже отсортированных элементов */
  for (let partIdx = array.length - 1; partIdx > 0; partIdx--) {

    /** Указатель на индекс самого большого элемента */
    let largestAt = 0;

    /** Цикл по элементам до уже отсортированных в массиве */
    for (let i = 0; i <= partIdx; i++) {

      /** Проверяем больше ли текущий элемент, чем элемент в указателе */
      if (array[i] - array[largestAt] > 0) {
        largestAt = i;
      }
    }
    /** Меняем местами самый большой с текущим индексом */
    [array[largestAt], array[partIdx]] = [array[partIdx], array[largestAt]];
  }
  return array;
}