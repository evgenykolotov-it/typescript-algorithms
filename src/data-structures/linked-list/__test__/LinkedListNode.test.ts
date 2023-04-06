import LinkedListNode from "../LinkedListNode";

describe('Тестирование элемента односвязного списка', () => {
  it('Создание элемента с примитивным значением', () => {
    const node = new LinkedListNode(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it('Создание элемента со значением типа объект', () => {
    const node = new LinkedListNode({ id: 1, key: 'test' });
    expect(node.value.id).toBe(1);
    expect(node.value.key).toBe('test');
    expect(node.next).toBeNull();
  });

  it('Создание двух элементов и связывание их между собой', () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);
    expect(node1.next).toBeDefined();
    expect(node1.next).toEqual(node2);
    expect(node2.next).toBeNull();
    expect(node1.value).toBe(1);
    expect(node1.next?.value).toBe(2);
  });

  it('Приведение элемента к строке по умолчанию', () => {
    const node = new LinkedListNode(1);
    const node2 = new LinkedListNode('test');
    expect(node.toString()).toBe('1');
    expect(node2.toString()).toBe('test');
  });

  it('Приведение элемента к строке с помощью передаваемой функции', () => {
    const nodeValue = { value: 1, key: 'test' };
    const node = new LinkedListNode({ value: 1, key: 'test' });
    const toStringCallback = (value: typeof nodeValue) => `value: ${value.value}, key: ${value.key}`;
    expect(node.toString(toStringCallback)).toBe('value: 1, key: test');
  });
});
