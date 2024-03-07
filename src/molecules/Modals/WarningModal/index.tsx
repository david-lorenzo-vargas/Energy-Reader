import { ReactElement } from "react";

import Modal from "../../../atoms/Modal";
import Button from "../../../atoms/Button";

const WarningModal = ({
  mounted,
  onCloseWarningModal,
  onAcceptNewReading,
  reading,
}: Props): ReactElement => {
  return (
    <Modal
      mounted={mounted}
      onClose={onCloseWarningModal}
    >
      <div className="flex flex-col items-center justify-between">
        <div className="mb-10">
          <span className="text-darkBlueGray text-lg">
            Are you sure you want to add
          </span>
          <span className="mx-2 text-darkBlueGray text-xl font-bold">
            {reading}
          </span>
          <span className="text-darkBlueGray text-lg">
            as a new reading?
          </span>
        </div>
        <div className="-mx-2 flex flex-row items-center">
          <div className="px-2">
            <Button
              type="button"
              id="cancelAddReadingButton"
              onClick={onCloseWarningModal}
              border="border border-4 border-darkBlueGray"
              rounded="rounded-3xl"
              padding="px-10 py-2"
            >
              <span className="text-lg text-darkBlueGray">
                Cancel
              </span>
            </Button>
          </div>
          <div className="px-2">
            <Button
              type="button"
              id="acceptAddReadingButton"
              rounded="rounded-3xl"
              padding="px-10 py-2"
              bgColour="bg-orange"
              onClick={onAcceptNewReading}
            >
              <span className="text-lg text-white">
                Accept
              </span>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

interface Props {
  mounted: boolean;
  onCloseWarningModal: () => void;
  onAcceptNewReading: () => void;
  reading: string;
}

export default WarningModal;
