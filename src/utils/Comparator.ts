/**
 * @type {CompareFunction}
 * Тип функции компаратора, используемой при сравнении элементов.
 */
export type CompareFunction<T> = (a: T, b: T) => number;

/**
 * @class
 * @classdesc Служебный класс, предоставляющий полезные функции по сравнению элементов.
 */
export default class Comparator<T> {
  private compare: CompareFunction<T>;

  /**
   * @constructor
   * @param {CompareFunction} compareFunction - Функция для сравнения элементов.
   */
  constructor(compareFunction: CompareFunction<T> = (<unknown>Comparator.defaultCompareFunction) as CompareFunction<T>) {
    this.compare = compareFunction;
  }

  /**
   * Реализация функции сравнения элементов по умолчанию.
   * @static
   * @param {number} a - Элемент для сравнения.
   * @param {number} b - Элемент для сравнения.
   * @returns - Результат сравнения.
   */
  public static defaultCompareFunction<T>(a: number, b: number): number {
    if (a - b === 0) return 0;
    return a < b ? -1 : 1
  }

  /**
   * Проверка двух элементов на равенство друг другу.
   * @param {*} a - Элемент для сравнения.
   * @param {*} b - Элемент для сравнения.
   * @returns Результат сравнения.
   */
  public equal(a: T, b: T): boolean {
    return this.compare(a, b) === 0;
  }
}
