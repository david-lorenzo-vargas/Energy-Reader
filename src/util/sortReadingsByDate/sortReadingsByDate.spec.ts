import { MeterReading, MeterReadingSourceEnum } from "../../types";
import { sortReadingsByDate } from ".";

const dayOne = new Date("2024-02-10T00:27:49.868Z");
const dayTwo = new Date("2024-02-09T00:27:49.868Z");
const dayThree = new Date("2024-02-08T00:27:49.868Z");

const mockArray = [
  {
    value: "00002",
    source: MeterReadingSourceEnum.customer,
    date: dayTwo,
    uuid: "cf8aa1a0-a03e-5fe5-8a97-c3b734453e58",
  },
  {
    value: "00003",
    source: MeterReadingSourceEnum.customer,
    date: dayOne,
    uuid: "87cd90e3-6ce8-5632-bad1-c37f92f14588",
  },
  {
    value: "00001",
    source: MeterReadingSourceEnum.customer,
    date: dayThree,
    uuid: "750b0f6f-49ea-55ff-8cf6-da571cdd4069",
  },
];

const expectArray = [
  {
    value: "00003",
    source: MeterReadingSourceEnum.customer,
    date: dayOne,
    uuid: "87cd90e3-6ce8-5632-bad1-c37f92f14588",
  },
  {
    value: "00002",
    source: MeterReadingSourceEnum.customer,
    date: dayTwo,
    uuid: "cf8aa1a0-a03e-5fe5-8a97-c3b734453e58",
  },
  {
    value: "00001",
    source: MeterReadingSourceEnum.customer,
    date: dayThree,
    uuid: "750b0f6f-49ea-55ff-8cf6-da571cdd4069",
  },
];

describe("sortReadingByDate", () => {
  it.each`
    array        | expected
    ${mockArray} | ${expectArray}
  `(
    "should expected array match array",
    ({
      array,
      expected,
    }: {
      array: MeterReading[];
      expected: MeterReading[];
    }) => {
      const result = sortReadingsByDate(array);

      expect(result).toMatchObject(expected);
    }
  );
});
