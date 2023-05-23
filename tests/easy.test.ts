import { mod3easy } from '../src';

describe('Easy version of Modulo Three', () => {
  test('should return 0 for empty string', () => {
    expect(mod3easy('')).toBe(0);
  });

  test('should throw error for a string with wrong characters', () => {
    expect(() => {
      mod3easy('01210');
    }).toThrow(/Illegal char in 01210/);
    expect(() => {
      mod3easy('01b10');
    }).toThrow(/Illegal char in 01b10/);
  });

  test('should return 0 for a string that is divisible by 3 without a remainder', () => {
    expect(mod3easy('011')).toBe(0);       // number 3
    expect(mod3easy('110011')).toBe(0);    // munber 51
    expect(mod3easy('111011101')).toBe(0); // number 477
  });

  test('should return 1 for a string whose modulo 3 is 1', () => {
    expect(mod3easy('100')).toBe(1);       // number 4
    expect(mod3easy('10101100')).toBe(1);  // number 172
    expect(mod3easy('100110000')).toBe(1); // number 304
  });

  test('should return 2 for a string whose modulo 3 is 2', () => {
    expect(mod3easy('1000')).toBe(2);      // number 8
    expect(mod3easy('111110')).toBe(2);    // number 62
    expect(mod3easy('10110110')).toBe(2);  // number 182
  });
});