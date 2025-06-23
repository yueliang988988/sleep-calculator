import React, {useState} from 'react';
import calculateCycle from "../utils/calculateCycle";
import Select, {SingleValue} from 'react-select';
import SolutionDisplay from './SolutionDisplay';
import { hoursSelect, minutesSelect, meridiemSelect } from '../utils/timeChoices';
import usePrevious from '../utils/usePrevious';
import {motion, AnimatePresence} from 'framer-motion'
import { CloseButton } from './CloseButton';
import { ErrorMsg, Notifications } from './ErrorMsg';

type TimePickerProps = {
  method: "asleepBy" | "wakeUpAt",
  notifications: Notifications[],
  setNotifications: React.Dispatch<React.SetStateAction<Notifications[]>>,
  add: (arr: Notifications[], obj: ErrorMsg) => Notifications[],
  remove: (arr: Notifications[], item: number) => Notifications[]
};

export type SolutionArrayMsg = {
  solArray: string[],
  solMsg: string

}

const TimePicker: React.FC<TimePickerProps> = ({method, notifications, setNotifications, add, remove}) => {
  
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
  const [solutionArrayMsg, setSolutionArrayMsg] = useState<SolutionArrayMsg>();


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
    if (selectedHours?.value === undefined || 
      selectedMinutes?.value === undefined || 
      selectedMeridiem?.value === undefined){
        const msg: ErrorMsg = {
          errorType: "no set time",
          message: "Enter a valid time!"
        };
        setNotifications(add(notifications, msg));
        return;
    }
    if(selectedHours?.value === prevHours && 
      selectedMinutes?.value === prevMinutes && 
      selectedMeridiem?.value === prevMeridiem){
        const msg: ErrorMsg = {
          errorType: "enter new time",
          message: "Enter a new time!"
        };
        setNotifications(add(notifications, msg));
        return;
    }
    const {timeArray, message} = calculateCycle({
      time: `${selectedHours?.value}:${selectedMinutes?.value} ${selectedMeridiem?.value}`,
      method: method
    });
    setSolutionArray(timeArray);
    setSolutionArrayMsg({ solArray: timeArray, solMsg: message})
  };


  return (
    <div
        className=" flex flex-col items-start justify-start 
                    gap-8 p-4 min-h-[200px] w-full" 
      >
        <ul 
          className="p-0 m-0 fixed bottom-0 right-0 top-0 
                    flex flex-col list-none justify-start"
        >
          <AnimatePresence>
            {
              notifications.map( notif => (
                <motion.li
                  key={notif.id}
                  className={`relative w-60 m-3 flex-grow-0 flex-shrink-0 basis-24 
                            rounded-md bg-slate-100`}
                  layout="position"
                  initial={{ opacity: 0, y: 20, scale: 0.3 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-[5px] rounded-b-md
                                bg-rose-400`}
                    initial={{ width: "0%",}}
                    animate={{ width: "100%", }}
                    transition={{ duration: 2.1 }}
                    onAnimationComplete={() => {
                      setNotifications(remove(notifications, notif.id))
                    }}
                  />
                  <p 
                    className={`relative top-[34px] left-4 text-xl`} 
                  >
                    {notif.message}
                  </p>
                  <CloseButton
                      color={notif.errorType}
                      close={() => setNotifications(remove(notifications, notif.id))}
                  />
                </motion.li>
              ))
            }
          </AnimatePresence>
        </ul>
        <div
          className='flex flex-row items-start justify-start gap-4 flex-wrap'
        >

          <Select 
            options={hoursSelect}
            instanceId={"hours"}
            onChange={handleChangeHours}
            blurInputOnSelect
          />
          <Select 
            options={minutesSelect}
            instanceId={"minutes"}
            onChange={handleChangeMinutes}
            blurInputOnSelect
          />
          <Select 
            options={meridiemSelect}
            instanceId={"meridiem"}
            onChange={handleChangeMeridiem}
            blurInputOnSelect
          />

          <button
            onClick={() => {
              handleSubmitTime()
            }}
            className="p-2 bg-slate-100 rounded-md"
          >
            Calculate
          </button>
        </div>

      
        {
          solutionArrayMsg ? 
          <SolutionDisplay solutionArrayMsg={solutionArrayMsg} /> 
          : <p>Pick a valid time!</p>
        }
      </div>
  )
}

export default TimePicker