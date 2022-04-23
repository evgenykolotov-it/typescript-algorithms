/**
 * @type {ToStringCallback}
 * Тип функции, передаваемой для преобразования списка к строке.
 */
export type ToStringCallback<T> = (value: T) => string;

/**
 * @interface ILinkedListNode
 * Интерфейс одного элемента однонаправленного связного списка.
 */
export interface ILinkedListNode<T> {
  value: T;
  next: ILinkedListNode<T> | null;
  toString: (callback?: ToStringCallback<T>) => string;
}

/**
 * @class
 * @classdesc Класс, реализующий интерфейс элемента однонаправленного связного списка.
 * @implements {ILinkedListNode}
 */
export default class LinkedListNode<T> implements ILinkedListNode<T> {
  public value: T;
  public next: ILinkedListNode<T> | null;

  /**
   * @constructor
   * @param {*} value - Полезные данные, содержащиеся в элементе.
   * @param {ILinkedListNode | null} next - Ссылка на следующий элемент связного списка.
   */
  constructor(value: T, next: ILinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * Метод для преобразования связного списка к строке.
   * @param {ToStringCallback} callback - Функция для преобразования к строке.
   * @returns {string}
   */
  public toString(callback?: ToStringCallback<T>): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
