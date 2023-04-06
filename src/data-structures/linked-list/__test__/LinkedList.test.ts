import LinkedList from "../LinkedList";

describe('Тестирование односвязного списка', () => {
  it('Создание односвязного списка', () => {
    const linkedList = new LinkedList<string>();
    expect(linkedList.toString()).toBe('');
    expect(linkedList.toArray()).toEqual([]);
  });

  it('Добавление элемента в список', () => {
    const linkedList = new LinkedList<number>();
    linkedList.append(1).append(2).append(3);
    expect(linkedList.toString()).toBe('1,2,3');
    expect(linkedList.toArray().map(node => node.value)).toEqual([1, 2, 3]);
  });

  it('Удаление элемента из списка', () => {
    const linkedList = new LinkedList<number>();
    linkedList.append(1).append(1).append(2).append(3).append(3).append(3).append(4).append(5);
    linkedList.remove(node => node === 3);
    expect(linkedList.toString()).toBe('1,1,2,4,5');
    expect(linkedList.toArray().map(node => node.value)).toEqual([1, 1, 2, 4, 5]);
    linkedList.remove(node => node === 1);
    expect(linkedList.toString()).toBe('2,4,5');
    expect(linkedList.toArray().map(node => node.value)).toEqual([2, 4, 5]);
    linkedList.remove(node => node === 5);
    expect(linkedList.toString()).toBe('2,4');
    expect(linkedList.toArray().map(node => node.value)).toEqual([2, 4]);
    linkedList.remove(node => node === 4);
    expect(linkedList.toString()).toBe('2');
    expect(linkedList.toArray().map(node => node.value)).toEqual([2]);
    linkedList.remove(node => node === 2);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.toArray().map(node => node.value)).toEqual([]);
    linkedList.remove(node => node === 2);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.toArray().map(node => node.value)).toEqual([]);
  });

  it('Добавление объектов в список', () => {
    const linkedList = new LinkedList<typeof nodeValue1>();
    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };
    linkedList.append(nodeValue1).append(nodeValue2);
    expect(linkedList.toString(node => `${node.key}:${node.value}`)).toBe('key1:1,key2:2');
    expect(linkedList.toArray().map(node => node.value)).toEqual([nodeValue1, nodeValue2]);
    linkedList.remove(node => node.value === 2);
    expect(linkedList.toString(node => `${node.key}:${node.value}`)).toBe('key1:1');
    expect(linkedList.toArray().map(node => node.value)).toEqual([nodeValue1]);
  });

  it('Поиск элемента в списке', () => {
    const linkedList = new LinkedList<number>();
    expect(linkedList.search((node: number) => node === 5)).toBeNull();
    linkedList.append(1);
    expect(linkedList.search(node => node === 1)).toBeDefined();
    expect(linkedList.search(node => node === 1)?.value).toBe(1);
    linkedList.append(2).append(3);
    expect(linkedList.search(node => node === 2)?.value).toBe(2);
    expect(linkedList.search(node => node === 5)).toBeNull();
  });
});