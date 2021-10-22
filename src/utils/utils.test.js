import {formatTime} from './formatTime';
import {formatDate} from './formatDate';

describe('utils', () => {
  describe('formatTime', () => {
    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });

    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });

    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });

    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });
  });

  describe('formatDate', () => {
    it('should return null if there are no args', () => {
      expect(formatDate()).toBe(null);
    });

    it('should return null args are not numbers', () => {
      expect(formatDate('def', 'ghi')).toBe(null);
      expect(formatDate(() => {})).toBe(null);
    });

    it('should return null if args are lower than zero', () => {
      expect(formatDate(-1, -1)).toBe(null);
      expect(formatDate(-2, -2)).toBe(null);
    });

    it('should return date proper date format', () => {
      expect(formatDate(1, 0)).toBe('01-01');
      expect(formatDate(11, 9)).toBe('11-10');
      expect(formatDate(30, 11)).toBe('30-12');
    });
  });
});