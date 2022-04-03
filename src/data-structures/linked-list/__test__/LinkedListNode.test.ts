import LinkedListNode from "../LinkedListNode";

describe('Тестирование класса LinkedListNode', () => {
  it('Тестирование создания класса со значением', () => {
    const node = new LinkedListNode(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });
  it('Тестирование создания класса со значением типа object', () => {
    const node = new LinkedListNode({ id: 1, key: 'test' });
    expect(node.value.id).toBe(1);
    expect(node.value.key).toBe('test');
    expect(node.next).toBeNull();
  });
  it('Тестирование связывания двух узлов вместе', () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);
    expect(node1.next).toBeDefined();
    expect(node2.next).toBeNull();
    expect(node1.value).toBe(1);
    expect(node1.next?.value).toBe(2);
  });
  it('Тестирование метода приведения к строке с функцией по умолчанию', () => {
    const node = new LinkedListNode(1);
    const node2 = new LinkedListNode('test');
    expect(node.toString()).toBe('1');
    expect(node2.toString()).toBe('test');
  });
  it('Тестирование метода приведения к строке с кастомной функцией', () => {
    const nodeValue = { value: 1, key: 'test' };
    const node = new LinkedListNode({ value: 1, key: 'test' });
    const toStringCallback = (value: typeof nodeValue) => `value: ${value.value}, key: ${value.key}`;

    expect(node.toString(toStringCallback)).toBe('value: 1, key: test');
  });
});
