/** Функция для линейного поиска элемента в массиве */
export default function linearSearch<T>(array: T[], wanted: T): boolean {
  return array.includes(wanted);
}