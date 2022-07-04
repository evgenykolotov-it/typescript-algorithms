import LinkedList, { ILinkedList } from '../linked-list/LinkedList';
import { ToStringCallback } from '../linked-list/LinkedListNode';

/**
 * Итерфейс структуры данных очередь
 * @interface IQueue
 */
export interface IQueue<T> {
  enqueue: (value: T) => void;
  dequeue: () => T | null;
  toString: (callback?: ToStringCallback<T>) => string;
}

/**
 * @class
 * @classdesc Класс, реализующий структуру данных очередь.
 * @implements {IQueue}
 */
export default class Queue<T> implements IQueue<T> {
  private readonly linkedList: ILinkedList<T> = new LinkedList();

  /**
   * Метод для добавления значения в очередь.
   * @public
   * @param {T} value - Значение, для добавления в очередь.
   */
  public enqueue(value: T): void {
    this.linkedList.append(value);
  }

  /**
   * Метод для удаления элемента из очереди.
   * @public
   * @returns {T | null}
   */
  public dequeue(): T | null {
    const removedHead = this.linkedList.removeHead();
    return removedHead ? removedHead.value : null;
  }

  /**
   * Метод для преобразования связного списка к строке.
   * @public
   * @param {ToStringCallback} callback - Функция для преобразования к строке.
   * @returns {string}
   */
  public toString(callback?: ToStringCallback<T>): string {
    return this.linkedList.toString(callback);
  }
}
