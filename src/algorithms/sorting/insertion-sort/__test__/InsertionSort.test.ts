import SortTester from '../../SortTester';
import InsertionSort from '../InsertionSort';

describe('Тестирование алгоритма Сортировка вставками', () => {
  it('Тестирование сортировки массива с положительными числами', () => {
    SortTester.testSort(InsertionSort);
  });

  it('Тестирование сортировки массива с негативными числами', () => {
    SortTester.testNegativeNumbersSort(InsertionSort);
  });
});
