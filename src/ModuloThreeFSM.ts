import { TransitionType } from "./common";


type ModuloThreeFSMProps = {
  states: number[];
  alphabet: string[];
  initialState: number;
  finalStates: number[];
  transitions: TransitionType;
}

/**
 * Class for creating an FSM to calculate the remainder of division by 3
 */
export class ModuloThreeFSM {
  private _states: number[];
  private _alphabet: string[];
  private _initialState: number;
  private _finalStates: number[];
  private _transitions: TransitionType;

  /**
   * Constructor for creating a state machine with the given properties.
   * @param {ModuloThreeFSMProps} props   - object with state machine properties
   * @param {number[]} props.states       - array of state machine states (Q)
   * @param {string[]} props.alphabet     - array of input alphabet characters (Σ)
   * @param {number} props.initialState   - the initial state of the state machine (q0)
   * @param {number[]} props.finalStates  - array of final states for the state machine (F)
   * @param {Record<string, Record<string, number>>} props.transitions - object with a state machine transitions
   */
  constructor({ states, alphabet, initialState, finalStates, transitions }: ModuloThreeFSMProps) {

    this.checkArray('states', states, 'number');
    this.checkArray('alphabet', alphabet, 'string');
    this.checkNumber('initialState', initialState);
    this.checkArray('finalStates', finalStates, 'number');
    this.checkObject('transitions', transitions);

    this._states = states;
    this._alphabet = alphabet;
    this._initialState = initialState;
    this._finalStates = finalStates;
    this._transitions = transitions;
  }

  /**
    * Parses the input string and returns the remainder after division by 3 (δ)
    * @param {string} input - input binary string to parse.
    * @returns {number}     - remainder of dividing the input string by 3, or -1 if the input string is invalid.
    */
  public parseInput(input: string): number {
    let currentState: number = this._initialState;

    if (!input) return 0;

    for (let char of input) {
      if (!this._alphabet.includes(char)) {
        throw new Error("Non-valid char: " + char);
      }
      currentState = this.makeTransition(currentState, char);
    }

    const remainder: number = this._finalStates.includes(currentState) ? currentState : -1;

    return remainder;
  }

  /**
   * Getter for state machine states (Q)
   */
  public get states(): number[] {
    return this._states;
  }

  /**
   * Setter for state machine states (Q)
   */
  public set states(states: number[]) {
    this.checkArray('states', states, 'number');
    this._states = states;
  }

  /**
   * Getter for state machine input alphabet characters (Σ)
   */
  public get alphabet() {
    return this._alphabet;
  }

  /**
   * Setter for state machine input alphabet characters (Σ)
   */
  public set alphabet(alphabet: string[]) {
    this.checkArray('alphabet', alphabet, 'string');
    this._alphabet = alphabet;
  }

  /**
   * Getter for finalStates machine states (F)
   */
  public get finalStates(): number[] {
    return this._finalStates;
  }

  /**
   * Setter for finalStates machine states (F)
   */
  public set finalStates(finalStates: number[]) {
    this.checkArray('finalStates', finalStates, 'number');
    this._finalStates = finalStates;
  }

  /**
   * Getter for initialState machine states (q0)
   */
  public get initialState() {
    return this._initialState;
  }

  /**
   * Setter for initialState machine states (q0)
   */
  public set initialState(initialState: number) {
    this.checkNumber('initialState', initialState);
    this._initialState = initialState;
  }

  /**
   * Getter for object with a state machine transition
   */
  public get transitions() {
    return this._transitions;
  }

  /**
   * Setter for object with a state machine transition
   */
  public set transitions(transitions: TransitionType) {
    this.checkObject('transitions', transitions);
    this._transitions = transitions;
  }

  /**
  * Performs a transition from the current state based on the input character.
  * @param {number} currentState - current state of the state machine.
  * @param {string} char - input character to jump to.
  * @returns {number} next state of the state machine after the transition.
  */
  private makeTransition(currentState: number, char: string): number {
    return this._transitions[currentState][char];
  }

  /**
  * Checking an array containing elements of a specific type
  * @param {string} name - name of the array to display in the error message.
  * @param {any[]} array - array to check.
  * @param {any} type    - type of array elements to check.
  * 
  * @throws {Error} If the array is empty or its elements do not match the given type.
  */
  private checkArray(name: string, array: any[], type: any) {
    if (!Array.isArray(array) || !array.length || !array.every(el => typeof el === type)) {
      throw new Error(`Missing or wrong type of ${name}`);
    }
  }

  /**
  * Checks if a value is a numeric type.
  * @param {string} name  - name of the value to display in the error message.
  * @param {number} value - value to check.
  * 
  * @throws {Error} If the value is not a number or NaN.
  */
  private checkNumber(name: string, value: number) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new Error(`Missing ${name} or it is not a number`);
    }
  }

  /**
  * Checks the value is the object.
  * @param {string} name  - name of the value to display in the error message.
  * @param {Object} value - value to check.
  * 
  * @throws {Error} If the value is not an object or is an empty object.
  */
  private checkObject(name: string, value: Object) {
    if (typeof value !== 'object' || value === null || Object.keys(value).length === 0) {
      throw new Error(`Missing ${name} or empty object`);
    }
  }
}
