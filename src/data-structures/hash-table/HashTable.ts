import LinkedList, { ILinkedList } from '../linked-list/LinkedList';

/**
 * Интерфейс лбъекта для хранения ключей Хэш таблицы.
 * @interface IKeys
 */
export interface IKeys {
  [key: string]: number;
}

/**
 * Интерфейс узла для связного списка в Хэш таблице.
 * @interface IHashTableNode
 */
export interface IHashTableNode<T> {
  key: string;
  value: T;
}

/**
 * Интерфейс структуры данных "Хэш таблицы".
 * @interface IHashTable
 */
export interface IHashTable<T> {
  set: (key: string, value: T) => void;
  delete: (key: string) => void;
  get: (key: string) => T | null;
  has: (key: string) => boolean;
  getKeys: () => Array<string>;
  getValues: () => Array<T>;
}

/**
 * @class
 * @name HashTable
 * @implements {IHashTable}
 * @classdesc Класс, реализующий структуру данных "Хэш-таблица".
 */
export default class HashTable<T> implements IHashTable<T> {
  private static readonly DEFAULT_TABLE_SIZE: number = 32;
  private buckets: ILinkedList<IHashTableNode<T>>[];
  private keys: IKeys = {};

  /**
   * @constructor
   * @param {number} hashTableSize - Длина Хэш таблицы.
   */
  constructor(hashTableSize: number = HashTable.DEFAULT_TABLE_SIZE) {
    this.buckets = new Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
  }

  /**
   * Добавление значения в Хэш таблицу
   * @public
   * @param {string} key - Ключ для идентификации. 
   * @param {T} value - Значение для добавления. 
   */
  public set(key: string, value: T): void {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find((nodeValue: IHashTableNode<T>) => nodeValue.key === key);
    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  /**
   * Удаление элемента из Хэш таблицы
   * @public
   * @param {string} key - Ключ для удаления из Хэш таблицы
   * @returns 
   */
  public delete(key: string): void {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find((nodeValue: IHashTableNode<T>) => nodeValue.key === key);
    if (node) {
      bucketLinkedList.remove((nodeValue: IHashTableNode<T>) => nodeValue.key === node.value.key);
      return;
    }

    return undefined;
  }

  /**
   * Получение значения из Хэш таблицы по ключу.
   * @public
   * @param {string} key - Ключ для поиска по Хэш таблице. 
   * @returns {T}
   */
  public get(key: string): T | null {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find((nodeValue: IHashTableNode<T>) => nodeValue.key === key);

    return node ? node.value.value : null;
  }

  /**
   * Существует ли элемент по данному ключу.
   * @public
   * @param {string} key - Ключ для проверки. 
   * @returns {boolean}
   */
  public has(key: string): boolean {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  /**
   * Получение массива ключей из Хэш таблицы.
   * @public
   * @returns {string[]}
   */
  public getKeys(): string[] {
    return Object.keys(this.keys);
  }

  /**
   * Получение массива значений из Хэш таблицы.
   * @public
   * @returns {Array<T>}
   */
  public getValues(): Array<T> {
    return this.buckets.reduce((values: Array<T>, bucket) => {
      const bucketValues: Array<T> = bucket.toArray()
        .map((linkedListNode) => linkedListNode.value.value);
      return values.concat(bucketValues);
    }, []);
  }

  /**
   * Генерация индекса для Хэш таблицы.
   * @private
   * @param {string} key - Ключ, для которого нужно сгенерировать индекс.
   * @returns {number}
   */
  private hash(key: string): number {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );

    return hash % this.buckets.length;
  }
}
