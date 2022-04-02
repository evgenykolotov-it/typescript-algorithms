import LinkedListNode, { ILinkedListNode } from "./LinkedListNode";

/**
 * @type {ForEachCallback}
 * Тип функции, вызываемой при переборе связного списка.
 */
export type ForEachCallback<T> = (value: ILinkedListNode<T>) => void;
/**
 * @type {ComparatorCallback<T>}
 * Тип функции, используемой для сравнения элементов при поиске.
 */
export type ComparatorCallback<T> = (value: T, target: T) => boolean;
/**
 * @type {FindComparatorCallback<T>}
 * Тип функции, которую можно дополнительно передать, для поиска элемента в списке.
 */
export type FindComparatorCallback<T> = (value: T) => boolean;
/**
 * @type {ToStringCallback<T>}
 * Тип функции, передаваемой для преобразования списка к строке.
 */
export type ToStringCallback<T> = (value: T) => string;

/**
 * Интерфейс однонаправленного связного списка.
 * @interface ILinkedList<T>
 */
export interface ILinkedList<T> { 
  size: () => number;
  prepend: (value: T) => void;
  append: (value: T) => void;
  remove: (value: T) => void;
  toArray: () => Array<ILinkedListNode<T>>;
  insertAfter: (value: T, cell: T) => void;
  find: (target: T, callback?: FindComparatorCallback<T>) => ILinkedListNode<T> | null;
  forEach: (callback: ForEachCallback<T>) => void;
  toString: (callback?: ToStringCallback<T>) => string;
}

/**
 * @class
 * @classdesc Класс, реализующий однонаправленно связный список.
 * @implements {ILinkedList<T>}
 */
export default class LinkedList<T> implements ILinkedList<T> {
  private length: number;
  private head: ILinkedListNode<T> | null = null;
  private readonly comparator: ComparatorCallback<T>;

  /**
   * @constructor
   * @param {ComparatorCallback<T>} comparator - Функция, для сравнения элементов.
   */
  constructor(comparator: ComparatorCallback<T>) {
    this.length = 0;
    this.comparator = comparator;
  }

  /**
   * Метод для добавления элемента в начало связного списка.
   * @param {T} value - Значение для добавления в начало связного списка.
   */
  public prepend(value: T): void {
    this.head = new LinkedListNode<T>(value, this.head);
    this.length++;
  }

  /**
   * Метод для добавления элемента в конец связного списка.
   * @param {T} value - Значение для добавления в конец связного списка.
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
   * @param {T} cell - Значение, по которому будет произведён поиск элемента. 
   * @param {T} value - Значение для добавления элемента. 
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
   * @param {T} value - Значение для удаления из связного списка.
   */
  public remove(value: T): void {
    if (!this.head) return;
    while (this.head && this.comparator(this.head.value, value)) {
      this.head = this.head.next;
      this.length--;
    }
    let current: ILinkedListNode<T> | null = this.head;
    while (current?.next) {
      if (this.comparator(value, current.next.value)) {
        current.next = current.next.next;
        this.length--;
      } else {
        current = current?.next;
      }
    }
  }

  /**
   * Метод для поиска элемента связного списка, по значению.
   * @param {T} target - Значение, по которому будет идти поиск элемента.
   * @param {FindComparatorCallback<T>} callback - Функция, по которой будет идти сравнение.
   * @returns {ILinkedListNode<T> | null} - Возвращаемое значение.
   */
  public find(target: T, callback?: FindComparatorCallback<T>): ILinkedListNode<T> | null {
    if (!this.head) return null;
    let current: ILinkedListNode<T> | null = this.head;
    while (current) {
      if (this.comparator && this.comparator(current.value, target)) return current;
      if (callback && callback(current.value)) return current;
      current = current.next;
    }
    return null;
  }

  /**
   * Метод для преобразования связного списка в массив.
   * @returns {Array<ILinkedListNode<T>>}
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
   * @param {ForEachCallback<T>} callback - Функция для выполнения на элементе.
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
   * @param {ToStringCallback<T>} callback - Функция для преобразования к строке.
   * @returns {string}
   */
  public toString(callback?: ToStringCallback<T>): string {
    return this.toArray().map(node => node.toString()).toString();
  }

  /**
   * Метод, возвращающий текущую длинну связного списка.
   * @returns - Длинна связного списка.
   */
  public size(): number {
    return this.length;
  }
}
