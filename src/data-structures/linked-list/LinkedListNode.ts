export type ToStringCallback<T> = (value: T) => string;

export interface ILinkedListNode<T> {
  value: T;
  next: ILinkedListNode<T> | null;
  toString: (callback?: ToStringCallback<T>) => string;
}

export default class LinkedListNode<T> implements ILinkedListNode<T> {
  public value: T;
  public next: ILinkedListNode<T> | null;

  constructor(value: T, next: ILinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  public toString(callback?: ToStringCallback<T>): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
