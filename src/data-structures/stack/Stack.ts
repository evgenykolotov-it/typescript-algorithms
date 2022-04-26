/**
 * Тип функции, передаваемой для преобразования списка к строке.
 * @type {ToStringCallback}
 */
 export type ToStringCallback<T> = (value: T) => string;

/**
 * Интерфейс структуры данных стек.
 * @interface IStack
 */
export interface IStack<T> {
  peek: () => T | undefined;
  pop: () => T;
  push: (value: T) => void;
  toArray: () => Array<T>;
  toString: (callback?: ToStringCallback<T>) => string;
}

/**
 * @class
 * @classdesc Класс, реализующий структуру данных стек.
 * @implements {IStack}
 */
export default class Stack<T> implements IStack<T> {
  private readonly list: Array<T> = [];

  /**
   * Метод, возвращающий последний добавленный элемент в стек.
   * @returns {T} - Последний элемент стека.
   */
  public peek(): T | undefined {
    return this.list.at(-1) as T | undefined;
  }

  /**
   * Метод для добавления элемента в стек.
   * @param {T} value - Значение, для добавления в стек.
   */
  public push(value: T): void {
    this.list.push(value);
  }

  /**
   * Метод для удаления элемента из стека.
   * @returns {T} - Значение удаленного элемента стека.
   */
  public pop(): T {
    return this.list.pop() as T;
  }

  /**
   * Метод для преобразования стека в массив.
   * @returns {Array<T>} - Итоговый массив, после преобразования из стека.
   */
  public toArray(): Array<T> {
    return this.list;
  }

  /**
   * Метод для преодбразования стека в строку
   * @param {ToStringCallback<T>} callback - Функция для преобразования к строке.
   * @returns {string} - Итоговая строка.
   */
  public toString(callback?: ToStringCallback<T>): string {
    return this.list.map(node => callback ? callback(node) : `${node}`).toString();
  }
}

