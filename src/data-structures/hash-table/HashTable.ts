import LinkedList, { ILinkedList } from "../linked-list/LinkedList";

/** Тип структуры данных "Хэш-таблица" */
export interface IHashTable<T> {
    /** Получение данных */
    get: (key: string) => T | null;
    /** Установка данных */
    set: (key: string, value: T) => void;
    /** Удаление данных */
    delete: (key: string) => void;
    /** Проверка наличия данных */
    has: (key: string) => boolean;
    /** Привидение к массиву ключей */
    getKeys: () => Array<string>;
    /** Привидение к массиву значений */
    getValues: () => Array<T>;
}

/** Тип элемента связного списка */
export interface IHashTableNode<T> {
    /** Уникальный ключ */
    key: string;
    /** Полезная нагрузка */
    value: T;
}

/** Структура данных "Хэш-таблица" */
export default class HashTable<T> implements IHashTable<T> {
    /** Массив связных списков для хранения данных */
    private buckets: ILinkedList<IHashTableNode<T>>[];
    /** Словарь для хранения ключей */
    private keys: Record<string, number> = {};

    constructor(size: number = 32) {
        this.buckets = new Array(size)
            .fill(null)
            .map(() => new LinkedList());
    }

    /** Получение данных */
    public get(key: string): T | null {
        const keyHash = this.hash(key);
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.search((nodeValue: IHashTableNode<T>) => nodeValue.key === key);

        return node ? node.value.value : null;
    }

    /** Установка данных */
    public set(key: string, value: T): void {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.search((nodeValue: IHashTableNode<T>) => nodeValue.key === key);
        if (!node) {
            bucketLinkedList.append({ key, value });
        } else {
            node.value.value = value;
        }
    }

    /** Генерация индекса для "Хэш таблицы" */
    private hash(key: string): number {
        const hash = Array.from(key).reduce(
            (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
            0,
        );

        return hash % this.buckets.length;
    }

    /** Удаление данных */
    public delete(key: string): void {
        const keyHash = this.hash(key);
        delete this.keys[key];
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.search((nodeValue: IHashTableNode<T>) => nodeValue.key === key);
        if (node) {
            bucketLinkedList.remove((nodeValue: IHashTableNode<T>) => nodeValue.key === node.value.key);
            return;
        }

        return undefined;
    }

    /** Проверка наличия данных */
    public has(key: string): boolean {
        return Object.hasOwnProperty.call(this.keys, key);
    }

    /** Привидение к массиву ключей */
    public getKeys(): string[] {
        return Object.keys(this.keys);
    }

    /** Привидение к массиву значений */
    public getValues(): Array<T> {
        return this.buckets.reduce((values: Array<T>, bucket) => {
            const bucketValues: Array<T> = bucket.toArray()
                .map((linkedListNode) => linkedListNode.value.value);
            return values.concat(bucketValues);
        }, []);
    }
}
