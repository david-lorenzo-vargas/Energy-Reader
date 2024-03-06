import { useState } from "react";
import { MeterReading } from "./types";
import "./styles.css";

export default function App() {
  const [readings, setReadings] = useState<MeterReading[]>([]);

  const readingListItems = readings.map((reading) => (
    <li key={reading.value}>
      {reading.value} - {reading.source}
    </li>
  ));

  return (
    <div className="App">
      <h1>Meter Readings</h1>
      <p>Enter a new meter reading:</p>
      <input className="input"></input>
      <button>Submit</button>
      <p className="error" style={{ display: "none" }}>
        This is an invalid meter reading.
      </p>
      <h2>Predicted usage next month</h2>
      <p>Coming soon</p>
      <h2>Previous meter readings</h2>
      <ul>{readingListItems}</ul>
    </div>
  );
}
