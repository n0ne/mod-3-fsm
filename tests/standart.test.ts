import { mod3standart } from '../src';

describe('Standart version of Modulo Three Finite State Machine(FSM)', () => {
  test('should return 0 for empty string', () => {
    expect(mod3standart('')).toBe(0);
  });

  test('should throw error for a string with wrong characters', () => {
    expect(() => {
        mod3standart('01210');
      }).toThrow(/Non-valid char: 2/);
      expect(() => {
        mod3standart('01b10');
      }).toThrow(/Non-valid char: b/);
  });

  test('should return 0 for a string that is divisible by 3 without a remainder', () => {
    expect(mod3standart('110')).toBe(0);       // number 6
    expect(mod3standart('110110')).toBe(0);    // munber 54
    expect(mod3standart('10100101')).toBe(0);  // number 155
  });

  test('should return 1 for a string whose modulo 3 is 1', () => {
    expect(mod3standart('111')).toBe(1);       // number 7
    expect(mod3standart('10101100')).toBe(1);  // number 172
    expect(mod3standart('11000100')).toBe(1);  // number 196
  });

  test('should return 2 for a string whose modulo 3 is 2', () => {
    expect(mod3standart('1011')).toBe(2);      // number 11
    expect(mod3standart('1000100')).toBe(2);   // number 68
    expect(mod3standart('10010010')).toBe(2);  // number 146
  });
});