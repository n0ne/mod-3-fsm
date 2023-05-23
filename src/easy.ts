/**
 * A simple function that parses the input string in base 2 and returns the remainder 
 * after division by 3.
 * 
 * @param input binary string
 * @returns remainder of division by 3 
 */
export function mod3easy(input: string): number {
    const pattern = /^[01]+$/;

    if(!input) return 0;
    if(!pattern.test(input)) {
        throw new Error(`Illegal char in ${input}`);
    }

    const num = parseInt(input, 2);

    return num % 3;
}
  