// import React, {useState} from 'react';
import date from 'date-and-time';

export type SleepCycleQuery = {
  time: string,
  method: "asleepBy" | "wakeUpAt"
}

export type SleepCycleResult = {
  timeArray: string[],
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
  let inputTime: Date = date.parse(query.time, pattern);
  let addCycle0: Date;
  let addCycle1: Date;
  let addCycle2: Date;
  let addCycle3: Date;
  let addCycle4: Date;
  let addCycle5: Date;
  let addCycle6: Date;
  let message: string;

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

  if(query.method === "asleepBy"){
    addCycle0 = date.addMinutes(inputTime, 90);
    addCycle1 = date.addMinutes(inputTime, 180);
    addCycle2 = date.addMinutes(inputTime, 270);
    addCycle3 = date.addMinutes(inputTime, 360);
    addCycle4 = date.addMinutes(inputTime, 450);
    addCycle5 = date.addMinutes(inputTime, 540);
    addCycle6 = date.addMinutes(inputTime, 630);
    message = "You should wake up at one of these times!"
  } else { // * query.method === "wakeUpAt"
    addCycle0 = date.addMinutes(inputTime, -90);
    addCycle1 = date.addMinutes(inputTime, -180);
    addCycle2 = date.addMinutes(inputTime, -270);
    addCycle3 = date.addMinutes(inputTime, -360);
    addCycle4 = date.addMinutes(inputTime, -450);
    addCycle5 = date.addMinutes(inputTime, -540);
    addCycle6 = date.addMinutes(inputTime, -630);
    message = "You should be asleep by one of these times!"
  }

  return {
    timeArray: [
      date.format(addCycle0, pattern),
      date.format(addCycle1, pattern),
      date.format(addCycle2, pattern),
      date.format(addCycle3, pattern),
      date.format(addCycle4, pattern),
      date.format(addCycle5, pattern),
      date.format(addCycle6, pattern),

    ],
    message
  }

  // let inputTime2 = date.parse(query.time, pattern);


  // let timeString1 = date.format(addCycle, pattern);



  // return {
  //   wakeTimeArray: [
  //     date.format(addCycle1, pattern),
  //     date.format(addCycle2, pattern),
  //     date.format(addCycle3, pattern),
  //     date.format(addCycle4, pattern),
  //     date.format(addCycle5, pattern),
  //     date.format(addCycle6, pattern),
  //     date.format(addCycle7, pattern),
  //   ],
  //   sleepTimeArray: [
  //     date.format(subCycle1, pattern),
  //     date.format(subCycle2, pattern),
  //     date.format(subCycle3, pattern),
  //     date.format(subCycle4, pattern),
  //     date.format(subCycle5, pattern),
  //     date.format(subCycle6, pattern),
  //     date.format(subCycle7, pattern),
  //   ],
  //   message: "seven cycles please!"
  // };
}

export default useCalculateCycle;