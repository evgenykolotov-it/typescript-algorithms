/**
 * @type {ToStringCallback<T>}
 * Тип функции, передаваемой для преобразования списка к строке.
 */
export type ToStringCallback<T> = (value: T) => string;

/**
 * Интерфейс одного элемента однонаправленного связного списка.
 * @interface ILinkedListNode<T>
 */
export interface ILinkedListNode<T> {
  value: T;
  next: ILinkedListNode<T> | null;
  toString: (callback?: ToStringCallback<T>) => string;
}

/**
 * @class
 * @classdesc Класс, реализующий интерфейс элемента однонаправленного связного списка.
 * @implements {ILinkedListNode<T>}
 */
export default class LinkedListNode<T> implements ILinkedListNode<T> {
  public value: T;
  public next: ILinkedListNode<T> | null;

  /**
   * @constructor
   * @param {T} value - Полезные данные, содержащиеся в элементе.
   * @param {ILinkedListNode<T> | null} next - Ссылка на следующий элемент связного списка.
   */
  constructor(value: T, next: ILinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * Метод для преобразования связного списка к строке.
   * @param {ToStringCallback<T>} callback - Функция для преобразования к строке.
   * @returns {string}
   */
  public toString(callback?: ToStringCallback<T>): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
