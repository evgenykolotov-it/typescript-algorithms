import DoubleLinkedList from '../DoubleLinkedList';

describe('Тестирование класса LinkedList', () => {
  it('Создание экземпляра LinkedList, без функции для сравнения', () => {
    const linkedList = new DoubleLinkedList<string>();
    expect(linkedList.size()).toBe(0);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.toArray()).toEqual([]);
  });;

  it('Добавление элемента в конец связного списока', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.append(1).append(2).append(3);
    expect(linkedList.toString()).toBe('1,2,3');
    expect(linkedList.toArray().map(node => node.value)).toEqual([1, 2, 3]);
    expect(linkedList.size()).toBe(3);
  });

  it('Добавление элемента в начало связного списка', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.prepend(1).append(2).prepend(0);
    expect(linkedList.toString()).toBe('0,1,2');
    expect(linkedList.toArray().map(node => node.value)).toEqual([0, 1, 2]);
    expect(linkedList.size()).toBe(3);
  });

  it('Добавление элемента в произвольное место связного списка', () => {
    const linkedList = new DoubleLinkedList<number>();
    linkedList.append(1).append(2).append(4);
    linkedList
      .insertAfter(3, (node: number) => node === 2)
      .insertAfter(5, (node: number) => node === 4);
    expect(linkedList.toString()).toBe('1,2,3,4,5');
    expect(linkedList.toArray().map(node => node.value)).toEqual([1, 2, 3, 4, 5]);
    expect(linkedList.size()).toBe(5);
  });

  it('Удаление элемента из связного списка', () => {
    const linkedList = new DoubleLinkedList<number>();
    expect(linkedList.remove((node: number) => node === 5)).toEqual(linkedList);
    linkedList.append(1).append(1).append(2).append(3).append(3).append(3).append(4).append(5);
    linkedList.remove((node: number) => node === 3);
    expect(linkedList.size()).toBe(5);
    expect(linkedList.toString()).toBe('1,1,2,4,5');
    expect(linkedList.toArray().map(node => node.value)).toEqual([1, 1, 2, 4, 5]);
    linkedList.remove((node: number) => node === 1);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.toString()).toBe('2,4,5');
    expect(linkedList.toArray().map(node => node.value)).toEqual([2, 4, 5]);
    linkedList.remove((node: number) => node === 5);
    expect(linkedList.size()).toBe(2);
    expect(linkedList.toString()).toBe('2,4');
    expect(linkedList.toArray().map(node => node.value)).toEqual([2, 4]);
    linkedList.remove((node: number) => node === 4);
    expect(linkedList.size()).toBe(1);
    expect(linkedList.toString()).toBe('2');
    expect(linkedList.toArray().map(node => node.value)).toEqual([2]);
    linkedList.remove((node: number) => node === 2);
    expect(linkedList.size()).toBe(0);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.toArray().map(node => node.value)).toEqual([]);
  });

  it('Удаление элемента с головы связного списка', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.append(1).append(2).append(3).append(4).append(5).removeHead();
    expect(linkedList.size()).toBe(4);
    expect(linkedList.toString()).toBe('2,3,4,5');
    expect(linkedList.toArray().map(node => node.value)).toEqual([2, 3, 4, 5]);
    linkedList.removeHead();
    expect(linkedList.size()).toBe(3);
    expect(linkedList.toString()).toBe('3,4,5');
    expect(linkedList.toArray().map(node => node.value)).toEqual([3, 4, 5]);
  });

  it('Удаление элемента с хвоста связного списка', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.append(1).append(2).append(3).append(4).append(5).removeTail();
    expect(linkedList.size()).toBe(4);
    expect(linkedList.toString()).toBe('1,2,3,4');
    expect(linkedList.toArray().map(node => node.value)).toEqual([1, 2, 3, 4]);
    linkedList.removeTail();
    expect(linkedList.size()).toBe(3);
    expect(linkedList.toString()).toBe('1,2,3');
    expect(linkedList.toArray().map(node => node.value)).toEqual([1, 2, 3]);
  });

  it('Добавление объектов в связный список', () => {
    const linkedList = new DoubleLinkedList<typeof nodeValue1>();
    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };
    linkedList.append(nodeValue1)
    linkedList.prepend(nodeValue2);
    expect(linkedList.toString((node) => `${node.key}:${node.value}`)).toBe('key2:2,key1:1');
  });

  it('Поиск элемента по значению', () => {
    const linkedList = new DoubleLinkedList<number>();
    expect(linkedList.find((node: number) => node === 5)).toBeNull();
    linkedList.append(1);
    expect(linkedList.find((node: number) => node === 1)).toBeDefined();
    expect(linkedList.find((node: number) => node === 1)?.value).toBe(1);
    linkedList.append(2).append(3);
    expect(linkedList.find((node: number) => node === 2)?.value).toBe(2);
    expect(linkedList.find((node: number) => node === 5)).toBeNull();
  });

  it('Поиск элемента по значению с помощью функции коллбека', () => {
    const linkedList = new DoubleLinkedList<{ key: number, value: string }>();
    expect(linkedList.find((node: { key: number, value: string }) => node.key === 3)).toBeNull();
    linkedList.append({ key: 1, value: '1' });
    linkedList.append({ key: 2, value: '2' });
    expect(linkedList.find((node: { key: number, value: string }) => node.key === 2)?.value).toEqual({ key: 2, value: '2' });
  });
});