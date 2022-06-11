import QuickSort from '../QuickSort';
import SortTester from '../../SortTester';

describe('Тестирование алгоритма  быстрая сортировка', () => {
  it('Тестирование сортировки массива с положительными числами', () => {
    SortTester.testReturnsSort(QuickSort);
  });
});
