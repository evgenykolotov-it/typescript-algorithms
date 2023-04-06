import LinkedListNode, { ILinkedListNode } from "./LinkedListNode";

/** Тип односвязного списка */
export interface ILinkedList<T> {
  /** Добавление элемента в список */
  append: (value: T) => ILinkedList<T>;
  /** Удаление элемента из списка */
  remove: (callback: (node: T) => boolean) => ILinkedList<T>;
  /** Поиск элемента в списке */
  search: (callback: (node: T) => boolean) => ILinkedListNode<T> | null;
  /** Приведение списка к массиву */
  toArray: () => ILinkedListNode<T>[];
  /** Приведение списка к строке */
  toString: (callback?: (value: T) => string) => string;
}

/** Структура данных "Односвязный список" */
export default class LinkedList<T> implements ILinkedList<T> {
  /** Указатель на начало списка */
  private head: ILinkedListNode<T> | null = null;
  /** Указатель на конец списка */
  private tail: ILinkedListNode<T> | null = null;

  /** Добавление элемента в конец списка */
  public append(value: T): ILinkedList<T> {
    const node = new LinkedListNode<T>(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      (this.tail as ILinkedListNode<T>).next = node;
      this.tail = node;
    }
    return this;
  }

  /** Удаление элемента из списка */
  public remove(callback: (node: T) => boolean): ILinkedList<T> {
    if (!this.head) return this;
    while(this.head && callback(this.head.value)) {
      this.head = this.head.next;
    }
    let current: ILinkedListNode<T> | null = this.head;
    while(current?.next) {
      if (callback(current.next.value)) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    return this;
  }

  /** Поиск элемента в списке */
  public search(callback: (node: T) => boolean): ILinkedListNode<T> | null {
    if (!this.head) return null;
    let current: ILinkedListNode<T> | null = this.head;
    while (current) {
      if (callback(current.value)) return current;
      current = current.next;
    }
    return null;
  }

  /** Приведение списка к массиву */
  public toArray(): ILinkedListNode<T>[] {
    const nodes: ILinkedListNode<T>[] = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  /** Приведение списка к строке */
  public toString(callback?: (value: T) => string): string {
    return this.toArray().map(node => node.toString(callback)).toString();
  }
}
