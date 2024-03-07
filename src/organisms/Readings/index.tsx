import { ReactElement } from "react";

import Reading from "../../molecules/Reading";
import Button from "../../atoms/Button";

import { MeterReading } from "../../types";

const Readings = ({
  readings,
  onSeeAllReadings,
}: Props): ReactElement => {
  return (
    <div className="w-full px-3 md:px-0">
      <div className="w-full flex flex-row items-center justify-between py-3">
        <span className="text-lg text-darkBlueGray font-semibold">
          Previous meter readings
        </span>
        <Button
          type="button"
          id="seAllReadingsButton"
          onClick={onSeeAllReadings}
        >
          <span className="text-orange">
            See all
          </span>
        </Button>
      </div>
      <div className="w-full h-600 overflow-y-auto">
        {readings.map((r: MeterReading) => (
          <div key={r.uuid} className="mb-5">
            <Reading
              value={r.value}
              date={r.date}
              source={r.source}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface Props {
  readings: MeterReading[];
  onSeeAllReadings: () => void;
}

export default Readings;
