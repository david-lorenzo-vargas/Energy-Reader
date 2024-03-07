import {
  ReactElement,
  useState,
  useCallback,
  ChangeEvent,
  useMemo,
  useEffect,
} from "react";

import Header from "./Header";
import Body from "./Body";

import { onlyNumberRegex } from "../../util/regex";
import { DIGIT_LENGTH } from "../../util/constants";

const Meter = ({
  onAddNewReading,
  lastReading,
}: Props): ReactElement => {
  const [currentReading, setCurrentReading] = useState<number[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (currentReading.length) {
      if (currentReading.length < DIGIT_LENGTH) {
        setErrorMessage(() => `Reading must be ${DIGIT_LENGTH} digits long`);
      } else if (Number(currentReading.join('')) < lastReading) {
        setErrorMessage(() => 'The reading must be higher than the last one');
      } else {
        setErrorMessage(() => '');
      }
    } else {
      setErrorMessage(() => '');
    }
  }, [currentReading, lastReading]);

  const onPadButton = useCallback((n: number) => {
    setCurrentReading((r: number[]) => {
      if (r.length === DIGIT_LENGTH) {
        return [...r];
      } else {
        return [...r, n];
      }
    });
  }, []);

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length) {
      if (value.length <= 5) {
        if (onlyNumberRegex.test(value)) {
          setCurrentReading(() => value.split('').map((v: string) => Number(v)));
        }
      }
    } else {
      setCurrentReading(() => []);
    }
  }, []);

  const onRemovePadButton = useCallback(() => {
    setCurrentReading((r: number[]) => {
      if (r.length) {
        const newValue: number[] = r.slice(0, -1);
  
        return newValue;
      } else {
        return [...r];
      }
    })
  }, []);

  const onRemoveAllPadButton = useCallback(() => {
    setCurrentReading(() => []);
  }, []);

  const addButtonIsDisabled = useMemo(() => currentReading.length < DIGIT_LENGTH,[currentReading]);

  return (
    <div className="bg-lightGray w-full rounded-xl p-3 md:p-10 lg:p-5 xl:p-10">
      <div>
        <Header />
      </div>
      <Body
        currentReading={currentReading.join('')}
        onInputChange={onInputChange}
        onPadButton={onPadButton}
        onRemovePadButton={onRemovePadButton}
        onRemoveAllPadButton={onRemoveAllPadButton}
        onAddNewReading={() => {
          onAddNewReading(currentReading);
          setCurrentReading(() => []);
        }}
        addButtonIsDisabled={addButtonIsDisabled}
        errorMessage={errorMessage}
      />
    </div>
  );
};

interface Props {
  onAddNewReading: (c: number[]) => void;
  lastReading: number;
}

export default Meter;
