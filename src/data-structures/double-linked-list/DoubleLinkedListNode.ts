/**
 * @type {ToStringCallback}
 * Тип функции, передаваемой для преобразования списка к строке.
 */
 export type ToStringCallback<T> = (value: T) => string;

 /**
  * Интерфейс одного элемента двунаправленного связного списка.
  * @interface IDoubleLinkedListNode
  */
 export interface IDoubleLinkedListNode<T> {
   value: T;
   next: IDoubleLinkedListNode<T> | null;
   previous: IDoubleLinkedListNode<T> | null;
   toString: (callback?: ToStringCallback<T>) => string;
 }
 
 /**
  * @class
  * @classdesc Класс, реализующий интерфейс элемента двунаправленного связного списка.
  * @implements {IDoubleLinkedListNode}
  */
 export default class DoubleLinkedListNode<T> implements IDoubleLinkedListNode<T> {
   public value: T;
   public next: IDoubleLinkedListNode<T> | null;
   public previous: IDoubleLinkedListNode<T> | null;
 
   /**
    * @constructor
    * @param {*} value - Полезные данные, содержащиеся в элементе.
    * @param {IDoubleLinkedListNode | null} next - Ссылка на следующий элемент связного списка.
    * @param {IDoubleLinkedListNode | null} previous - Ссылка на предыдущий элемент связного списка.
    */
   constructor(
     value: T,
     next: IDoubleLinkedListNode<T> | null = null,
     previous: IDoubleLinkedListNode<T> | null = null,
    ) {
     this.value = value;
     this.next = next;
     this.previous = previous;
   }
 
   /**
    * Метод для преобразования связного списка к строке.
    * @param {ToStringCallback} callback - Функция для преобразования к строке.
    * @returns {string}
    */
   public toString(callback?: ToStringCallback<T>): string {
     return callback ? callback(this.value) : `${this.value}`;
   }
 }
 