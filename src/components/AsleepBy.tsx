import React, {useState, useEffect} from 'react';
import useCalculateCycle, {SleepCycleQuery, SleepCycleResult} from "../utils/useCalculateCycle";
import date from 'date-and-time';


const AsleepBy: React.FC = () => {

  // const [currTime, setCurrTime] = useState<Date | null>();
  const { timeArray, message } = useCalculateCycle({
    time: "10:30 AM",
    method: "asleepBy"
  });
  


  return (
    <div
        className=" flex flex-col items-start justify-start gap-4 p-4 h-80"
      >
        {/* time picker component */}
        {/* <p></p> */}
        {/* <input 
          type="time"
          className="p-3 font-bold text-xl font-mono bg-slate-200 rounded-md"
          onChange={(e) => {
            console.log("lmao!");
            setCurrTime(e.target.valueAsDate);
            let setTime = e.target.valueAsDate!;
            console.log(date.format(setTime, "hh:mm A"))
          }}
        /> */}

        {/* ! LETS DO SINGLE DROP DOWN INPUTS */}

        <p>
          {/* {currTime === "" ? "--:-- --" : currTime} */}
        </p>

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

export default AsleepBy