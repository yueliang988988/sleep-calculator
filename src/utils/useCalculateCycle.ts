import React, {useState} from 'react';
import date from 'date-and-time';

export type SleepCycleQuery = {
  time: string,
  method: "to" | "from"
}

export type SleepCycleResult = {
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
  let inputTime = date.parse(query.time, pattern);
  let addCycle = date.addMinutes(inputTime, 90);
  let timeString = date.format(addCycle, pattern);



  return {
    sleepTimeArray: [timeString],
    message: "one cycle please!"
  };
}

export default useCalculateCycle;