## Modulo Three

This little application gives several options for finding the remainder of division by 3:

- ModuloThreeFSM: API library implements the ‘mod-three’ procedure. Available methods:
  1. getters and setters for states, alphabet, initial state, final state and transitions object
  2. parseInput(): method that returns the remainder of division by 3 of the input binary string
  3. nextState(): a method that returns the next state of the FSM depending on the passed state and the incoming value
- easy: converts a string to a number and returns the remainder after division by 3
- standart: implement a state transition algorithm to implement the‘mod-three’ procedure
- advanced: hardcoded version of finite automaton (FA) is a 5-tuple


#### To run it localy

1. Clone GitHub repo [Modulo Three](git@github.com:n0ne/mod-3-fsm.git)
2. `cd mod-3-fsm`
3. `npm install`
4. `npm run test:all`

#### Result of the last command
<img width="1000" alt="Screenshot 2023-05-22 at 23 42 29" src="https://github.com/n0ne/mod-3-fsm/assets/783906/03ca493b-3882-474f-9ca5-87e63e90ff1f">



#### Test each version separately

You can also run tests separately for each option:

- ModuloThreeFSM: `npm run test:api`
- easy: `npm run test:easy`
- standart: `npm run test:std`
- advanced: `npm run test:adv`