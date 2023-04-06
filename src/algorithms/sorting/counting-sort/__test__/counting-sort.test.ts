import SortTester from '../../SortTester';
import countingSort from '../counting-sort';

describe('Тестирование алгоритма Пузырькова сортировка', () => {
  it('Тестирование сортировки массива с положительными числами', () => {
    SortTester.testSort(countingSort);
  });

  it('Тестирование сортировки массива с негативными числами', () => {
    SortTester.testNegativeNumbersSort(countingSort);
  });
});
