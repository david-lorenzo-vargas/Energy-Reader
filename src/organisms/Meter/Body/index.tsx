import { ChangeEvent, ReactElement } from "react";

import Input from "../../../atoms/Input";
import Pad from "../../../molecules/Pad";
import Button from "../../../atoms/Button";

const Body = ({
  currentReading,
  onInputChange,
  onPadButton,
  onRemovePadButton,
  onRemoveAllPadButton,
  onAddNewReading,
  addButtonIsDisabled,
  errorMessage,
}: Props): ReactElement => {
  return (
    <div className="border border-2 border-darkGray rounded-lg w-full pb-3 md:p-10">
      <div className="w-full mb-5 p-2 md:p-0">
        <Input
          value={currentReading}
          onChange={onInputChange}
          inputName="readingInput"
          placeholder="00000"
          bgColour="bg-beige"
          errorMessage={errorMessage}
        />
      </div>
      <div className="flex flex-row relative">
        <Pad
          onPadButton={onPadButton}
          onRemovePadButton={onRemovePadButton}
          onRemoveAllPadButton={onRemoveAllPadButton}
        />
      </div>
      <div className="px-2 lg:p-0">
        <Button
          rounded="rounded-full"
          padding="px-5"
          size="h-10 md:h-16 w-full"
          type="button"
          id="addButton"
          bgColour="bg-darkBlueGray"
          onClick={onAddNewReading}
          disabled={addButtonIsDisabled || !!errorMessage}
        >
          <span className="text-white font-semibold text-xl">
            Add
          </span>
        </Button>
      </div>
    </div>
  );
};

interface Props {
  currentReading: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPadButton: (n: number) => void;
  onRemovePadButton: () => void;
  onRemoveAllPadButton: () => void;
  onAddNewReading: () => void;
  addButtonIsDisabled: boolean;
  errorMessage?: string;
}

export default Body;
