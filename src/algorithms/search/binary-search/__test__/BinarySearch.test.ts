import BinarySearch from '../BinarySearch';

describe('Тестирование функции бинарного поиска числа в массиве', () => {
  it('Поиск числа в массиве, методом бинарного поиска', () => {
    expect(BinarySearch.search([], 1)).toBe(-1);
    expect(BinarySearch.search([1], 1)).toBe(0);
    expect(BinarySearch.search([1, 2], 1)).toBe(0);
    expect(BinarySearch.search([1, 2], 2)).toBe(1);
    expect(BinarySearch.search([1, 5, 10, 12], 1)).toBe(0);
    expect(BinarySearch.search([1, 5, 10, 12, 14, 17, 22, 100], 17)).toBe(5);
    expect(BinarySearch.search([1, 5, 10, 12, 14, 17, 22, 100], 1)).toBe(0);
    expect(BinarySearch.search([1, 5, 10, 12, 14, 17, 22, 100], 100)).toBe(7);
  });
});