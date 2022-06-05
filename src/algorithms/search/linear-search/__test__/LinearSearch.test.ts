import LinearSearch from '../LinearSearch';

describe('Тестирование функции линейного поиска числа в массиве', () => {
  it('Поиск числа в массиве, методом линейного поиска', () => {
    const array = [1, 2, 4, 6, 2];
    expect(LinearSearch.search(array, 10)).toEqual([]);
    expect(LinearSearch.search(array, 1)).toEqual([0]);
    expect(LinearSearch.search(array, 2)).toEqual([1, 4]);
  });
});
