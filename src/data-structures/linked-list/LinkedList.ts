import LinkedListNode, { ILinkedListNode, ToStringCallback } from "./LinkedListNode";

/**
 * Тип функции, вызываемой при переборе связного списка.
 * @type {ForEachCallback}
 */
export type ForEachCallback<T> = (node: ILinkedListNode<T>) => void;

/**
 * Тип функции, используемой для поиска элемента связного списка.
 * @type {CompareFunction}
 */
export type CompareFunction<T> = (node: T) => boolean;

/**
 * Интерфейс однонаправленного связного списка.
 * @interface ILinkedList
 */
export interface ILinkedList<T> {
  size: () => number;
  append: (value: T) => ILinkedList<T>;
  prepend: (value: T) => ILinkedList<T>;
  find: (callback: CompareFunction<T>) => ILinkedListNode<T> | null;
  insertAfter: (value: T, callback: CompareFunction<T>) => ILinkedList<T>;
  remove: (callback: CompareFunction<T>) => ILinkedList<T>;
  removeHead: () => ILinkedListNode<T> | null;
  removeTail: () => ILinkedListNode<T> | null;
  toArray: () => ILinkedListNode<T>[];
  toString: (callback?: ToStringCallback<T>) => string;
  forEach: (callback: (value: ILinkedListNode<T>) => void) => void;
}

/**
 * @class
 * @classdesc Класс, реализующий однонаправленно связный список.
 * @implements {ILinkedList}
 */
export default class LinkedList<T> implements ILinkedList<T> {
  private length: number = 0;
  private head: ILinkedListNode<T> | null = null;
  private tail: ILinkedListNode<T> | null = null;

  /**
   * Метод для добавления элемента в конец связного списка.
   * @public
   * @param {*} value - Значение для добавления в конец связного списка.
   * @returns {LinkedList} - Связный список.
   */
  public append(value: T): LinkedList<T> {
    const node = new LinkedListNode<T>(value);
    if (!this.size()) {
      this.head = this.tail = node;
    } else {
      (this.tail as ILinkedListNode<T>).next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  /**
   * Метод для добавления элемента в начало связного списка.
   * @public
   * @param {*} value - Значение для добавления в начало связного списка.
   * @returns {LinkedList} - Связный список.
   */
  public prepend(value: T): ILinkedList<T> {
    if (!this.size()) {
      this.head = this.tail = new LinkedListNode(value);
    } else {
      this.head = new LinkedListNode(value, this.head);
    }
    this.length++;
    return this;
  }

  /**
   * Метод для поиска элемента связного списка, по значению.
   * @public
   * @param {CompareFunction} callback - Функция, по которой будет идти сравнение.
   * @returns {ILinkedListNode | null} - Возвращаемое значение. 
   */
  public find(callback: CompareFunction<T>): ILinkedListNode<T> | null {
    if (!this.size()) return null;
    let current: ILinkedListNode<T> | null = this.head;
    while (current) {
      if (callback(current.value)) return current;
      current = current.next;
    }
    return null;
  }

  /**
   * Метод для добавления элемента, после указанного.
   * @public
   * @param {*} value - Значение для добавления элемента.
   * @param {CompareFunction} callback - Функция, по которой будет идти сравнение.
   * @returns {LinkedList} - Связный список.
   */
  public insertAfter(value: T, callback: CompareFunction<T>): ILinkedList<T> {
    const afterNode = this.find(callback);
    if (afterNode) {
      afterNode.next = new LinkedListNode<T>(value, afterNode.next);
      this.length++;
    }

    return this;
  }

  /**
   * Метод для удаления элемента из связного списка.
   * @public
   * @param {CompareFunction} callback - Функция, по которой будет идти сравнение.
   * @returns {LinkedList} - Связный список.
   */
  public remove(callback: CompareFunction<T>): ILinkedList<T> {
    if (!this.size()) return this;
    while (this.head && callback(this.head.value)) {
      this.head = this.head.next;
      this.length--;
    }
    let current: ILinkedListNode<T> | null = this.head;
    while (current?.next) {
      if (callback(current.next.value)) {
        current.next = current.next.next;
        this.length--;
      } else {
        current = current?.next;
      }
    }
    return this;
  }

  /**
   * Метод для удаления первого элемента в связном списке.
   * @public
   * @returns {ILinkedListNode | null} - Удаленное значение.
   */
  public removeHead(): ILinkedListNode<T> | null {
    if (!this.size()) return null;
    const deleteHead = this.head;
    if (this.head?.next) {
      this.head = this.head.next;
    } else {
      this.head = this.tail = null;
    }
    this.length--;
    return deleteHead;
  }

  /**
   * Метод для удаления последнего элемента в связном списке.
   * @public
   * @returns {ILinkedListNode | null} - Удаленное значение.
   */
  public removeTail(): ILinkedListNode<T> | null {
    if (!this.size()) return null;
    const deleteTail = this.tail;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let current = this.head;
      while (current?.next) {
        if (!current.next.next) {
          current.next = null;
        } else {
          current = current.next;
        }
      }
      this.tail = current;
    }
    this.length--;
    return deleteTail;
  }

  /**
   * Метод для преобразования связного списка в массив.
   * @public
   * @returns {ILinkedListNode[]} - Массив из элементов связного списка.
   */
  public toArray(): ILinkedListNode<T>[] {
    const nodes: ILinkedListNode<T>[] = new Array();
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  /**
   * Метод для перебора связного списка с выполнением функции для каждого элемента.
   * @public
   * @param {ForEachCallback} callback - Функция для выполнения на элементе.
   */
  public forEach(callback: ForEachCallback<T>): void {
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
  }

  /**
   * Метод для преобразования связного списка к строке.
   * @public
   * @param {ToStringCallback} callback - Функция для преобразования к строке.
   * @returns {string}
   */
  public toString(callback?: ToStringCallback<T>): string {
    return this.toArray().map(node => node.toString(callback)).toString();
  }

  /**
   * Метод, возвращающий текущую длинну связного списка.
   * @public
   * @returns - Длинна связного списка.
   */
  public size(): number {
    return this.length ? this.length : 0;
  }
}
