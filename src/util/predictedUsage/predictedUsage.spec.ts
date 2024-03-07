import { predictedUsage } from ".";

describe("predictedUsage", () => {
  it.each`
    array                       | expected
    ${[400, 350, 250, 100]}     | ${500}
    ${[200, 121, 11, 1]}        | ${266}
    ${[100, 30, 20, 10]}        | ${130}
    ${[30, 20, 10, 5]}          | ${38}
    ${[2300, 2010, 1412, 1110]} | ${2697}
  `(
    "should create predictedUsage $expected for array $array",
    ({ array, expected }: { array: number[]; expected: number }) => {
      const result = predictedUsage(array);

      expect(result).toBe(expected);
    }
  );
});
