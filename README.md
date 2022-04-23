# Алгоритмы и структуры данных на TypeScript.

В этом репозитории содержатся базовые TypeScript-примеры многих популярных алгоритмов и структур данных. Для каждого алгоритма и 
структуры данных есть свой файл README с соответствующими пояснениями и ссылками на материалы для дальнейшего 
изучения (в том числе и ссылки на видеоролики в YouTube).

## Структуры данных

Структура данных (англ. data structure) — программная единица, позволяющая хранить и обрабатывать множество однотипных и/или логически 
связанных данных в вычислительной технике. Для добавления, поиска, изменения и удаления данных структура данных предоставляет некоторый 
набор функций, составляющих её интерфейс.

`A` - Базовый уровень, `B` - Продвинутый уровень

* `A` [Однонаправленный связный список](src/data-structures/linked-list)
* `A` [Двунаправленный связный список](src/data-structures/double-linked-list)
* `A` [Стек](src/data-structures/stack)

## Алгоритмы

Алгоритмы - это наборы команд, способствующие эффективному программированию. Они объясняют, как сортировать записи, искать элементы, 
рассчитывать числовые значения, находить кратчайший путь между двумя точками на карте, определять максимально возможный поток 
информации по сети и т.д.

`A` - Базовый уровень, `B` - Продвинутый уровень

## Асимптопатическая сложность алгоритма

**Асимптопатическая сложность (производительность)** - определяется функцией, которая указывает, насколько ухудшается работа алгоритма 
с усложнением поставленной задачи. Такую функцию записывают в круглых скобках, предваряя прописной буквой О.

![Big O Graphs](./src/assets/big-o-graph.png)

### Сложности операций в структурах данных

| Структура данных           | Получение | Поиск     | Вставка   | Удаление  | Комментарии |
| -------------------------- | :-------: | :-------: | :-------: | :-------: | :---------- |
| **Массив**                 | 1         | n         | n         | n         |             |
| **Связный список**         | n         | n         | 1         | n         |             |
| **Стек**                   | n         | n         | 1         | 1         |             |
