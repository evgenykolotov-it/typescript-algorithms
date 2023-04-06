/** Функция алгоритма сортировка подсчетом */
export default function countingSort(array: number[]): number[] {
  /** Если в массиве один или меньше элементов */
  if (array.length <= 1) return array;

  /** Объявление указателей min и max */
  let minimum = array[0];
  let maximum = array[0];

  /** Высчитываем максимальный и минимальный указатель */
  for (let i = 0; i < array.length; i++) {
      if (array[i] > maximum) maximum = array[i];
      if (array[i] < minimum) minimum = array[i];
  }

  /** Выделяем в памяти новый массив с расчетной длиной */
  const bucket = new Array(maximum - minimum + 1).fill(0);

  /**
   * Заполняем новый массив значениями, где индекс соответствует
   * числу из базового класса минус значение указателя minimum
   * */
  for (let i = 0; i < array.length; i++) {
    bucket[array[i] - minimum]++;
  }

  /** Освобождаем память от базового массива */
  array.length = 0;

  /**
   * Заполняем входящий массив значениями из bucket, где индекс это
   * число, а значение это количество цифр подряд, которые нужно заполнить
   * */
  for (let i = 0; i < bucket.length; i++) {
    const count = bucket[i];
    for (let j = 0; j < count; j++) {
      array.push(i + minimum);
    }
  }

  return array;
}