import React, {useState, useEffect} from 'react';
import useCalculateCycle, {SleepCycleQuery, SleepCycleResult} from "../utils/useCalculateCycle";
import Select, {SingleValue} from 'react-select';
import SolutionDisplay from './SolutionDisplay';
import { useCycle } from 'framer-motion';
import { hoursSelect, minutesSelect, meridiemSelect } from '../utils/timeChoices';


export type TimePickerProps = {
  method: "asleepBy" | "wakeUpAt"
};

const TimePicker: React.FC<TimePickerProps> = ({method}) => {
  const [selectedHours, setSelectedHours] = useState<SingleValue<{value: string, 
    label: string}>>();
  const [selectedMinutes, setSelectedMinutes] = useState<SingleValue<{value: string, 
    label: string}>>();
  const [selectedMeridiem, setSelectedMeridiem] = useState<SingleValue<{value: string, 
    label: string}>>();
  const [solutionArray, setSolutionArray] = useState<string[]>();

  const [isOpen, toggleOpen] = useCycle<boolean>(false, true)
  // const {}
  // const { timeArray, message } = useCalculateCycle({
  //   time: "10:30 AM",
  //   method: "asleepBy"
  // });


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
    // console.log(selectedHours?.value);
    if (selectedHours?.value === undefined || selectedMinutes?.value === undefined || selectedMeridiem?.value === undefined){
      return;
    }
    const {timeArray, message} = useCalculateCycle({
      time: `${selectedHours?.value}:${selectedMinutes?.value} ${selectedMeridiem?.value}`,
      method: method
    });
    // console.table(timeArray);
    // toggleOpen();
    setSolutionArray(timeArray);
    toggleOpen();

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
            onClick={handleSubmitTime}
            className="p-2 bg-slate-100 rounded-md"
          >
            Calculate
          </button>
        </div>
        {/* 
          <p>
            {selectedHours?.value ? selectedHours?.value : "pick something"}
          </p>
          <p>
            {selectedMinutes?.value ? selectedMinutes?.value : "pick something"}
          </p>
          <p>
            {selectedMeridiem?.value ? selectedMeridiem?.value : "pick something"}
          </p> */
        }
        {/* <p>
          {`${selectedHours?.value}:${selectedMinutes?.value} ${selectedMeridiem?.value}`}
        </p> */}
        {/* {
          solutionArray ? <p>
            {
              method === "asleepBy" ? <span>You should wake up at one of these times</span> : <span>You go to sleep at one of these times</span>
            }
          </p> : <p></p>
        } */}

        {/* 
          // ! create smaller component here, pass array and method as props
        */}
      
          {solutionArray ? <SolutionDisplay solutionArray={solutionArray} isOpen={isOpen} /> : <p>Pick a valid time!</p>}
          
    
        {/* <p
          className=" text-xl pt-4 text-amber-800"
        > */}
          {/* {message} */}
        {/* </p> */}

      </div>
  )
}

export default TimePicker