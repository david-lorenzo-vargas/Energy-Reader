export enum MeterReadingSourceEnum {
  estimated = 'estimated',
  customer = 'customer',
}

export interface MeterReading {
  value: string;
  source: MeterReadingSourceEnum;
  date: Date;
  uuid: string;
}
