/**
 * @type {CompareFunction}
 * Тип функции компаратора, используемой при сравнении элементов.
 */
export type CompareFunction<T> = (a: T, b: T) => boolean;

/**
 * Интерфейс утилиты для сравнения элементов.
 * @interface IComparator
 */
export interface IComparator<T> {
  equal: CompareFunction<T>;
}

/**
 * @class
 * @classdesc Служебный класс, предоставляющий полезные функции по сравнению элементов.
 * @implements {IComparator}
 */
export default class Comparator<T> implements IComparator<T> {
  private compare: CompareFunction<T>;

  /**
   * @constructor
   * @param {CompareFunction} compareFunction - Функция для сравнения элементов.
   */
  constructor(compareFunction: CompareFunction<T> = Comparator.defaultCompareFunction) {
    this.compare = compareFunction;
  }

  /**
   * Реализация функции сравнения элементов по умолчанию.
   * @static
   * @param {*} a - Элемент для сравнения.
   * @param {*} b - Элемент для сравнения.
   * @returns - Результат сравнения.
   */
  public static defaultCompareFunction<T>(a: T, b: T): boolean {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b === 0;
    } else if (typeof a === 'bigint' && typeof b === 'bigint') {
      return a - b === 0n;
    }

    return a === b;
  }

  /**
   * Проверка двух элементов на равенство друг другу.
   * @param {*} a - Элемент для сравнения.
   * @param {*} b - Элемент для сравнения.
   * @returns Результат сравнения.
   */
  public equal(a: T, b: T): boolean {
    return this.compare(a, b);
  }
}
