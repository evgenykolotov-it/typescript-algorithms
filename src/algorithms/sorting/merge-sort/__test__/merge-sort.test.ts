import mergeSort from '../merge-sort';
import SortTester from '../../SortTester';

describe('Тестирование алгоритма сортировка слиянием', () => {
  it('Тестирование сортировки массива с положительными числами', () => {
    SortTester.testSort(mergeSort);
  });

  it('Тестирование сортировки массива с негативными числами', () => {
    SortTester.testNegativeNumbersSort(mergeSort);
  });
});