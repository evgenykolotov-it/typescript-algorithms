import LinkedList from "../LinkedList";

describe('Тестирование класса LinkedList', () => {
  it('Создание экземпляра LinkedList, без функции для сравнения', () => {
    const linkedList = new LinkedList<string>();
    expect(linkedList.size()).toBe(0);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.toArray()).toEqual([]);
  });

  it('Создание экземпляра LinkedList, c передачей функции для сравнения', () => {
    const linkedList = new LinkedList((a: string, b: string) => a.length === b.length);
    expect(linkedList.size()).toBe(0);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.toArray()).toEqual([]);
  });

  it('Добавление элемента в конец связного списока', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.toString()).toBe('1,2');
    expect(linkedList.toArray().map(node => node.value)).toEqual([1, 2]);
    expect(linkedList.size()).toBe(2);
  });

  it('Добавление элемента в начало связного списка', () => {
    const linkedList = new LinkedList();
    linkedList.append(2);
    linkedList.prepend(1);
    expect(linkedList.toString()).toBe('1,2');
    expect(linkedList.toArray().map(node => node.value)).toEqual([1, 2]);
    expect(linkedList.size()).toBe(2);
  });

  it('Добавление элемента в произвольное место связного списка', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(4);
    linkedList.insertAfter(2, 3);
    linkedList.insertAfter(4, 5);
    expect(linkedList.toString()).toBe('1,2,3,4,5');
    expect(linkedList.toArray().map(node => node.value)).toEqual([1, 2, 3, 4, 5]);
    expect(linkedList.size()).toBe(5);
  });

  it('Удаление элемента из связного списка', () => {
    const linkedList = new LinkedList();
    expect(linkedList.remove(5)).toBeUndefined();
    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
    linkedList.remove(3)
    expect(linkedList.size()).toBe(5);
    expect(linkedList.toString()).toBe('1,1,2,4,5');
    expect(linkedList.toArray().map(node => node.value)).toEqual([1, 1, 2, 4, 5]);
    linkedList.remove(1);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.toString()).toBe('2,4,5');
    expect(linkedList.toArray().map(node => node.value)).toEqual([2, 4, 5]);
    linkedList.remove(5);
    expect(linkedList.size()).toBe(2);
    expect(linkedList.toString()).toBe('2,4');
    expect(linkedList.toArray().map(node => node.value)).toEqual([2, 4]);
    linkedList.remove(4);
    expect(linkedList.size()).toBe(1);
    expect(linkedList.toString()).toBe('2');
    expect(linkedList.toArray().map(node => node.value)).toEqual([2]);
    linkedList.remove(2);
    expect(linkedList.size()).toBe(0);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.toArray().map(node => node.value)).toEqual([]);
  });

  it('Добавление объектов в связный список', () => {
    const linkedList = new LinkedList<typeof nodeValue1>();
    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };
    linkedList.append(nodeValue1)
    linkedList.prepend(nodeValue2);
    expect(linkedList.toString((node) => `${node.key}:${node.value}`)).toBe('key2:2,key1:1');
  });

  it('Поиск элемента по значению', () => {
    const linkedList = new LinkedList();
    expect(linkedList.find(5)).toBeNull();
    linkedList.append(1);
    expect(linkedList.find(1)).toBeDefined();
    expect(linkedList.find(1)?.value).toBe(1);
    linkedList.append(2)
    linkedList.append(3);
    const node = linkedList.find(2);
    expect(node?.value).toBe(2);
    expect(linkedList.find(5)).toBeNull();
  });

  it('Поиск элемента по значению с помощью функции коллбека', () => {
    const linkedList = new LinkedList<{ key: number, value: string }>();
    expect(linkedList.find({ key: 1, value: '1' })).toBeNull();
    linkedList.append({ key: 1, value: '1' });
    linkedList.append({ key: 2, value: '2' });
    expect(linkedList.find({ key: 2, value: '2' }, (value) => value.key === 2)?.value).toEqual({ key: 2, value: '2' });
  });
});