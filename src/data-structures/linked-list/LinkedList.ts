import LinkedListNode, { ILinkedListNode } from "./LinkedListNode";

export type ForEachCallback<T> = (value: ILinkedListNode<T>) => void;
export type ComparatorCallback<T> = (value: T, target: T) => boolean;
export type FindComparatorCallback<T> = (value: T) => boolean;
export type ToStringCallback<T> = (value: T) => string;

export interface ILinkedList<T> {
  prepend: (value: T) => void;
  append: (value: T) => void;
  remove: (value: T) => void;
  toArray: () => Array<ILinkedListNode<T>>;
  insertAfter: (value: T, cell: T) => void;
  find: (target: T, callback?: FindComparatorCallback<T>) => ILinkedListNode<T> | null;
  forEach: (callback: ForEachCallback<T>) => void;
  toString: (callback?: ToStringCallback<T>) => string;
}

export default class LinkedList<T> implements ILinkedList<T> {
  private length: number;
  private head: ILinkedListNode<T> | null = null;
  private readonly comparator: ComparatorCallback<T>;

  constructor(comparator: ComparatorCallback<T>) {
    this.length = 0;
    this.comparator = comparator;
  }

  public prepend(value: T): void {
    this.head = new LinkedListNode<T>(value, this.head);
    this.length++;
  }

  public append(value: T): void {
    if (!this.head) this.head = new LinkedListNode<T>(value);
    let current: ILinkedListNode<T> | null = this.head;
    while (current.next) {
      current = current?.next;
    }
    current.next = new LinkedListNode<T>(value);
    this.length++;
  }

  public insertAfter(cell: T, value: T): void {
    const afterNode = this.find(cell);
    if (afterNode) {
      afterNode.next = new LinkedListNode<T>(value, afterNode.next);
      this.length++;
    }
  }

  public remove(value: T): void {
    if (!this.head) return;
    while (this.head && this.comparator(this.head.value, value)) {
      this.head = this.head.next;
      this.length--;
    }
    let current: ILinkedListNode<T> | null = this.head;
    while (current?.next) {
      if (this.comparator(value, current.value)) {
        current.next = current.next.next;
        this.length--;
      } else {
        current = current?.next;
      }
    }
  }

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

  public toArray(): Array<ILinkedListNode<T>> {
    const nodes: Array<ILinkedListNode<T>> = new Array(this.length);
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  public forEach(callback: ForEachCallback<T>): void {
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
  }

  public toString(callback?: ToStringCallback<T>): string {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }
}
