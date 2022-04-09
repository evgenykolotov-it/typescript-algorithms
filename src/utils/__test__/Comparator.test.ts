import Comparator from "../Comparator";

describe('Тестирование класса Comparator', () => {
  it('Сравнение чисел, с помощью функции по умолчанию', () => {
    const comparator = new Comparator<number>();
    expect(comparator.equal(1, 1)).toBe(true);
    expect(comparator.equal(1, 2)).toBe(false);
  });

  it('Сравнение больших чисел, с помощью функции по умолчанию', () => {
    const comparator = new Comparator<bigint>();
    expect(comparator.equal(1n, 1n)).toBe(true);
    expect(comparator.equal(1n, 2n)).toBe(false);
  });

  it('Сравнение строк, с помощью функции по умолчанию', () => {
    const comparator = new Comparator<string>();
    expect(comparator.equal('aa', 'aa')).toBe(true);
    expect(comparator.equal('aa', 'bb')).toBe(false);
  });

  it('Сравнение логических значений, с помощью функции по умолчанию', () => {
    const comparator = new Comparator<boolean>();
    expect(comparator.equal(true, true)).toBe(true);
    expect(comparator.equal(false, false)).toBe(true);
    expect(comparator.equal(true, false)).toBe(false);
  });

  it('Сравнение массивов, с помощью функции по умолчанию', () => {
    const comparator = new Comparator<number[]>();
    const first = [1, 2, 3, 4, 5];
    const second = [1, 2, 3, 4, 5];
    const third = first;
    expect(comparator.equal([], [])).toBe(false);
    expect(comparator.equal([1, 2], [1, 2])).toBe(false);
    expect(comparator.equal(first, first)).toBe(true);
    expect(comparator.equal(first, third)).toBe(true);
    expect(comparator.equal(first, second)).toBe(false);
  });

  it('Сравнение объектов, с помощью функции по умолчанию', () => {
    const first_user = { name: 'Evgeny', age: 21 };
    const second_user = { name: 'Evgeny', age: 21 };
    const third_user = first_user;
    const comparator = new Comparator<typeof first_user>();
    expect(comparator.equal(first_user, first_user)).toBe(true);
    expect(comparator.equal(first_user, second_user)).toBe(false);
    expect(comparator.equal(first_user, third_user)).toBe(true);
  });

  it('Сравнение чисел, с помощью передаваемой функции', () => {
    const comparator = new Comparator<number>((a, b) => a - b === 0);
    expect(comparator.equal(1, 1)).toBe(true);
    expect(comparator.equal(1, 2)).toBe(false);
  });

  it('Сравнение больших чисел, с помощью передаваемой функции', () => {
    const comparator = new Comparator<bigint>((a, b) => a - b === 0n);
    expect(comparator.equal(1n, 1n)).toBe(true);
    expect(comparator.equal(1n, 2n)).toBe(false);
  });

  it('Сравнение строк, с помощью передаваемой функции', () => {
    const comparator = new Comparator<string>((a, b) => a === b);
    expect(comparator.equal('aa', 'aa')).toBe(true);
    expect(comparator.equal('aa', 'bb')).toBe(false);
  });

  it('Сравнение логических значений, с помощью передаваемой функции', () => {
    const comparator = new Comparator<boolean>((a, b) => a === b);
    expect(comparator.equal(true, true)).toBe(true);
    expect(comparator.equal(false, false)).toBe(true);
    expect(comparator.equal(true, false)).toBe(false);
  });

  it('Сравнение массивов, с помощью передаваемой функции', () => {
    const comparator = new Comparator<number[]>((a, b) => JSON.stringify(a) === JSON.stringify(b));
    const first = [1, 2, 3, 4, 5];
    const second = [1, 2, 3, 4];
    expect(comparator.equal([], [])).toBe(true);
    expect(comparator.equal([1, 2], [1, 2])).toBe(true);
    expect(comparator.equal(first, first)).toBe(true);
    expect(comparator.equal(first, second)).toBe(false);
  });

  it('Сравнение объектов, с помощью передаваемой функции', () => {
    const first_user = { name: 'Evgeny', age: 21 };
    const second_user = { name: 'Evgeny', age: 25 };
    const comparator = new Comparator<typeof first_user>((a, b) => JSON.stringify(a) === JSON.stringify(b));
    expect(comparator.equal(first_user, first_user)).toBe(true);
    expect(comparator.equal(first_user, second_user)).toBe(false);
  });
});
