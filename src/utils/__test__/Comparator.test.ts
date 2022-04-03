import Comparator from "../Comparator";

describe('Тестирование класса Comparator', () => {
  it('Тестирование сравнения с функцией по умолчанию', () => {
    const comparator = new Comparator();
    expect(comparator.equal(0, 0)).toBe(true);
    expect(comparator.equal(0, 1)).toBe(false);
  });
  it('Тестирование сравнения с кастомной функцией', () => {
    const comparatorFunc = (a: string, b: string): boolean => a.length === b.length;
    const comparator = new Comparator(comparatorFunc);
    expect(comparator.equal('aa', 'bb')).toBe(true);
    expect(comparator.equal('aa', 'b')).toBe(false);
  });
});
