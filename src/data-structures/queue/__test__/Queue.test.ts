import Queue from '../Queue';

describe('Тестирование класса Queue', () => {
  it('Добавление элементов в очередь', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.toString()).toEqual('1,2,3,4');
  });

  it('Удаление элементов из очереди', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.toString()).toEqual('1,2,3,4');
    expect(queue.dequeue()).toEqual(1);
    expect(queue.toString()).toEqual('2,3,4');
    expect(queue.dequeue()).toEqual(2);
    expect(queue.toString()).toEqual('3,4');
    expect(queue.dequeue()).toEqual(3);
    expect(queue.toString()).toEqual('4');
  });
});
