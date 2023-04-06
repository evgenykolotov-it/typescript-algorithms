/** Функция алгоритма пузырьковая сортировка */
export default function bubbleSort(array: number[]): number[] {
  /** Цикл с конца для фильтрации уже отсортированных элементов */
  for (let partIdx = array.length - 1; partIdx > 0; partIdx--) {

    /** Указатель для выхода из сортировки если массив уже отсортирован */
    let noSwap = true;

    /** Цикл по элементам до уже отсортированных в массиве */
    for (let i = 0; i < partIdx; i++) {

      /** Меняем местами элементы если a больше b */
      if ((array[i] - array[i + 1]) > 0) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];

        /** Меняем указатель на false, чтобы продолжить сортировку */
        noSwap = false;
      }
    }
    /** Если указатель остался true, значит массив уже отсортирован */
    if (noSwap) return array;
  }
  return array;
}
