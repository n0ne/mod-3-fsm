import { transitions } from "./common";

/**
 * @param input binary string
 * @returns remainder of division by 3
 */
export function mod3adv(input: string): number {
  const [S0, S1, S2] = [0, 1, 2];
  const states: number[] = [S0, S1, S2];
  const validSymbols: string[] = ["0", "1"];
  const initialState: number = S0;
  const finalStates: number[] = [states[0], states[1], states[2]];

  let currentState: number = initialState;

  if(!input) return 0;

  for (let char of input) {
    if (!validSymbols.includes(char)) {
      throw new Error("Non-valid char: " + char);
    }
    currentState = makeTransition(currentState, char);
  }

  const remainder: number = finalStates.includes(currentState) ? currentState : -1;

  return remainder;
}

/**
 * @param currentState current state of FSM
 * @param char current char in the input
 * @returns next state of FSM
 */
function makeTransition(currentState: number, char: string): number {
  return transitions[currentState][char];
}