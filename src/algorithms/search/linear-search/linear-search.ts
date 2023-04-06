/** Функция для линейного поиска элемента в массиве */
export default function linearSearch<T>(array: T[], wanted: T): number {
  return array.indexOf(wanted);
}