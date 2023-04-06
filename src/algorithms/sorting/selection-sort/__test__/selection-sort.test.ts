import SortTester from '../../SortTester';
import selectionSort from '../selection-sort';

describe('Тестирование алгоритма Сортировка выборкой', () => {
  it('Тестирование сортировки массива с положительными числами', () => {
    SortTester.testSort(selectionSort);
  });

  it('Тестирование сортировки массива с негативными числами', () => {
    SortTester.testNegativeNumbersSort(selectionSort);
  });
});
