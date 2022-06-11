import MergeSort from '../MergeSort';
import SortTester from '../../SortTester';

describe('Тестирование алгоритма сортировка слиянием', () => {
  it('Тестирование сортировки массива с положительными числами', () => {
    SortTester.testReturnsSort(MergeSort);
  });
});