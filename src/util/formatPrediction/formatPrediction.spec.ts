import { formatPrediction } from ".";
import { DIGIT_LENGTH } from "../constants";

describe('formatPrediction', () => {
  it.each`
    input                         | output
    ${8}                          | ${'00008'}
    ${80}                         | ${'00080'}
    ${800}                        | ${'00800'}
    ${8000}                       | ${'08000'}
    ${80000}                      | ${'80000'}
  `('should return a 5 digit $output for $input', ({input, output}: {input: number, output: string}) => {
    const res = formatPrediction(input);

    expect(res).toBe(output);
  });

  it('should throw an error if input is more than 5 digits', () => {
    expect(() => {
      formatPrediction(800000);
    }).toThrow(`Maximum digit length is ${DIGIT_LENGTH}`);
  });
});