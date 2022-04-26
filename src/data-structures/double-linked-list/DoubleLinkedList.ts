import Comparator, { CompareFunction } from "../../utils/Comparator";
import DoubleLinkedListNode, { IDoubleLinkedListNode, ToStringCallback } from "./DoubleLinkedListNode";

/**
 * Тип функции, вызываемой при переборе связного списка.
 * @type {ForEachCallback}
 */
export type ForEachCallback<T> = (value: IDoubleLinkedListNode<T>) => void;

/**
 * Интерфейс двунаправленного связного списка.
 * @interface IDoubleLinkedList
 */
export interface IDoubleLinkedList<T> {
  size: () => number;
  append: (value: T) => IDoubleLinkedList<T>;
  prepend: (value: T) => IDoubleLinkedList<T>;
  find: (target: T, callback?: CompareFunction<T>) => IDoubleLinkedListNode<T> | null;
  insertAfter: (value: T, cell: T) => IDoubleLinkedList<T>;
  remove: (value: T) => IDoubleLinkedList<T>;
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
  private length: number;
  private head: IDoubleLinkedListNode<T> | null = null;
  private tail: IDoubleLinkedListNode<T> | null = null;
  private readonly compare: Comparator<T>;

  /**
   * @constructor
   * @param {ComparatorCallback} comparatorFunction - Функция, для сравнения элементов.
   */
  constructor(comparatorFunction?: CompareFunction<T>) {
    this.length = 0;
    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * 
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
   * @param {*} target - Значение, по которому будет идти поиск элемента.
   * @param {FindComparatorCallback} callback - Функция, по которой будет идти сравнение.
   * @returns {IDoubleLinkedListNode | null} - Возвращаемое значение.
   */
  public find(target: T, callback?: CompareFunction<T>): IDoubleLinkedListNode<T> | null {
    if (!this.size()) return null;
    let current: IDoubleLinkedListNode<T> | null = this.head;
    while (current) {
      if (callback && callback(current.value, target)) return current;
      if (this.compare && this.compare.equal(current.value, target)) return current;
      current = current.next;
    }
    return null;
  }

  /**
   * Метод для добавления элемента, после указанного.
   * @param {*} cell - Значение, по которому будет произведён поиск элемента. 
   * @param {*} value - Значение для добавления элемента.
   * @returns {IDoubleLinkedList} - Связный список.
   */
  public insertAfter(cell: T, value: T): IDoubleLinkedList<T> {
    const afterNode = this.find(cell);
    if (afterNode) {
      afterNode.next = new DoubleLinkedListNode<T>(value, afterNode.next, afterNode);
      this.length++;
    }
    return this;
  }

  /**
   * Метод для удаления элемента из связного списка.
   * @param {*} value - Значение для удаления из связного списка.
   */
  public remove(value: T): IDoubleLinkedList<T> {
    if (!this.size()) return this;
    while (this.head && this.compare.equal(this.head.value, value)) {
      this.head = this.head.next;
      this.length--;
    }
    let current: IDoubleLinkedListNode<T> | null = this.head;
    while (current?.next) {
      if (this.compare.equal(value, current.next.value)) {
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
   * @param {ToStringCallback} callback - Функция для преобразования к строке.
   * @returns {string}
   */
  public toString(callback?: ToStringCallback<T>): string {
    return this.toArray().map(node => node.toString(callback)).toString();
  }

  /**
   * Метод, возвращающий текущую длинну связного списка.
   * @returns - Длинна связного списка.
   */
  public size(): number {
    return this.length ? this.length : 0;
  }
}
