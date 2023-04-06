import SortTester from '../../SortTester';
import insertionSort from "../insertion-sort";

describe('Тестирование алгоритма Сортировка вставками', () => {
  it('Тестирование сортировки массива с положительными числами', () => {
    SortTester.testSort(insertionSort);
  });

  it('Тестирование сортировки массива с негативными числами', () => {
    SortTester.testNegativeNumbersSort(insertionSort);
  });
});
