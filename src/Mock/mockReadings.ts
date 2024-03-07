import { MeterReading, MeterReadingSourceEnum } from "../types";

export const mockReadings = [
  {
    uuid: 'ascwe3ref34345',
    value: '02300',
    source: MeterReadingSourceEnum.customer,
    date: new Date('2024-03-04T00:27:49.868Z'),
  },
  {
    uuid: 'bsfgrwt6uwrthw',
    value: '02010',
    source: MeterReadingSourceEnum.customer,
    date: new Date('2024-02-20T00:27:49.868Z'),
  },
  {
    uuid: 'qr135yegqethq',
    value: '01412',
    source: MeterReadingSourceEnum.customer,
    date: new Date('2024-01-09T00:27:49.868Z'),
  },
  {
    uuid: '54y4thwrthrwhw',
    value: '01110',
    source: MeterReadingSourceEnum.customer,
    date: new Date('2023-12-03T00:27:49.868Z'),
  },
  {
    uuid: 'wert24hwrthrthwrt',
    value: '00810',
    source: MeterReadingSourceEnum.customer,
    date: new Date('2023-08-13T00:27:49.868Z'),
  },
  {
    uuid: 'eqrgq4tyrthqth',
    value: '00670',
    source: MeterReadingSourceEnum.customer,
    date: new Date('2023-04-10T00:27:49.868Z'),
  },
  {
    uuid: 'sdefwqergeqrgteqgt',
    value: '00400',
    source: MeterReadingSourceEnum.customer,
    date: new Date('2022-02-20T00:27:49.868Z'),
  },
  {
    uuid: 'ujrtujuyutluil',
    value: '00150',
    source: MeterReadingSourceEnum.customer,
    date: new Date('2021-04-10T00:27:49.868Z'),
  },
  {
    uuid: 'ty647o784ryhwrjyw2ruil',
    value: '00123',
    source: MeterReadingSourceEnum.customer,
    date: new Date('2021-03-10T00:27:49.868Z'),
  },
  {
    uuid: 'q344586iyjfgjukio98',
    value: '00050',
    source: MeterReadingSourceEnum.customer,
    date: new Date('2020-02-10T00:27:49.868Z'),
  },
];

export const fetchData = () => {
  return new Promise((resolve: (
    value: MeterReading[]) => void, _reject: (reason: any) => void) => {
      setTimeout(() => {
          resolve(mockReadings);
      }, 1000);
  });
};