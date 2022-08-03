import { collectStats } from './collectStats.js';

describe('collectStats', () => {
  it('should return an object', () => {
    expect(typeof collectStats([])).toBe('object');
  });
});