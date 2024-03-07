import { ReactElement, useMemo } from "react";

import Button from "../../atoms/Button";

import { MeterReading, MeterReadingSourceEnum } from "../../types";

import { predictedUsage } from "../../util/predictedUsage";
import { formatPrediction } from "../../util/formatPrediction";

const Prediction = ({
  readings,
  onAddPrediction,
}: Props): ReactElement => {
  const getReadingPrediction = useMemo(() => {
    const readingsValues = readings.map((r: MeterReading) => Number(r.value));

    const prediction = predictedUsage(readingsValues);

    return formatPrediction(prediction);
  }, [readings]);

  return (
    <div className="px-3 pb-3 md:px-0 md-pb-0">
      <div
        className="border-b border-darkBlueGray md:w-1/2 py-5 mb-5 flex flex-row items-center justify-between"
      >
        <span className="text-darkBlueGray font-semibold">
          Predicted usage next month
        </span>
        <span className="text-darkBlueGray font-semibold text-xl">
          {getReadingPrediction}
        </span>
      </div>
      <div className="md:w-1/2">
        <Button
          type="button"
          id="addPredictionButton"
          bgColour="bg-orange"
          size="w-full"
          rounded="rounded-3xl"
          padding="px-10 py-2"
          onClick={() => onAddPrediction({
            value: getReadingPrediction.toString(),
            date: new Date(),
            source: MeterReadingSourceEnum.estimated,
            uuid: ''
          })}
        >
          <span className="text-darkBlueGray font-semibold text-lg">
            Add predicted reading
          </span>
        </Button>
      </div>
    </div>
  );
};

interface Props {
  readings: MeterReading[];
  onAddPrediction: (m: MeterReading) => void;
}

export default Prediction;
