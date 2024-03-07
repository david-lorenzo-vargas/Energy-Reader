import { ReactElement } from "react";

import Modal from "../../../atoms/Modal";
import Reading from "../../Reading";

import { MeterReading } from "../../../types";

const SeeAllReadingsModal = ({
  onToggleSeeAll,
  mounted,
  readings,
}: Props): ReactElement => {
  return (
    <Modal
      onClose={onToggleSeeAll}
      mounted={mounted}
      title="Previous meter readings"
      titleClassNames="text-lg text-darkBlueGray font-semibold"
    >
      <div className="overflow-y-auto h-500 md:h-800">
        {readings.map((r: MeterReading) => (
          <div key={r.uuid} className="mb-5">
            <Reading
              date={r.date}
              value={r.value}
              source={r.source}
            />
          </div>
        ))}
      </div>
    </Modal>
  );
};

interface Props {
  onToggleSeeAll: () => void;
  mounted: boolean;
  readings: MeterReading[];
}

export default SeeAllReadingsModal;
