/** Тип одного элемента односвязного списка */
export interface ILinkedListNode<T> {
  /** Полезная нагрузка */
  value: T;
  /** Указатель на следующий элемент */
  next: ILinkedListNode<T> | null;
  /** Метод приведения элемента к строке */
  toString: (callback?: (value: T) => string) => string;
}

/** Элемент односвязного списка */
export default class LinkedListNode<T> implements ILinkedListNode<T> {
  /** Полезная нагрузка */
  public value: T;
  /** Указатель на следующий элемент */
  public next: ILinkedListNode<T> | null;

  constructor(value: T, next: ILinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  /** Метод приведения элемента к строке */
  public toString(callback?: (value: T) => string): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
