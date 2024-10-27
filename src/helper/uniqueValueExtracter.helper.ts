
/**
 * Extracts unique values from an array of objects based on a specified key.
 *
 * @template T - The type of objects in the array.
 * @template K - The key in the objects to extract unique values from.
 * @param {T[]} data - The array of objects to extract unique values from.
 * @param {K} key - The key to extract unique values by.
 * @returns {(string[] | number[])} An array of unique values, either strings or numbers.
 */
export const extractUniqueValuesHandler = <T, K extends keyof T>(data: T[], key: K): string[] | number[] => {
  const uniqueValues = [...new Set(data.map(item => item[key]))];
  return typeof uniqueValues[0] === 'string' ? uniqueValues as string[] : uniqueValues as number[];
};