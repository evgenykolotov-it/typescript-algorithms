/**
 * @type {CompareFunction}
 * Тип функции компаратора, используемой при сравнении элементов.
 */
export type CompareFunction<T> = (a: T, b: T) => boolean;

/**
 * @class
 * @classdesc Служебный класс, предоставляющий полезные функции по сравнению элементов.
 */
export default class Comparator<T = number> {
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
  public static defaultCompareFunction(a: number, b: number): boolean {
    return a - b === 0;
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
