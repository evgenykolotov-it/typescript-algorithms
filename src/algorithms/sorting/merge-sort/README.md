# Сортировка слиянием

В информатике сортировка слиянием (также часто пишется mergesort) - эффективный, универсальный, алгоритм сортировки на основе сравнения. 
Большинство реализаций производит стабильную сортировку, что означает, что реализация сохраняет порядок ввода одинаковых элементов в 
отсортированном массиве. Сортировка слиянием - это алгоритм «разделяй и властвуй», который был изобретен Джоном фон Нейманом в 1945 году.

Пример сортировки слиянием. Сначала разделите список на наименьший блок (1 элемент), затем сравните каждый элемент со смежным списком, 
чтобы отсортировать и объединить два соседних списка. Наконец все элементы отсортированы.

![Algorithm Visualization](https://media.proglib.io/posts/2021/09/29/83b221f5ec38fa1aa3f940df95100179.gif)
![Algorithm Visualization](https://media.proglib.io/posts/2021/09/29/b3a3799f0e171f1fe85b2af7ea7a2836.gif)

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

Алгоритм рекурсивной сортировки слиянием, используемый для сортировки массива из 7 целочисленныч значений. Вот шаги, которые предпримет 
человек, чтобы эмулировать сортировку слиянием (сверху вниз).

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg)

## Сложность

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |

## Ссылки

- [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
- [YouTube](https://www.youtube.com/watch?v=KF2j-9iSf4Q&index=27&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
