import React, {useState} from 'react';
import useCalculateCycle from "../utils/useCalculateCycle";
import Select, {SingleValue} from 'react-select';
import SolutionDisplay from './SolutionDisplay';
import { hoursSelect, minutesSelect, meridiemSelect } from '../utils/timeChoices';
import usePrevious from '../utils/usePrevious';


export type TimePickerProps = {
  method: "asleepBy" | "wakeUpAt"
};

const TimePicker: React.FC<TimePickerProps> = ({method}) => {
  
  const [selectedHours, setSelectedHours] = useState<SingleValue<{value: string, 
    label: string}>>();
  const prevHours = usePrevious(selectedHours?.value);
  const [selectedMinutes, setSelectedMinutes] = useState<SingleValue<{value: string, 
    label: string}>>();
  const prevMinutes = usePrevious(selectedMinutes?.value);
  const [selectedMeridiem, setSelectedMeridiem] = useState<SingleValue<{value: string, 
    label: string}>>();
  const prevMeridiem = usePrevious(selectedMeridiem?.value);
  
  const [solutionArray, setSolutionArray] = useState<string[]>();

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
  const handleSubmitTime = () => {
    // ! https://codesandbox.io/s/framer-motion-notifications-5cvo9?file=/src/index.tsx
    // use this example to implement an alert!
    if (selectedHours?.value === undefined || selectedMinutes?.value === undefined || selectedMeridiem?.value === undefined){
      return;
    }
    if(selectedHours?.value === prevHours && selectedMinutes?.value === prevMinutes && selectedMeridiem?.value === prevMeridiem){
      return;
    }

    const {timeArray, message} = useCalculateCycle({
      time: `${selectedHours?.value}:${selectedMinutes?.value} ${selectedMeridiem?.value}`,
      method: method
    });
  
    setSolutionArray(timeArray);
  };


  return (
    <div
        className=" flex flex-col items-start justify-start gap-8 p-4 min-h-[200px] bg-gradient-to-br from-purple-300 to-pink-200"
      >
        <div
          className='flex flex-row items-start justify-start gap-4'
        >

          <Select 
            options={hoursSelect}
            instanceId={"hours"}
            // className="rounded-2xl"
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

          <button
            // type='submit'
            onClick={() => {
              // setIsLoading(true)
              handleSubmitTime()
            }}
            className="p-2 bg-slate-100 rounded-md"
          >
            Calculate
          </button>
        </div>

      
          {
            solutionArray ? 
            <SolutionDisplay solutionArray={solutionArray} /> 
            : <p>Pick a valid time!</p>
          }

        {/* <SolutionDisplay solutionArray={solutionArray} /> */}
          
    






        {/* <p
          className=" text-xl pt-4 text-amber-800"
        > */}
          {/* {message} */}
        {/* </p> */}

      </div>
  )
}

export default TimePicker