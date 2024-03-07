import { ReactElement } from "react";

import { MeterReadingSourceEnum } from "../../types";

const Reading = ({
  date,
  source,
  value,
}: Props): ReactElement => {
  return (
    <div className="bg-darkBlueGray rounded-xl px-10 py-5">
      <div>
        <span className="text-white text-xs">
          {`source: ${source}`}
        </span>
      </div>
      <div className="flex flex-row items-center justify-between">
        <span className="text-white text-lg">
          {`reading: ${value}`}
        </span>
        <span className="text-white text-sm">
          {date.toDateString()}
        </span>
      </div>
    </div>
  );
};

interface Props {
  date: Date;
  source: MeterReadingSourceEnum;
  value: string;
}

export default Reading;
