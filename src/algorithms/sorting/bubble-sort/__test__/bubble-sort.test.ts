import bubbleSort from '../bubble-sort';
import SortTester from '../../SortTester';

describe('Тестирование алгоритма Пузырькова сортировка', () => {
  it('Тестирование сортировки массива с положительными числами', () => {
    SortTester.testSort(bubbleSort);
  });

  it('Тестирование сортировки массива с негативными числами', () => {
    SortTester.testNegativeNumbersSort(bubbleSort);
  });
});
