import type { NextPage } from "next";
import React, {useState} from 'react'
import TimePicker from "../components/TimePicker";
import { add, remove } from "../utils/notification-util";

export interface ErrorMsg {
  errorType: "no set time" | "enter new time",
  message: "Enter a valid time!" | "Enter a new time!"
}
export interface Notifications extends ErrorMsg {
  id: number,
}

const Home: NextPage = () => {

  const [notifications, setNotifications] = useState<Notifications[]>([]);

  return (
    <>
      <h2 className="text-2xl text-gray-800 p-4 self-start">I will be asleep by... </h2>
      <TimePicker 
        method="asleepBy"
        notifications={notifications}
        setNotifications={setNotifications}
        add={add}
        remove={remove}
      />

      <h2 className="text-2xl text-gray-800 p-4 self-start">I need to wake up at...</h2>
      <TimePicker 
        method="wakeUpAt"
        notifications={notifications}
        setNotifications={setNotifications}
        add={add}
        remove={remove}
      />


    </>
  );
};


export default Home;
