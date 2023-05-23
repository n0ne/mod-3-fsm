import { ModuloThreeFSM } from '../src';
import { transitions } from '../src/common';

describe('Test class of Modulo Three Finite State Machine(FSM)', () => {
  let mod3FSM: ModuloThreeFSM;

  beforeEach(() => {
    const [S0, S1, S2] = [0, 1, 2];
    mod3FSM = new ModuloThreeFSM({
      states: [S0, S1, S2],
      alphabet: ["0", "1"],
      initialState: S0,
      finalStates: [S0, S1, S2],
      transitions: transitions,
    });
  });

  describe('test class constructor', () => {
    test('should initialize class correctly', () => {
      expect(mod3FSM.states).toEqual([0, 1, 2]);
      expect(mod3FSM.alphabet).toEqual(["0", "1"]);
      expect(mod3FSM.initialState).toEqual(0);
      expect(mod3FSM.transitions).toEqual(transitions);
    });
  })

  describe('test wrong class initialisation', () => {
    test('should throw error if state is missing or wrong type', () => {
      expect(() => {
        new ModuloThreeFSM({
          states: [],
          alphabet: ["0", "1"],
          initialState: 0,
          finalStates: [0, 1, 2],
          transitions: transitions,
        });
      }).toThrow('Missing or wrong type of states');
    });

    test('should throw error if alphabet is missing or wrong type', () => {
      expect(() => {
        new ModuloThreeFSM({
          states: [0, 1, 2],
          alphabet: [],
          initialState: 0,
          finalStates: [0, 1, 2],
          transitions: transitions,
        });
      }).toThrow('Missing or wrong type of alphabet');
    });

    test('should throw error if initialState is missing or wrong type', () => {
      expect(() => {
        new ModuloThreeFSM({
          states: [0, 1, 2],
          alphabet: ["0", "1"],
          initialState: NaN,
          finalStates: [0, 1, 2],
          transitions: transitions,
        });
      }).toThrow('Missing initialState or it is not a number');
    });

    test('should throw error if finalStates is missing or wrong type', () => {
      expect(() => {
        new ModuloThreeFSM({
          states: [0, 1, 2],
          alphabet: ["0", "1"],
          initialState: 0,
          finalStates: [],
          transitions: transitions,
        });
      }).toThrow('Missing or wrong type of finalStates');
    });

    test('should throw error if transitions is missing or wrong type', () => {
      expect(() => {
        new ModuloThreeFSM({
          states: [0, 1, 2],
          alphabet: ["0", "1"],
          initialState: 0,
          finalStates: [0, 1, 2],
          transitions: {},
        });
      }).toThrow('Missing transitions or empty object');
    });
  })

  describe('test parseInput()', () => {
    test('should return 0 for empty string', () => {
      expect(mod3FSM.parseInput('')).toBe(0);
    });

    test('should throw error for a string with wrong characters', () => {
      expect(() => {
        mod3FSM.parseInput('01210');
      }).toThrow(/Non-valid char: 2/);
      expect(() => {
        mod3FSM.parseInput('01b10');
      }).toThrow(/Non-valid char: b/);
    });

    test('should return 0 for a string that is divisible by 3 without a remainder (numbers 3, 51, 477)', () => {
      expect(mod3FSM.parseInput('011')).toBe(0);       // number 3
      expect(mod3FSM.parseInput('110011')).toBe(0);    // munber 51
      expect(mod3FSM.parseInput('111011101')).toBe(0); // number 477
    });

    test('should return 1 for a string whose modulo 3 is 1 (numbers 4, 172, 304)', () => {
      expect(mod3FSM.parseInput('100')).toBe(1);       // number 4
      expect(mod3FSM.parseInput('10101100')).toBe(1);  // number 172
      expect(mod3FSM.parseInput('100110000')).toBe(1); // number 304
    });

    test('should return 2 for a string whose modulo 3 is 2 (numbers 8, 62, 182)', () => {
      expect(mod3FSM.parseInput('1000')).toBe(2);      // number 8
      expect(mod3FSM.parseInput('111110')).toBe(2);    // number 62
      expect(mod3FSM.parseInput('10110110')).toBe(2);  // number 182
    });
  })
});
