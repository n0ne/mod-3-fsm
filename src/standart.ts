import { transitions } from "./common";

/**
 * @param input binary string
 * @returns remainder of division by 3 
 */
export function mod3standart(input: string): number {
  const validSymbols: string[] = ["0", "1"];
  let currentState = 0;

  if(!input) return 0;

  for (let char of input) {
    if (!validSymbols.includes(char)) {
      throw new Error("Non-valid char: " + char);
    }
    currentState = transitions[currentState][char];
  }

  return currentState;
}