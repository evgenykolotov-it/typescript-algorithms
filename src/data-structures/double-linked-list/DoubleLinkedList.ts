import DoubleLinkedListNode, { IDoubleLinkedListNode, ToStringCallback } from "./DoubleLinkedListNode";

/**
 * Тип функции, вызываемой при переборе связного списка.
 * @type {ForEachCallback}
 */
export type ForEachCallback<T> = (value: IDoubleLinkedListNode<T>) => void;

/**
 * Тип функции, используемой для поиска элемента связного списка.
 * @type {CompareFunction}
 */
 export type CompareFunction<T> = (node: T) => boolean;

/**
 * Интерфейс двунаправленного связного списка.
 * @interface IDoubleLinkedList
 */
export interface IDoubleLinkedList<T> {
  size: () => number;
  append: (value: T) => IDoubleLinkedList<T>;
  prepend: (value: T) => IDoubleLinkedList<T>;
  find: (callback: CompareFunction<T>) => IDoubleLinkedListNode<T> | null;
  insertAfter: (value: T, callback: CompareFunction<T>) => IDoubleLinkedList<T>;
  remove: (callback: CompareFunction<T>) => IDoubleLinkedList<T>;
  removeHead: () => IDoubleLinkedListNode<T> | null;
  removeTail: () => IDoubleLinkedListNode<T> | null;
  toArray: () => IDoubleLinkedListNode<T>[];
  toString: (callback?: ToStringCallback<T>) => string;
  forEach: (callback: (value: IDoubleLinkedListNode<T>) => void) => void;
}

/**
 * @class
 * @classdesc Класс, реализующий двунаправленно связный список.
 * @implements {IDoubleLinkedList}
 */
export default class DoubleLinkedList<T> implements IDoubleLinkedList<T> {
  private length: number = 0;
  private head: IDoubleLinkedListNode<T> | null = null;
  private tail: IDoubleLinkedListNode<T> | null = null;

  /**
   * Метод для добавления элемента в конец связного списка.
   * @public
   * @param {*} value - Значение для добавления в конец связного списка.
   * @returns {IDoubleLinkedList} - Связный список.
   */
  public append(value: T): IDoubleLinkedList<T> {
    const node = new DoubleLinkedListNode<T>(value);
    if (!this.size()) {
      this.head = this.tail = node;
    } else {
      (this.tail as DoubleLinkedListNode<T>).next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  /**
   * Метод для добавления элемента в начало связного списка.
   * @public
   * @param {*} value - Значение для добавления в начало связного списка.
   * @returns {IDoubleLinkedList} - Связный список.
   */
  public prepend(value: T): IDoubleLinkedList<T> {
    const node = new DoubleLinkedListNode(value);
    if (!this.size()) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      (this.head as IDoubleLinkedListNode<T>).previous = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  /**
   * Метод для поиска элемента связного списка, по значению.
   * @public
   * @param {CompareFunction} callback - Функция, по которой будет идти сравнение.
   * @returns {IDoubleLinkedListNode | null} - Возвращаемое значение.
   */
  public find(callback: CompareFunction<T>): IDoubleLinkedListNode<T> | null {
    if (!this.size()) return null;
    let current: IDoubleLinkedListNode<T> | null = this.head;
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
   * @returns {IDoubleLinkedList} - Связный список.
   */
  public insertAfter(value: T, callback: CompareFunction<T>): IDoubleLinkedList<T> {
    const afterNode = this.find(callback);
    if (afterNode) {
      afterNode.next = new DoubleLinkedListNode<T>(value, afterNode.next, afterNode);
      this.length++;
    }
    return this;
  }

  /**
   * Метод для удаления элемента из связного списка.
   * @public
   * @param {CompareFunction} callback - Функция, по которой будет идти сравнение.
   * @returns {IDoubleLinkedList} - Связный список.
   */
  public remove(callback: CompareFunction<T>): IDoubleLinkedList<T> {
    if (!this.size()) return this;
    while (this.head &&  callback(this.head.value)) {
      this.head = this.head.next;
      this.length--;
    }
    let current: IDoubleLinkedListNode<T> | null = this.head;
    while (current?.next) {
      if (callback(current.next.value)) {
        current.next = current.next.next;
        this.length--;
      } else {
        current = current.next;
      }
    }
    return this;
  }

  /**
   * Метод для удаления первого элемента в связном списке.
   * @public
   * @returns {IDoubleLinkedListNode | null} - Удаленное значение.
   */
  public removeHead(): IDoubleLinkedListNode<T> | null {
    if (!this.size()) return null;
    const deleteHead = this.head;
    if (this.head?.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = this.tail = null;
    }
    this.length--;
    return deleteHead;
  }

  /**
   * Метод для удаления последнего элемента в связном списке.
   * @public
   * @returns {IDoubleLinkedListNode | null} - Удаленное значение.
   */
  public removeTail(): IDoubleLinkedListNode<T> | null {
    if (!this.size()) return null;
    const deleteTail = this.tail;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail?.previous as IDoubleLinkedListNode<T>;
      (this.tail as IDoubleLinkedListNode<T>).next = null;
    }
    this.length--;
    return deleteTail;
  }

  /**
   * Метод для преобразования связного списка в массив.
   * @public
   * @returns {IDoubleLinkedListNode[]} - Массив из элементов связного списка.
   */
  public toArray(): IDoubleLinkedListNode<T>[] {
    const nodes: IDoubleLinkedListNode<T>[] = new Array();
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
