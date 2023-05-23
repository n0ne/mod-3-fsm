export type TransitionType = {
  [state: number]: {
    [input: string]: number
  }
}

export const transitions: TransitionType = {
  0: { 0: 0, 1: 1 },
  1: { 0: 2, 1: 0 },
  2: { 0: 1, 1: 2 }
};
