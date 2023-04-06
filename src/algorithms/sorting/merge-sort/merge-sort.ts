/** Функция алгоритма сортировка слиянием */
export default function mergeSort(array: number[]): number[] {
  /** Если в массиве один или меньше элементов */
  if (array.length <= 1) return array;

  /** Получаем средний элемент в массиве */
  const middle = Math.floor(array.length / 2);

  /** Разбиваем массив на два по среднему элементу */
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);

  /** Вызываем функцию слияния с рекурсивным вызовом сортировки с массивами */
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

/** Функция слияния отсортированных массивов */
function merge(firstArray: number[], secondArray: number[]): number[] {
  /** Выделяем в памяти новый массив */
  const sortedArray: number[] = [];

  /** Объявили указатели для слияния двух массивов */
  let i = 0; let j = 0;

  /** Цикл работает пока указатели не пройдут по массивам */
  while (i < firstArray.length && j < secondArray.length) {
    sortedArray.push(
        /** Сравниваем элементы из двух массивов и кладем в новый то, которое меньше */
        firstArray[i] < secondArray[j] ? firstArray[i++] : secondArray[j++],
    );
  }

  /** Возвращаем отсортированный массив плюс оставшиеся элементы от указателей */
  return [...sortedArray, ...firstArray.slice(i), ...secondArray.slice(j)];
}