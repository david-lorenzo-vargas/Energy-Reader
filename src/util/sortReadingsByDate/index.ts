import { MeterReading } from "../../types";

export const sortReadingsByDate = (readings: MeterReading[]) => readings.sort((a: MeterReading, b: MeterReading) => b.date.getTime() - a.date.getTime());