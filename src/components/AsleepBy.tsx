import React, {useState, useEffect} from 'react';
import useCalculateCycle, {SleepCycleQuery, SleepCycleResult} from "../utils/useCalculateCycle";
import Select, {SingleValue} from 'react-select';
import { hoursSelect, minutesSelect, meridiemSelect } from '../utils/timeChoices';


const AsleepBy: React.FC = () => {
  const [selectedHours, setSelectedHours] = useState<SingleValue<{value: string, 
    label: string}>>();
  const [selectedMinutes, setSelectedMinutes] = useState<SingleValue<{value: string, 
    label: string}>>();
  const [selectedMeridiem, setSelectedMeridiem] = useState<SingleValue<{value: string, 
    label: string}>>();
  const { timeArray, message } = useCalculateCycle({
    time: "10:30 AM",
    method: "asleepBy"
  });


  const handleChangeHours = (obj: SingleValue<{value: string, 
    label: string}>) => {
    setSelectedHours(obj);
  }
  const handleChangeMinutes = (obj: SingleValue<{value: string, 
    label: string}>) => {
    setSelectedMinutes(obj);
  }
  const handleChangeMeridiem = (obj: SingleValue<{value: string, 
    label: string}>) => {
    setSelectedMeridiem(obj);
  }  


  return (
    <div
        className=" flex flex-col items-start justify-start gap-4 p-4 h-80"
      >
        <div
          className='flex flex-row items-start justify-start gap-4'
        >

          <Select 
            options={hoursSelect}
            instanceId={"hours"}
            // className="w-20"
            onChange={(option) => handleChangeHours(option)}
            blurInputOnSelect
          />
          <Select 
            options={minutesSelect}
            instanceId={"minutes"}
            // className="w-20"
            onChange={(option) => handleChangeMinutes(option)}
            blurInputOnSelect
          />
          <Select 
            options={meridiemSelect}
            instanceId={"meridiem"}
            // className="w-20"
            onChange={(option) => handleChangeMeridiem(option)}
            blurInputOnSelect
          />
        </div>

        <p>
          {selectedHours?.value ? selectedHours?.value : "pick something"}
        </p>
        <p>
          {selectedMinutes?.value ? selectedMinutes?.value : "pick something"}
        </p>
        <p>
          {selectedMeridiem?.value ? selectedMeridiem?.value : "pick something"}
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