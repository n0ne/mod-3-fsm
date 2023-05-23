import { mod3adv } from '../src';

describe('Advanced version of Modulo Three Finite State Machine(FSM)', () => {
  test('should return 0 for empty string', () => {
    expect(mod3adv('')).toBe(0);
  });

  test('should throw error for a string with wrong characters', () => {
    expect(() => {
      mod3adv('01210');
    }).toThrow(/Non-valid char: 2/);
    expect(() => {
      mod3adv('01b10');
    }).toThrow(/Non-valid char: b/);
  });

  test('should return 0 for a string that is divisible by 3 without a remainder (numbers 3, 51, 477)', () => {
    expect(mod3adv('011')).toBe(0);       // number 3
    expect(mod3adv('110011')).toBe(0);    // munber 51
    expect(mod3adv('111011101')).toBe(0); // number 477
  });

  test('should return 1 for a string whose modulo 3 is 1 (numbers 4, 172, 304)', () => {
    expect(mod3adv('100')).toBe(1);       // number 4
    expect(mod3adv('10101100')).toBe(1);  // number 172
    expect(mod3adv('100110000')).toBe(1); // number 304
  });

  test('should return 2 for a string whose modulo 3 is 2 (numbers 8, 62, 182)', () => {
    expect(mod3adv('1000')).toBe(2);      // number 8
    expect(mod3adv('111110')).toBe(2);    // number 62
    expect(mod3adv('10110110')).toBe(2);  // number 182
  });
});
