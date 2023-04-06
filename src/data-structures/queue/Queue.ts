/** Тип структуры очередь */
export interface IQueue<T> {
  /** Добавление элемента в очередь */
  enqueue: (value: T) => void;
  /** Удаление элемента из очереди */
  dequeue: () => T | null;
  /** Приведение очереди к строке */
  toString: (callback?: (value: T) => string) => string;
}

/** Структура данных "Очередь" */
export default class Queue<T> implements IQueue<T> {
  /** Массив для хранения очереди */
  private readonly list: Array<T> = [];

  /** Добавление элемента в очередь */
  public enqueue(value: T): void {
    this.list.push(value);
  }

  /** Удаление элемента из очереди */
  public dequeue(): T | null {
    return this.list.shift() ?? null;
  }

  /** Приведение очереди к строке */
  public toString(callback?: (value: T) => string): string {
    return this.list.map(node => callback ? callback(node) : `${node}`).join(',');
  }
}
