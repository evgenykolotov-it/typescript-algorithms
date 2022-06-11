import SortTester from '../../SortTester';
import CountingSort from '../CountingSort';

describe('Тестирование алгоритма Пузырькова сортировка', () => {
  it('Тестирование сортировки массива с положительными числами', () => {
    SortTester.testSort(CountingSort);
  });

  it('Тестирование сортировки массива с негативными числами', () => {
    SortTester.testNegativeNumbersSort(CountingSort);
  });
});
