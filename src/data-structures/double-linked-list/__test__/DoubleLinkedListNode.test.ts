import DoubleLinkedListNode from "../DoubleLinkedListNode";

describe('Тестирование класса LinkedListNode', () => {
  it('Создание экземпляра LinkedListNode с примитивным значением', () => {
    const node = new DoubleLinkedListNode(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
    expect(node.previous).toBeNull();
  });

  it('Создание экземпляра LinkedListNode со значением типа объект', () => {
    const node = new DoubleLinkedListNode({ id: 1, key: 'test' });
    expect(node.value.id).toBe(1);
    expect(node.value.key).toBe('test');
    expect(node.next).toBeNull();
    expect(node.previous).toBeNull();
  });

  it('Создание двух экземпляров LinkedListNode и связывание их между собой', () => {
    const node2 = new DoubleLinkedListNode(2);
    const node1 = new DoubleLinkedListNode(1, node2);
    node2.previous = node1;
    expect(node1.next).toBeDefined();
    expect(node1.next).toEqual(node2);
    expect(node2.next).toBeNull();
    expect(node1.value).toBe(1);
    expect(node2.previous).toBeDefined();
    expect(node2.previous).toEqual(node1);
    expect(node2.previous?.value).toBe(1);
    expect(node1.next?.value).toBe(2);
  });

  it('Приведение LinkedListNode к строке по умолчанию', () => {
    const node = new DoubleLinkedListNode(1);
    const node2 = new DoubleLinkedListNode('test');
    expect(node.toString()).toBe('1');
    expect(node2.toString()).toBe('test');
  });

  it('Приведение LinkedListNode к строке с помощью передаваемой функции', () => {
    const nodeValue = { value: 1, key: 'test' };
    const node = new DoubleLinkedListNode({ value: 1, key: 'test' });
    const toStringCallback = (value: typeof nodeValue) => `value: ${value.value}, key: ${value.key}`;
    expect(node.toString(toStringCallback)).toBe('value: 1, key: test');
  });
});
