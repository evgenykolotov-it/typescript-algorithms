/** Тип структуры данных "Стек" */
export interface IStack<T> {
  /** Удаление из стека */
  pop: () => T | null;
  /** Приведение стека к массиву */
  toArray: () => Array<T>;
  /** Добавление в стек */
  push: (value: T) => void;
  /** Получение элемента из стека */
  peek: () => T | null;
  /** Приведение стека к строке */
  toString: (callback?: (node: T) => string) => string;
}

/** Структура данных "Стек" */
export default class Stack<T> implements IStack<T> {
  /** Массив для хранения стека */
  private readonly list: Array<T> = [];

  /** Получение элемента из стека */
  public peek(): T | null {
    return this.list.at(-1) ?? null;
  }

  /** Добавление элемента в стек */
  public push(value: T): void {
    this.list.push(value);
  }

  /** Удаление элемента из стека */
  public pop(): T | null {
    return this.list.pop() ?? null;
  }

  /** Приведение стека к массиву */
  public toArray(): Array<T> {
    return this.list;
  }

  /** Приведение стека к строке */
  public toString(callback?: (node: T) => string): string {
    return this.list.map(node => callback ? callback(node) : `${node}`).toString();
  }
}
