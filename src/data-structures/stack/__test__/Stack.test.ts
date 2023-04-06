import Stack from '../Stack';

describe('Тестирование класса Stack', () => {
  it('Создание структуры Stack', () => {
    const stack = new Stack<number>();
    expect(stack).not.toBeNull();
    expect(stack.peek()).toBeNull();
    expect(stack.toArray()).toEqual([]);
    expect(stack.toString()).toBe('');
  });

  it('Добавление данных в Stack', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    expect(stack.toArray()).toEqual([1, 2]);
    expect(stack.toString()).toBe('1,2');
  });

  it('Получение верхнего элемента Stack', () => {
    const stack = new Stack<number>();
    expect(stack.peek()).toBeNull();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2);
  });


  it('Удаление элемента из Stack', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
    expect(stack.toArray()).toEqual([]);
    expect(stack.toString()).toBe('');
  });

  it('Операции push/pop с objects', () => {
    const stack = new Stack<{ key: string; value: string; }>();
    stack.push({ value: 'test1', key: 'key1' });
    stack.push({ value: 'test2', key: 'key2' });
    const stringifier = (value: { key: string; value: string; }) => `${value.key}:${value.value}`;
    expect(stack.toString(stringifier)).toBe('key1:test1,key2:test2');
    expect(stack.pop()?.value).toBe('test2');
    expect(stack.pop()?.value).toBe('test1');
  });
});
