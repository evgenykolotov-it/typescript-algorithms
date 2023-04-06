import linearSearch from '../linear-search';

describe('Тестирование функции линейного поиска числа в массиве', () => {
  it('Поиск числа в массиве, методом линейного поиска', () => {
    const array = [1, 2, 4, 6, 2];
    expect(linearSearch(array, 10)).toBe(-1);
    expect(linearSearch(array, 1)).toBe(0);
    expect(linearSearch(array, 2)).toBe(1);
  });
});
