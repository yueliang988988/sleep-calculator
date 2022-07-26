import React from 'react';
import useCalculateCycle, {SleepCycleQuery, SleepCycleResult} from "../utils/useCalculateCycle";


const WakeUpAt = () => {

  const { timeArray, message } = useCalculateCycle({
    time: "08:00 AM",
    method: "wakeUpAt"
  });

  return (
    <div
    className="p-4"
  >
    {/* time picker component */}
    <p>
      {timeArray[0]} | 
      {timeArray[1]} | 
      {timeArray[2]} |
      {timeArray[3]} |
      {timeArray[4]} |
      {timeArray[5]} |
      {timeArray[6]}
    </p>
    <p
      className=" text-xl pt-4 text-amber-800"
    >
      {message}
    </p>

  </div>
  )
}

export default WakeUpAt