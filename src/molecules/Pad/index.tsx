import { ReactElement } from "react";

import Button from "../../atoms/Button";
import Delete from "../../icons/Delete";
import Cross from "../../icons/Cross";

export const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Pad = ({
  onPadButton,
  onRemovePadButton,
  onRemoveAllPadButton,
}: Props): ReactElement => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center px-5 py-3 w-full">
      {numbers.map((n: number) => (
        <div key={n} className="mx-2 my-2">
          <Button
            rounded="rounded-full"
            bgColour="bg-orange"
            size="w-6 h-6 md:w-16 md:h-16"
            type="button"
            id={`pad-button-${n}`}
            hoverable
            onClick={() => onPadButton(n)}
          >
            <span className="text-white text-xl">
              {n}
            </span>
          </Button>
        </div>
      ))}
      <button
        type="button"
        className="text-darkBlueGray absolute bottom-3 md:bottom-5 left-8 md:left-12"
        aria-label="removeAllPadButton"
        onClick={onRemoveAllPadButton}
      >
        <Cross size="50" />
      </button>
      <button
        type="button"
        className="text-darkBlueGray absolute bottom-3 md:bottom-5 right-8 md:right-12"
        aria-label="removePadButton"
        onClick={onRemovePadButton}
      >
        <Delete size="50" />
      </button>
    </div>
  );
};

interface Props {
  onPadButton: (n: number) => void;
  onRemovePadButton: () => void;
  onRemoveAllPadButton: () => void;
}

export default Pad;
