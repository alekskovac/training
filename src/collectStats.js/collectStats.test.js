import { collectStats }from './collectStats';

describe('collectStats method works as expected', () => {

  test("should collect stats from array of strings", () => {
    const arrOfStrings = ['a', 'b', 'c', 'a', 'b', 'c', 'd'];
    const obj = {'a': [0, 3], 'b': [1, 4], 'c': [2, 5], 'd': [6]};
    const result = collectStats(arrOfStrings);
    expect(result).toMatchObject(obj);
  });
});