import { ModuloThreeFSM } from './ModuloThreeFSM';
import { transitions } from './common';

const [S0, S1, S2] = [0, 1, 2];
const mod3FSM = new ModuloThreeFSM({
  states: [S0, S1, S2],
  alphabet: ["0", "1"],
  initialState: S0,
  finalStates: [S0, S1, S2],
  transitions: transitions,
});

if(process.argv && process.argv.length > 2) {
    const reminder = mod3FSM.parseInput(process.argv[2])
    console.log(`Remainder after dividing by 3 is ${reminder}`)
} else {
    console.log('Please provide input binary string')
}
