import SortTester from '../../SortTester';
import SelectionSort from '../SelectionSort';

describe('Тестирование алгоритма Сортировка выборкой', () => {
  it('Тестирование сортировки массива с положительными числами', () => {
    SortTester.testSort(SelectionSort);
  });

  it('Тестирование сортировки массива с негативными числами', () => {
    SortTester.testNegativeNumbersSort(SelectionSort);
  });
});
