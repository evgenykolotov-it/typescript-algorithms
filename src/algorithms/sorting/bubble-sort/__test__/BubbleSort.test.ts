import BubbleSort from '../BubbleSort';
import SortTester from '../../SortTester';

describe('Тестирование алгоритма Пузырькова сортировка', () => {
  it('Тестирование сортировки массива с положительными числами', () => {
    SortTester.testSort(BubbleSort);
  });

  it('Тестирование сортировки массива с негативными числами', () => {
    SortTester.testNegativeNumbersSort(BubbleSort);
  });
});