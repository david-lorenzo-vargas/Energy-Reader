import { ReactElement, useCallback, useEffect, useState } from "react";

import Meter from "./organisms/Meter";
import Prediction from "./molecules/Prediction";
import Readings from "./organisms/Readings";
import SeeAllReadingsModal from "./molecules/Modals/SeeAllReadingsModal";
import WarningModal from "./molecules/Modals/WarningModal";

import { MeterReading, MeterReadingSourceEnum } from "./types";

import { fetchData } from "./Mock/mockReadings";

import { sortReadingsByDate } from "./util/sortReadingsByDate";

const App = (): ReactElement => {
  const [previousReadings, setPreviousReadings] = useState<MeterReading[]>([]);
  const [readingsForPrediction, setReadingsForPrediction] = useState<MeterReading[]>([]);

  const [newReading, setNewReading] = useState<MeterReading | undefined>(undefined);

  const [seeAll, setSeeAll] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const res: MeterReading[] = await fetchData();

        const sortedResponse = sortReadingsByDate(res);
        const arrCopy = [...sortedResponse];

        setPreviousReadings(() => sortedResponse);
        setReadingsForPrediction(() => arrCopy.slice(0, 4));
      } catch (error) {
        throw new Error('Oops! there was a problem');
      }
    })();
  }, []);

  const onAddNewReading = useCallback((r: number[]) => {
    const newReading = {
      value: r.join(''),
      date: new Date(),
      source: MeterReadingSourceEnum.customer,
      uuid: '',
    };

    setNewReading(() => newReading);
  }, []);

  const onAddPrediction = useCallback((p: MeterReading) => {
    setNewReading(() => p);
  }, []);

  const onToggleSeeAll = useCallback(() => {
    setSeeAll((a: boolean) => !a);
  }, []);

  const onAcceptNewReading = useCallback(() => {
    if (newReading) {
      setPreviousReadings((p: MeterReading[]) => [newReading, ...p]);
      setReadingsForPrediction(() => {
        const readings = [...previousReadings].slice(0, 3);

        return [newReading, ...readings];
      });
      setNewReading(() => undefined);
    }
  }, [newReading, previousReadings]);

  return (
    <div className="h-screen w-screen md:bg-darkBlueGray md:bg-opacity-40">
      <div className="flex flex-col h-scren md:flex-row w-full justify-center">
        <div className="w-full bg-orange md:bg-transparent flex flex-col items-center py-5">
          <div className="md:w-1/2 w-60P">
            <Meter
              onAddNewReading={onAddNewReading}
              lastReading={Number(previousReadings[0]?.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full md:w-1/2">
            <Readings
              readings={previousReadings}
              onSeeAllReadings={onToggleSeeAll}
            />
          </div>
          <div className="w-full">
            <Prediction
              readings={readingsForPrediction}
              onAddPrediction={onAddPrediction}
            />
          </div>
        </div>
      </div>
      <SeeAllReadingsModal
        onToggleSeeAll={onToggleSeeAll}
        mounted={seeAll}
        readings={previousReadings}
      />
      <WarningModal
        mounted={!!newReading?.hasOwnProperty('value')}
        reading={newReading?.value ?? ''}
        onCloseWarningModal={() => setNewReading(undefined)}
        onAcceptNewReading={onAcceptNewReading}
      />
    </div>
  );
};

export default App;
