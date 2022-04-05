import LinkedListNode, { ILinkedListNode, ToStringCallback } from "./LinkedListNode";
import Comparator, { CompareFunction } from "../../utils/Comparator";

/**
 * @type {ForEachCallback}
 * Тип функции, вызываемой при переборе связного списка.
 */
export type ForEachCallback<T> = (value: ILinkedListNode<T>) => void;

/**
 * Интерфейс однонаправленного связного списка.
 * @interface ILinkedList
 */
export interface ILinkedList<T> { 
  size: () => number;
  prepend: (value: T) => void;
  append: (value: T) => void;
  remove: (value: T) => void;
  toArray: () => Array<ILinkedListNode<T>>;
  insertAfter: (value: T, cell: T) => void;
  find: (target: T, callback?: CompareFunction<T>) => ILinkedListNode<T> | null;
  forEach: (callback: (value: ILinkedListNode<T>) => void) => void;
  toString: (callback?: ToStringCallback<T>) => string;
}

/**
 * @class
 * @classdesc Класс, реализующий однонаправленно связный список.
 * @implements {ILinkedList}
 */
export default class LinkedList<T> implements ILinkedList<T> {
  private length: number;
  private compare: Comparator<T>;
  private head: ILinkedListNode<T> | null = null;

  /**
   * @constructor
   * @param {ComparatorCallback} comparatorFunction - Функция, для сравнения элементов.
   */
  constructor(comparatorFunction?: CompareFunction<T>) {
    this.length = 0;
    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * Метод для добавления элемента в начало связного списка.
   * @param {*} value - Значение для добавления в начало связного списка.
   */
  public prepend(value: T): void {
    this.head = new LinkedListNode<T>(value, this.head);
    this.length++;
  }

  /**
   * Метод для добавления элемента в конец связного списка.
   * @param {*} value - Значение для добавления в конец связного списка.
   */
  public append(value: T): void {
    if (!this.head) {
      this.head = new LinkedListNode<T>(value);
    } else {
      let current: ILinkedListNode<T> | null = this.head;
      while (current.next) {
        current = current?.next;
      }
      current.next = new LinkedListNode<T>(value);
    }
    this.length++;
  }

  /**
   * Метод для добавления элемента, после указанного.
   * @param {*} cell - Значение, по которому будет произведён поиск элемента. 
   * @param {*} value - Значение для добавления элемента. 
   */
  public insertAfter(cell: T, value: T): void {
    const afterNode = this.find(cell);
    if (afterNode) {
      afterNode.next = new LinkedListNode<T>(value, afterNode.next);
      this.length++;
    }
  }

  /**
   * Метод для удаления элемента из связного списка.
   * @param {*} value - Значение для удаления из связного списка.
   */
  public remove(value: T): void {
    if (!this.head) return;
    while (this.head && this.compare.equal(this.head.value, value)) {
      this.head = this.head.next;
      this.length--;
    }
    let current: ILinkedListNode<T> | null = this.head;
    while (current?.next) {
      if (this.compare.equal(value, current.next.value)) {
        current.next = current.next.next;
        this.length--;
      } else {
        current = current?.next;
      }
    }
  }

  /**
   * Метод для поиска элемента связного списка, по значению.
   * @param {*} target - Значение, по которому будет идти поиск элемента.
   * @param {FindComparatorCallback} callback - Функция, по которой будет идти сравнение.
   * @returns {ILinkedListNode | null} - Возвращаемое значение.
   */
  public find(target: T, callback?: CompareFunction<T>): ILinkedListNode<T> | null {
    if (!this.head) return null;
    let current: ILinkedListNode<T> | null = this.head;
    while (current) {
      if (callback && callback(current.value, target)) return current;
      if (this.compare && this.compare.equal(current.value, target)) return current;
      current = current.next;
    }
    return null;
  }

  /**
   * Метод для преобразования связного списка в массив.
   * @returns {ILinkedListNode[]}
   */
  public toArray(): Array<ILinkedListNode<T>> {
    const nodes: Array<ILinkedListNode<T>> = new Array();
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
    return this.length;
  }
}
