export type MeterReadingSource = "estimated" | "customer";

export interface MeterReading {
  value: number;
  source: MeterReadingSource;
}
