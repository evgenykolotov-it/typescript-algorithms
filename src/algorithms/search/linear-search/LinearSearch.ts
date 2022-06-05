/**
 * @class
 * @name LinearSearch
 * @classdesc Класс, реализующий алгоритм линейного поиска числа в массиве.
 */
export default class LinearSearch {
  /**
   * Метод, осуществляющий непосредственно поиск по массиву.
   * @public
   * @param {Array<number>} array - Целевой отсортивованный массив для поиска.
   * @param {number} wanted - Искомый элемент.
   * @returns {Array<number>} - Массив с найденными элементами.
   */
  public static search(array: Array<number>, wanted: number): Array<number> {
    const found: number[] = [];
    array.forEach((item, index) => {
      if (LinearSearch.comparator(item, wanted)) {
        found.push(index);
      }
    });
    return found;
  }

  /**
   * Метод для сравнения двух элементов.
   * @param {number} a - Первый элемент для сравнения.
   * @param {number} b - Второй элемент для сравнения.
   * @returns {boolean} - Равны ли элементы.
   */
  private static comparator(a: number, b: number): boolean {
    return a - b === 0;
  }
}
