import React, {useState} from 'react';
import date from 'date-and-time';

export type SleepCycleQuery = {
  wakeTime: string,
  sleepTime: string
  method: "to" | "from"
}

export type SleepCycleResult = {
  wakeTimeArray: string[],
  sleepTimeArray: string[],
  message: string
}

const useCalculateCycle = (query: SleepCycleQuery): SleepCycleResult => {
  // ? maybe extract state to here
  // const [ currentSleepTimes, setCurrentSleepTimes ] = useState<SleepCycleResult>({
  //   sleepTimeArray: [],
  //   message: ""
  // });

  // first .parse(queryTime, format string) the input, returns Date obj
  // then .addMinutes(dateObj, minutes) from the Date obj, returns Date obj
  // then .format that dateobj to turn it back to a string
  // 
  const pattern = date.compile("hh:mm A");
  // 
  // const one_cycle = date.addMinutes(now, 90) - 1 hour 30 min - red
  // const two_cycle = date.addMinutes(now, 180) - 3 hours - orange
  // const three_cycle = date.addMinutes(now, 270) - 4 hours 30 minutes - yellow
  // const four_cycle = date.addMinutes(now, 360) - 6 hours - yellow green
  // const five_cycle = date.addMinutes(now, 450) - 7 hours 30 minutes - green
  // const six_cycle = date.addMinutes(now, 540) - 9 hours - green
  // const seven_cycle = date.addMinutes(now, 630) - 10 hours 30 minutes - green
  // 
  // need an array of times (strings)
  let inputTime = date.parse(query.sleepTime, pattern);
  let addCycle1 = date.addMinutes(inputTime, 90);
  let addCycle2 = date.addMinutes(inputTime, 180);
  let addCycle3 = date.addMinutes(inputTime, 270);
  let addCycle4 = date.addMinutes(inputTime, 360);
  let addCycle5 = date.addMinutes(inputTime, 450);
  let addCycle6 = date.addMinutes(inputTime, 540);
  let addCycle7 = date.addMinutes(inputTime, 630);

  let inputTime2 = date.parse(query.wakeTime, pattern);
  let subCycle1 = date.addMinutes(inputTime2, -90);
  let subCycle2 = date.addMinutes(inputTime2, -180);
  let subCycle3 = date.addMinutes(inputTime2, -270);
  let subCycle4 = date.addMinutes(inputTime2, -360);
  let subCycle5 = date.addMinutes(inputTime2, -450);
  let subCycle6 = date.addMinutes(inputTime2, -540);
  let subCycle7 = date.addMinutes(inputTime2, -630);


  // let timeString1 = date.format(addCycle, pattern);



  return {
    wakeTimeArray: [
      date.format(addCycle1, pattern),
      date.format(addCycle2, pattern),
      date.format(addCycle3, pattern),
      date.format(addCycle4, pattern),
      date.format(addCycle5, pattern),
      date.format(addCycle6, pattern),
      date.format(addCycle7, pattern),
    ],
    sleepTimeArray: [
      date.format(subCycle1, pattern),
      date.format(subCycle2, pattern),
      date.format(subCycle3, pattern),
      date.format(subCycle4, pattern),
      date.format(subCycle5, pattern),
      date.format(subCycle6, pattern),
      date.format(subCycle7, pattern),
    ],
    message: "seven cycles please!"
  };
}

export default useCalculateCycle;