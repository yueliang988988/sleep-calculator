import React, {useState, useEffect} from 'react';
import useCalculateCycle, {SleepCycleQuery, SleepCycleResult} from "../utils/useCalculateCycle";
// import date from 'date-and-time';
import Select, {SingleValue} from 'react-select';

// type OptionType = {
//   value: string, 
//   label: string
// }
const AsleepBy: React.FC = () => {
  const [selectHours, setSelectHours] = useState<SingleValue<{value: string, 
    label: string}>>()
  // const [currTime, setCurrTime] = useState<Date | null>();
  const { timeArray, message } = useCalculateCycle({
    time: "10:30 AM",
    method: "asleepBy"
  });

  const options = [
    { value: "1", label: "1"},
    { value: "2", label: "2"},
    { value: "3", label: "3"},
    { value: "4", label: "4"},
    { value: "5", label: "5"},
    { value: "6", label: "6"},
    { value: "7", label: "7"},
    { value: "8", label: "8"},
    { value: "9", label: "9"},
    { value: "10", label: "10"},
    { value: "11", label: "11"},
    { value: "12", label: "12"}
  ];

  const handleChangeHours = (obj: SingleValue<{value: string, 
    label: string}>) => {
    setSelectHours(obj);
  }

  console.log("selected: ", selectHours?.value)
  


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
        <Select 
          options={options}
          instanceId={"hours"}
          // className="w-20"
          onChange={(option) => handleChangeHours(option)}
          blurInputOnSelect
        />

        <p>
          {/* {currTime === "" ? "--:-- --" : currTime} */}
          {selectHours?.value ? selectHours?.value : "pick something"}
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